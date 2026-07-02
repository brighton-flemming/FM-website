import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ServiceLayoutProps {
  badge: string;
  headline: string;
  subheadline: string;
  problem: string;
  includes: { title: string; description: string }[];
  whoItsFor: { type: string; description: string }[];
  outcomes: string[];
  ctaLabel?: string;
  relatedServices?: { label: string; href: string }[];
}

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: (i: number) => ({ y: 0, opacity: 1, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function ServiceLayout({
  badge,
  headline,
  subheadline,
  problem,
  includes,
  whoItsFor,
  outcomes,
  ctaLabel = 'Get Your Free Local SEO Audit',
  relatedServices = [],
}: ServiceLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-olive/10 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 group">
            <img
              src="/Green_Retro_Olive_Oil_Logo_Template copy copy copy.svg"
              alt="Flemming Marketing logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-olive-dark tracking-tight group-hover:text-olive transition-colors">
              Flemming Marketing
            </span>
          </a>
          <a
            href="/#contact"
            className="bg-olive text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-olive-dark transition-colors"
          >
            Get Your Free Local SEO Audit
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-olive-dark text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #7a8b47 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto relative">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </a>
          <div className="inline-block bg-olive/30 text-white/90 text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wider uppercase">
            {badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-4">
            {subheadline}
          </p>
          <p className="text-white/60 leading-relaxed max-w-2xl mb-10">
            {problem}
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-olive-dark font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* What It Includes */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold text-olive uppercase tracking-widest mb-3">What's included</p>
            <h2 className="text-3xl md:text-4xl font-bold text-olive-dark">Everything in the engagement</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-olive/20 hover:bg-olive/5 transition-all"
              >
                <div className="w-8 h-8 bg-olive rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-bold text-olive-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-6 bg-olive-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">Ideal fit</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Who this is for</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoItsFor.map((item, i) => (
              <motion.div
                key={item.type}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-olive-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white mb-1">{item.type}</p>
                    <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold text-olive uppercase tracking-widest mb-3">Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-olive-dark">What you can expect</h2>
          </div>
          <div className="space-y-4">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={outcome}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-olive flex items-center justify-center text-white text-xs font-bold mt-0.5">
                  {i + 1}
                </span>
                <p className="text-gray-700 leading-relaxed">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 px-6 bg-gradient-to-br from-olive/10 to-olive-light/10 border-t border-olive/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-olive-dark mb-4">
            Ready to see what's holding you back?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Book a free 30-minute diagnosis call. We'll audit your current setup, identify your biggest growth levers,
            and give you a clear action plan; with no obligation.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-olive text-white font-semibold px-10 py-4 rounded-full hover:bg-olive-dark transition-colors text-lg"
          >
            {ctaLabel}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-14 px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold text-olive uppercase tracking-widest mb-6">Explore more</p>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="inline-flex items-center gap-2 border border-olive/20 text-olive-dark px-4 py-2 rounded-full text-sm font-medium hover:bg-olive hover:text-white hover:border-olive transition-all"
                >
                  {s.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-olive-dark text-white py-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Flemming Marketing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="/imprint" className="hover:text-white transition-colors">Imprint</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
