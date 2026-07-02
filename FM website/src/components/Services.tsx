import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Wrench, MousePointerClick, Share2, Sparkles, Network, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: MapPin,
    title: 'Local SEO',
    href: '/services/local-seo',
    problem: 'Not showing up in your area',
    oneliner: 'Get into the Google Map Pack for the searches that bring customers to your door.',
  },
  {
    icon: Wrench,
    title: 'Technical SEO',
    href: '/services/technical-seo',
    problem: 'Site issues holding you back',
    oneliner: 'Fix the crawl errors, slow pages, and broken signals that stop Google from ranking you.',
  },
  {
    icon: MousePointerClick,
    title: 'Google Ads',
    href: '/services/google-ads',
    problem: 'Need leads now, not in 6 months',
    oneliner: 'Search campaigns engineered for qualified enquiries.',
  },
  {
    icon: Share2,
    title: 'Meta Ads',
    href: '/services/meta-ads',
    problem: 'Invisible on social media',
    oneliner: 'Facebook and Instagram campaigns that build audiences and convert them into leads.',
  },
  {
    icon: Sparkles,
    title: 'AI SEO',
    href: '/services/ai-seo',
    problem: 'Missing from AI-generated answers',
    oneliner: 'Optimise your content so AI tools like ChatGPT and Perplexity recommend your business.',
  },
  {
    icon: Network,
    title: 'Multi-Channel Lead Generation',
    href: '/services/multi-channel',
    problem: 'Over-reliant on one source of leads',
    oneliner: 'SEO, paid ads, and content coordinated into a single system built around your gaps.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" ref={ref} className="py-24 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-semibold text-olive uppercase tracking-widest mb-4">How we help</p>
          <h2 className="text-4xl md:text-5xl font-bold text-olive-dark leading-tight mb-5">
            The right tool for the right problem.
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We don't sell packages. We diagnose what's broken and apply the services that fix it. Here's what's in our toolkit.
          </p>
        </motion.div>

        {/* Service grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.a
              key={service.href}
              href={service.href}
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -3 }}
              className="group bg-white rounded-2xl border border-gray-100 p-7 flex flex-col hover:border-olive/30 hover:shadow-md transition-all"
            >
              {/* Icon + problem tag */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 bg-olive/10 group-hover:bg-olive rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
                  <service.icon className="w-5 h-5 text-olive group-hover:text-white transition-colors" strokeWidth={1.75} />
                </div>
                <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full leading-tight text-right max-w-[140px]">
                  {service.problem}
                </span>
              </div>

              <h3 className="text-lg font-bold text-olive-dark mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{service.oneliner}</p>

              <div className="mt-5 flex items-center gap-1.5 text-olive text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-olive-dark rounded-2xl px-8 py-7"
        >
          <p className="text-white font-semibold text-lg text-center sm:text-left">
            Not sure which service fits your situation?
          </p>
          <a
            href="/#contact"
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
