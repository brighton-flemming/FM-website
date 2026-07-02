import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, BarChart2, FileCheck, ArrowRight } from 'lucide-react';

const commitments = [
  {
    icon: Phone,
    title: 'You hear from us every week.',
    description: "Not a monthly PDF that lands in your inbox and means nothing. A real conversation about what we did, what moved, and what we're doing next. You're never guessing.",
  },
  {
    icon: BarChart2,
    title: 'We report on what matters to you.',
    description: 'Calls. Enquiries. Direction requests. Website visits that actually convert. Not impressions, not reach, not numbers we picked because they look good.',
  },
  {
    icon: FileCheck,
    title: 'No lock-in. No surprises.',
    description: "Month-to-month. Cancel anytime. We don't keep clients using contracts. We keep clients by doing work that's worth paying for.",
  },
];

export default function Trust() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-6 bg-olive-dark text-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">What you can expect</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            You've probably been burned before.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Paid someone for six months and got no results? Got a vague report  even when you asked questions? We hear it from almost every business that comes to us. Here's what we do differently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {commitments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/5 border border-white/10 rounded-2xl px-8 py-7"
        >
          <p className="text-white text-lg font-semibold text-center sm:text-left">
            See exactly what's holding your business back; in 30 minutes or less, for free.
          </p>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-olive-dark font-semibold px-7 py-3.5 rounded-full hover:bg-gray-100 transition-colors text-sm"
          >
            Get Your Free Local SEO Audit
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
