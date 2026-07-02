import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Receipt, TrendingUp } from 'lucide-react';
import { WistiaPlayer } from '@wistia/wistia-player-react';

const principles = [
  {
    icon: Search,
    title: 'Diagnose first. Sell second.',
    description: "We don't pitch services until we understand what's actually wrong. Most businesses that come to us have been sold the wrong thing by someone who didn't look closely enough. We look closely.",
  },
  {
    icon: Receipt,
    title: 'No hidden agendas.',
    description: "You'll always know what we're doing, why we're doing it, and what it cost. No jargon reports designed to look impressive. No chasing vanity numbers. Just clear work and honest results.",
  },
  {
    icon: TrendingUp,
    title: 'Results over activity.',
    description: "Busy isn't the same as effective. We measure the things that matter to your business; calls, enquiries, bookings etc.",
  },
];

export default function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="manifesto" ref={ref} className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-semibold text-olive uppercase tracking-widest mb-4">How we work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-olive-dark leading-tight mb-5">
            We're not a typical agency.<br />That's the point.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Most agencies sell packages. We solve problems. Here's what that means in practice.
          </p>
        </motion.div>

        {/* --- OPTIMIZED VERTICAL VIDEO CONTAINER --- */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          /* We change 'aspect-video' (16:9) to a custom 9:16 ratio.
             'max-w-[400px]' prevents the vertical video from becoming 2000px tall on desktop.
          */
          className="mb-20 mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-100 w-full max-w-[400px] aspect-[9/16] border-4 border-white"
        >
          <WistiaPlayer 
            mediaId="7qutsj9pfx" 
            wrapper="wistia-player-container"
            className="w-full h-full"
          />
        </motion.div>
        {/* --- END VIDEO CONTAINER --- */}

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-olive/20 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-olive rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-bold text-olive-dark mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}