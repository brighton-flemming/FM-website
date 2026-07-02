import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-olive/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3 group">
          <img src="/Green_Retro_Olive_Oil_Logo_Template copy copy copy.svg" alt="Flemming Marketing" className="w-10 h-10" />
          <span className="text-xl font-bold text-olive-dark tracking-tight group-hover:text-olive transition-colors">
            Flemming Marketing
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-gray-600 hover:text-olive-dark transition-colors">Services</a>
          <a href="#how-we-work" className="text-sm font-medium text-gray-600 hover:text-olive-dark transition-colors">How we work</a>
          <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-olive-dark transition-colors">Contact</a>
        </nav>

        <a
          href="#contact"
          className="bg-amber-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-700 transition-colors shadow-sm"
        >
        Free Local SEO Audit
        </a>
      </div>
    </motion.header>
  );
}
