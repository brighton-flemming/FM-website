import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HeatmapComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-24 px-6 bg-stone-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-semibold text-olive uppercase tracking-widest mb-4">Local visibility</p>
          <h2 className="text-4xl md:text-5xl font-bold text-olive-dark leading-tight mb-5">
            Where do you actually<br />show up on the map?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            These heatmaps show your Google Business ranking at dozens of points across your target area. Each number is your position in search results at that location.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Before */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm"
          >
            <div className="px-6 pt-6 pb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-red-500 bg-red-50 px-3 py-1 rounded-full mb-3">Before</span>
              <h3 className="text-xl font-bold text-olive-dark mb-1">Buried in the rankings</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Most businesses rank in position 10 to 20+ across their area. That means customers a few streets away can't find you, and they're choosing a competitor instead.
              </p>
            </div>
            <div className="relative">
              <img
                src="/M60_Roofing_Ltd.png"
                alt="Local SEO heatmap showing poor rankings — mostly position 10 to 20+"
                className="w-full object-cover"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm"
          >
            <div className="px-6 pt-6 pb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-3">After</span>
              <h3 className="text-xl font-bold text-olive-dark mb-1">Dominating locally</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                After working with us, businesses rank #1 across their entire service area. Every green dot is a location where customers searching for your service find you first.
              </p>
            </div>
            <div className="relative">
              <img
                src="/scan_map_3130.png"
                alt="Local SEO heatmap showing strong rankings — position 1 across the entire area"
                className="w-full object-cover"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          Each dot represents your Google Business ranking at that exact location. Position 1 means you appear first before every competitor.
        </motion.p>

      </div>
    </section>
  );
}
