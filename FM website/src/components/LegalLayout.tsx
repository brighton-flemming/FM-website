import { ArrowLeft } from 'lucide-react';

interface Props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, subtitle, children }: Props) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Site Header */}
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

      {/* Hero band */}
      <div className="bg-olive-dark text-white py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{title}</h1>
          <p className="text-white/70 text-base">{subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 py-16 px-6">
        <div className="max-w-3xl mx-auto">{children}</div>
      </main>

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
