import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

type BusinessType = 'restaurant' | 'trades' | 'retail' | 'professional' | 'other' | null;
type Locations = 'one' | 'two_five' | 'five_plus' | null;
type Presence = 'none' | 'basic' | 'active' | null;
type Goal = 'calls' | 'map_pack' | 'traffic' | 'all' | null;

interface Step {
  key: string;
  question: string;
  hint?: string;
}

const steps: Step[] = [
  { key: 'businessType', question: 'What type of business do you run?' },
  { key: 'locations', question: 'How many locations do you have?' },
  { key: 'presence', question: "What's your current online presence?" },
  { key: 'goal', question: "What's your primary goal?", hint: 'This helps us weight the estimate toward the right channel mix.' },
];

function businessLabel(v: BusinessType) {
  const map: Record<NonNullable<BusinessType>, string> = {
    restaurant: 'Restaurant / Hospitality',
    trades: 'Trades / Home Services',
    retail: 'Retail',
    professional: 'Professional Services',
    other: 'Other',
  };
  return v ? map[v] : '';
}

function locationsLabel(v: Locations) {
  const map: Record<NonNullable<Locations>, string> = { one: '1 location', two_five: '2–5 locations', five_plus: '5+ locations' };
  return v ? map[v] : '';
}

function presenceLabel(v: Presence) {
  const map: Record<NonNullable<Presence>, string> = {
    none: 'No website / very minimal',
    basic: 'Basic website, no active SEO',
    active: 'Active SEO already running',
  };
  return v ? map[v] : '';
}

function goalLabel(v: Goal) {
  const map: Record<NonNullable<Goal>, string> = {
    calls: 'More calls & enquiries',
    map_pack: 'Map pack visibility',
    traffic: 'Website traffic',
    all: 'All of the above',
  };
  return v ? map[v] : '';
}

function calcRange(
  businessType: BusinessType,
  locations: Locations,
  presence: Presence,
  goal: Goal,
): [number, number] {
  let base = 350;

  if (businessType === 'professional') base += 100;
  if (businessType === 'trades') base += 50;
  if (businessType === 'retail') base += 75;

  if (locations === 'two_five') base += 150;
  if (locations === 'five_plus') base += 400;

  if (presence === 'none') base += 200;
  if (presence === 'basic') base += 100;

  if (goal === 'all') base += 150;
  if (goal === 'map_pack') base += 50;

  return [base, Math.round(base * 1.5)];
}

const optionBase =
  'flex items-center gap-3 w-full text-left px-5 py-4 rounded-xl border-2 transition-all cursor-pointer';
const optionIdle = 'border-gray-100 bg-white hover:border-olive/40 hover:bg-olive/5';
const optionSelected = 'border-olive bg-olive/5 text-olive-dark';

function Option({
  label,
  sublabel,
  selected,
  onClick,
}: {
  label: string;
  sublabel?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${optionBase} ${selected ? optionSelected : optionIdle}`}
    >
      <span
        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
          selected ? 'border-olive bg-olive' : 'border-gray-300'
        }`}
      >
        {selected && <span className="w-2 h-2 rounded-full bg-white" />}
      </span>
      <span className="flex-1">
        <span className="block font-semibold text-sm text-gray-800">{label}</span>
        {sublabel && <span className="block text-xs text-gray-500 mt-0.5">{sublabel}</span>}
      </span>
    </button>
  );
}

