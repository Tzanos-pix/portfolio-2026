import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ navigateTo, isDark = false }: { navigateTo: any, isDark?: boolean }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isDark) {
    // --- NAVBAR ΓΙΑ ΤΟ CASE STUDY (DARK MODE) ---
    return (
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-semibold text-sm uppercase tracking-wider">
            <ArrowLeft size={18} /> Back
          </button>
          <div className="text-xl font-extrabold tracking-tight text-white font-display">
            <img src="/logo_tza_6pt-01_white.svg" alt="Tzanis Logo" className="h-6" />
          </div>
          <div className="text-gray-400 text-sm hidden md:block">UI/UX Portfolio</div>
        </div>
      </nav>
    );
  }

  // --- NAVBAR ΓΙΑ ΤΗΝ ΑΡΧΙΚΗ ΣΕΛΙΔΑ (LIGHT MODE) ---
  return (
    <nav className="fixed w-full z-50 bg-[#F7F7F9]/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <button onClick={() => navigateTo('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity bg-gray-900 p-2 rounded-lg">
              <img src="/logo_tza_6pt-01_white.svg" alt="Tzanis Logo" className="h-6" />
          </button>
        </motion.div>
        <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
          <button onClick={() => scrollToSection('work')} className="hover:text-black transition-colors">Work</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-black transition-colors">About</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-black transition-colors">Contact</button>
        </div>
        <motion.button 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          onClick={() => scrollToSection('contact')} 
          className="hidden md:inline-flex px-5 py-2 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-transform hover:scale-105"
        >
          Let's Talk
        </motion.button>
      </div>
    </nav>
  );
}
