import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-olive-dark text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Flemming Marketing</h2>
            <p className="text-white/80 mb-4">
              Engineering local search dominance for independent businesses.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/local-seo" className="text-white/80 hover:text-white transition-colors">Local SEO</a></li>
              <li><a href="/services/technical-seo" className="text-white/80 hover:text-white transition-colors">Technical SEO</a></li>
              <li><a href="/services/google-ads" className="text-white/80 hover:text-white transition-colors">Google Ads</a></li>
              <li><a href="/services/meta-ads" className="text-white/80 hover:text-white transition-colors">Meta Ads</a></li>
              <li><a href="/services/ai-seo" className="text-white/80 hover:text-white transition-colors">AI SEO</a></li>
              <li><a href="/services/multi-channel" className="text-white/80 hover:text-white transition-colors">Multi-Channel Lead Gen</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-white/80 hover:text-white transition-colors">All Services</a></li>
              <li><a href="/#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="space-y-3 mb-6">
              <a href="mailto:flemmingmarketing@gmail.com" className="flex items-center space-x-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-white/60 flex-shrink-0" />
                <span className="text-white/80">flemmingmarketing@gmail.com</span>
              </a>
              <a href="tel:+491773365130" className="flex items-center space-x-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-white/60 flex-shrink-0" />
                <span className="text-white/80">+49 177 336 5130</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/flemmingmarketing/" target="_blank" rel="noopener noreferrer" aria-label="Flemming Marketing on Instagram" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579832994945" target="_blank" rel="noopener noreferrer" aria-label="Flemming Marketing on Facebook" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/flemming-marketing-8339a9390/" target="_blank" rel="noopener noreferrer" aria-label="Flemming Marketing on LinkedIn" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://x.com/FlemmingM50544" target="_blank" rel="noopener noreferrer" aria-label="Flemming Marketing on X (Twitter)" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Flemming Marketing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="/imprint" className="hover:text-white transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
