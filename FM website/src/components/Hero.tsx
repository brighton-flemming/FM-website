import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const pillars = [
  'We find the gaps.',
  'We fix what\'s broken.',
  'We grow what\'s working.',
];

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Updated with the new active video ID
  const videoId = "7qutsj9pfx";

  return (
    <section id="how-we-work" ref={ref} className="min-h-screen pt-28 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: Copy */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-olive/10 text-olive-dark text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wider uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-olive" />
            For independent businesses
          </motion.div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-olive-dark leading-[1.05] mb-8">
           Top 3 on Google within 90 days.{' '}
            <span className="text-olive">More calls & more money, Guaranteed.</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg">
            Your business deserves to be seen. We specialize in local SEO to drive targeted traffic, boost rankings, and deliver measurable growth; making digital marketing simple for you.
          </p>

          {/* Pillars */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            {pillars.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-2 text-sm font-semibold text-olive-dark"
              >
                <span className="w-5 h-5 rounded-full bg-olive flex items-center justify-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </span>
                {p}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-olive text-white font-semibold px-8 py-4 rounded-full hover:bg-olive-dark transition-colors text-base"
            >
              Get Your Free Local SEO Audit
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-olive/20 text-olive-dark font-semibold px-8 py-4 rounded-full hover:bg-olive/5 transition-colors text-base"
            >
              See our services
            </a>
          </motion.div>
        </motion.div>

      {/* Right: Video Section */}
<motion.div
  initial={{ x: 60, opacity: 0 }}
  animate={isInView ? { x: 0, opacity: 1 } : {}}
  transition={{ duration: 0.7, delay: 0.3 }}
  /* 1. Added 'max-w-[350px]' to keep it from getting too tall on desktop
     2. Added 'mx-auto' to center it in the right column
     3. Changed 'aspect-video' to 'aspect-[9/16]'
  */
  className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-olive/10 w-full max-w-[350px] mx-auto aspect-[9/16] bg-gray-100"
>
  <iframe
    src={`https://fast.wistia.net/embed/iframe/${videoId}?seo=true&videoFoam=false`}
    title="Flemming Marketing — Local SEO Results Overview"
    allow="autoplay; fullscreen"
    allowtransparency="true"
    frameBorder="0"
    scrolling="no"
    className="w-full h-full object-cover"
  ></iframe>
</motion.div>

      </div>
    </section>
  );
}