export default function SeoCalculator() {
  const [businessType, setBusinessType] = useState<BusinessType>(null);
  const [locations, setLocations] = useState<Locations>(null);
  const [presence, setPresence] = useState<Presence>(null);
  const [goal, setGoal] = useState<Goal>(null);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const stepValues = [businessType, locations, presence, goal];
  const currentValue = stepValues[step];

  function advance() {
    if (step < steps.length - 1) {
      setStep((s) => s + 1);
    } else {
      setDone(true);
    }
  }

  function reset() {
    setBusinessType(null);
    setLocations(null);
    setPresence(null);
    setGoal(null);
    setStep(0);
    setDone(false);
  }

  const [low, high] = done && businessType && locations && presence && goal
    ? calcRange(businessType, locations, presence, goal)
    : [0, 0];

  return (
    <section id="calculator" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold text-olive uppercase tracking-widest mb-3">Pricing Calculator</p>
          <h2 className="text-3xl md:text-4xl font-bold text-olive-dark mb-3">
            What should SEO cost for your business?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Answer four quick questions and get an honest estimate based on your situation, no email required.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Progress bar */}
          {!done && (
            <div className="h-1.5 bg-gray-100">
              <motion.div
                className="h-full bg-olive rounded-full"
                animate={{ width: `${((step + (currentValue ? 1 : 0)) / steps.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          )}

          <div className="p-8">
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.div
                  key={step}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Step counter */}
                  <div className="flex items-center gap-2 mb-6">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          i <= step ? 'bg-olive' : 'bg-gray-100'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                    Step {step + 1} of {steps.length}
                  </p>
                  <h3 className="text-xl font-bold text-olive-dark mb-1">{steps[step].question}</h3>
                  {steps[step].hint && (
                    <p className="text-sm text-gray-500 mb-6">{steps[step].hint}</p>
                  )}
                  {!steps[step].hint && <div className="mb-6" />}

                  <div className="space-y-3">
                    {step === 0 && (
                      <>
                        <Option label="Restaurant / Hospitality" selected={businessType === 'restaurant'} onClick={() => setBusinessType('restaurant')} />
                        <Option label="Trades / Home Services" sublabel="Plumbers, electricians, landscapers, cleaners, etc." selected={businessType === 'trades'} onClick={() => setBusinessType('trades')} />
                        <Option label="Retail" selected={businessType === 'retail'} onClick={() => setBusinessType('retail')} />
                        <Option label="Professional Services" sublabel="Legal, medical, financial, consulting, etc." selected={businessType === 'professional'} onClick={() => setBusinessType('professional')} />
                        <Option label="Other" selected={businessType === 'other'} onClick={() => setBusinessType('other')} />
                      </>
                    )}
                    {step === 1 && (
                      <>
                        <Option label="1 location" selected={locations === 'one'} onClick={() => setLocations('one')} />
                        <Option label="2–5 locations" selected={locations === 'two_five'} onClick={() => setLocations('two_five')} />
                        <Option label="5+ locations" selected={locations === 'five_plus'} onClick={() => setLocations('five_plus')} />
                      </>
                    )}
                    {step === 2 && (
                      <>
                        <Option label="No website or very minimal presence" selected={presence === 'none'} onClick={() => setPresence('none')} />
                        <Option label="Basic website, no active SEO" selected={presence === 'basic'} onClick={() => setPresence('basic')} />
                        <Option label="Active SEO already running" sublabel="We've worked on this before." selected={presence === 'active'} onClick={() => setPresence('active')} />
                      </>
                    )}
                    {step === 3 && (
                      <>
                        <Option label="More calls & enquiries" selected={goal === 'calls'} onClick={() => setGoal('calls')} />
                        <Option label="Map pack visibility" sublabel="Appear in the top 3 Google results." selected={goal === 'map_pack'} onClick={() => setGoal('map_pack')} />
                        <Option label="Website traffic" selected={goal === 'traffic'} onClick={() => setGoal('traffic')} />
                        <Option label="All of the above" selected={goal === 'all'} onClick={() => setGoal('all')} />
                      </>
                    )}
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={() => setStep((s) => s - 1)}
                        className="text-sm text-gray-500 hover:text-olive-dark transition-colors"
                      >
                        ← Back
                      </button>
                    ) : (
                      <span />
                    )}
                    <button
                      type="button"
                      disabled={!currentValue}
                      onClick={advance}
                      className="inline-flex items-center gap-2 bg-olive text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-olive-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      {step < steps.length - 1 ? 'Next' : 'See my estimate'}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Summary pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      businessLabel(businessType),
                      locationsLabel(locations),
                      presenceLabel(presence),
                      goalLabel(goal),
                    ].map((label) => (
                      <span key={label} className="bg-olive/10 text-olive-dark text-xs font-semibold px-3 py-1 rounded-full">
                        {label}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs font-semibold text-olive uppercase tracking-widest mb-2">
                    Your estimated range
                  </p>
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-5xl font-bold text-olive-dark">€{low.toLocaleString()}</span>
                    <span className="text-2xl font-semibold text-gray-400 mb-1.5">–</span>
                    <span className="text-5xl font-bold text-olive-dark">€{high.toLocaleString()}</span>
                    <span className="text-gray-500 mb-1.5 text-sm font-medium">/ month</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-8">
                    Based on your inputs, local SEO for your business typically falls within this range.
                  </p>

                  <div className="p-5 bg-amber-50 border border-amber-100 rounded-xl mb-8">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-semibold text-olive-dark">Every business is different.</span>{' '}
                      Book a free 30-minute diagnosis call and we'll tell you exactly what your business needs,
                      no fluff, no pushy sales.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/#contact"
                      className="inline-flex items-center justify-center gap-2 bg-olive text-white font-semibold px-8 py-4 rounded-full hover:bg-olive-dark transition-colors flex-1 text-center"
                    >
                      Book My Free Diagnosis
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button
                      type="button"
                      onClick={reset}
                      className="text-sm text-gray-500 hover:text-olive-dark transition-colors px-4 py-2"
                    >
                      Start over
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
