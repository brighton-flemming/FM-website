import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Standard Local',
    priceGbp: '£300',
    priceKsh: 'KShs 51,900',
    period: '/quarter',
    description: 'Entry-level SEO and GBP optimization for growing businesses.',
    features: [
      'GBP Optimization & Management',
      'Basic Technical SEO',
      'Review Response Management',
      'Basic Technical Audit & Fixes',
      'Monthly Performance Reports',
    ],
    cta: 'Start Growing',
    highlighted: false,
  },
  {
    name: 'Market Leader',
    priceGbp: '£499',
    priceKsh: 'KShs 86,331',
    period: '/quarter',
    description: 'Comprehensive local dominance and lead generation.',
    features: [
      'Everything in Standard Local',
      'Advanced Technical SEO',
      'Competitor Analysis',
      'Weekly Progress Calls',
      'Basic Schema Implementation',
      'Priority Support',
    ],
    cta: 'Dominate Your Market',
    highlighted: true,
  },
  {
    name: 'Search Everywhere Optimization',
    priceGbp: '£1,197',
    priceKsh: 'KShs 207,255',
    period: '/quarter',
    description: 'Full technical audit and optimized setup for immediate impact.',
    discount: 'Save up to £300',
    features: [
      'Everything in Market Leader',
      'AI SEO',
      'Schema Markup Implementation',
      'Multi-Channel Lead Generation',
      'Full Technical Audit & Fixes',
      '24/7 Support',
    ],
    cta: 'Launch Now',
    highlighted: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="pricing" ref={ref} className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-olive-dark mb-4">Clear, Transparent Pricing</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            No hidden fees. No contracts. Cancel anytime. Results-driven investment with full transparency.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative p-8 rounded-2xl ${
                plan.highlighted
                  ? 'bg-olive text-white shadow-2xl scale-105 border-2 border-olive-dark'
                  : 'bg-white text-olive-dark shadow-lg border border-olive/10'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-olive-dark px-6 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold">{plan.priceGbp}</span>
                  <span className={`text-lg ${plan.highlighted ? 'text-white/80' : 'text-gray-700'}`}>
                    {plan.period}
                  </span>
                </div>
                <div className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-gray-600'}`}>
                  or {plan.priceKsh} {plan.period}
                </div>
                {'discount' in plan && (
                  <div className="mt-2 inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {plan.discount}
                  </div>
                )}
              </div>
              <p className={`mb-8 ${plan.highlighted ? 'text-white/90' : 'text-gray-700'}`}>
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check
                      className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-olive'
                      }`}
                    />
                    <span className={plan.highlighted ? 'text-white/90' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-full font-semibold transition-colors block text-center ${
                  plan.highlighted
                    ? 'bg-white text-olive hover:bg-gray-100'
                    : 'bg-olive text-white hover:bg-olive-dark'
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
