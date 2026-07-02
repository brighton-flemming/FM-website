import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const expectations = [
  "We'll look at your current setup before the call, no wasted time on basics.",
  "You'll get a clear picture of what's working, what isn't, and what to fix first.",
  "No pitch decks. No pressure. If we can help, we'll tell you how. If we can't, we'll tell you that too.",
  "Month-to-month only. You're never locked in.",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('https://submit-form.com/XQ9VQmJa7', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('failed');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-semibold text-olive uppercase tracking-widest mb-4">Free Local SEO Audit</p>
          <h2 className="text-4xl md:text-5xl font-bold text-olive-dark leading-tight mb-5">
            Tell us about your business.<br />We'll tell you what's broken.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Thirty minutes. No cost. No obligation. We'll review your online presence before the call and come prepared with specific observations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: what to expect */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-olive-dark mb-6">What happens on the call</h3>
            <ul className="space-y-4 mb-10">
              {expectations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 rounded-2xl bg-white border border-gray-100 space-y-4">
              <p className="text-xs font-semibold text-olive uppercase tracking-widest">Get in touch directly</p>
              <a
                href="mailto:flemmingmarketing@gmail.com"
                className="flex items-center gap-3 text-olive-dark font-semibold hover:text-olive transition-colors"
              >
                <Mail className="w-5 h-5 text-olive flex-shrink-0" />
                flemmingmarketing@gmail.com
              </a>
              <a
                href="tel:+491773365130"
                className="flex items-center gap-3 text-olive-dark font-semibold hover:text-olive transition-colors"
              >
                <Phone className="w-5 h-5 text-olive flex-shrink-0" />
                +49 177 336 5130
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
          >
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-14 h-14 bg-olive/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-olive" />
                </div>
                <h3 className="text-xl font-bold text-olive-dark">We've got your message.</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs">
                  We'll take a look at your business before we reply, then come back to you with a suggested time.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-olive-dark mb-6">Get your free Local SEO Audit</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-olive focus:ring-2 focus:ring-olive/10 focus:outline-none transition-colors text-sm"
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-olive focus:ring-2 focus:ring-olive/10 focus:outline-none transition-colors text-sm"
                      placeholder="jane@yourbusiness.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Phone number <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-olive focus:ring-2 focus:ring-olive/10 focus:outline-none transition-colors text-sm"
                      placeholder="+44 7700 000000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Tell us about your business *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-olive focus:ring-2 focus:ring-olive/10 focus:outline-none transition-colors resize-none text-sm"
                      placeholder="What do you do, where are you based, and what's the main problem you're trying to solve?"
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-700 text-sm">
                      Something went wrong. Try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-olive text-white py-4 px-8 rounded-full font-semibold hover:bg-olive-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Get My Free Local SEO Audit
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    No sales calls. No spam. Just a straight conversation about your business.
                  </p>
                </form>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
