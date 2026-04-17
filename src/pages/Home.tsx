import React, { useState } from 'react';
import {
  Award,
  TrendingUp,
  Monitor,
  Package,
  ArrowRight,
  Mail,
  ExternalLink,
  Activity,
  Target,
  User,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home({ navigateTo }) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="min-h-screen bg-[#F7F7F9] text-gray-900 font-sans selection:bg-blue-200 selection:text-blue-900 pb-12">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#F7F7F9]/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity bg-gray-900 p-2 rounded-lg"
            >
              <img
                src="/logo_tza_6pt-01_white.svg"
                alt="Tzanis Logo"
                className="h-6"
              />
            </button>
          </motion.div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
            <button
              onClick={() => scrollToSection('work')}
              className="hover:text-black transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-black transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-black transition-colors"
            >
              Contact
            </button>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex px-5 py-2 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-transform hover:scale-105"
          >
            Let's Talk
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-16 px-6 max-w-7xl mx-auto text-center md:text-left flex flex-col items-center md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6 shadow-sm border border-blue-200"
        >
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
          Available for new opportunities
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] max-w-4xl text-gray-900 font-display"
        >
          Senior UI/UX Designer crafting{' '}
          <span className="text-gray-400">digital experiences</span> that
          perform.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl"
        >
          Bridging user needs with business goals through data-driven design.
          Certified by NN/g.
        </motion.p>
      </header>

      {/* BENTO GRID WORK SECTION */}
      <section id="work" className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[340px]"
        >
          {/* BENTO BOX 1: Plaisio */}
          <div
            onClick={() => navigateTo('plaisio')}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
          >
            <motion.div
              variants={itemVariants}
              className="group h-full bg-white rounded-[2rem] p-8 border border-gray-200 overflow-hidden relative flex flex-col justify-between cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="z-10">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 font-bold text-xs rounded-full uppercase tracking-wider mb-4 inline-flex items-center gap-1 border border-blue-100">
                  <Monitor size={14} /> E-Commerce UI/UX
                </span>
                <h3 className="text-3xl font-bold mb-2 font-display group-hover:text-blue-600 transition-colors">
                  Plaisio Black Friday
                </h3>
                <p className="text-gray-500 font-medium">
                  Modular visual system & landing page.
                </p>
              </div>

              <div className="z-10 mt-6 flex gap-4">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center items-start">
                  <div className="flex items-center text-green-600 mb-1">
                    <TrendingUp size={18} className="mr-1" />
                    <p className="text-3xl font-black">+37%</p>
                  </div>
                  <p className="text-xs text-gray-500 font-bold uppercase">
                    CTR Increase
                  </p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center items-start">
                  <div className="flex items-center text-blue-600 mb-1">
                    <Activity size={18} className="mr-1" />
                    <p className="text-3xl font-black">4.2x</p>
                  </div>
                  <p className="text-xs text-gray-500 font-bold uppercase">
                    ROAS
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 w-3/4 h-2/3 bg-gray-50 rounded-tl-[2rem] border-t border-l border-gray-200 shadow-2xl flex items-center justify-center transform group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-700 ease-out overflow-hidden">
                <img
                  src="/landing_page.jpg"
                  alt="Plaisio Preview"
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>
          </div>

          {/* BENTO BOX 2: NN/g */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 row-span-1 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-[2rem] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl"
          >
            <Award
              className="w-16 h-16 mb-4 relative z-10 text-blue-200"
              strokeWidth={1.5}
            />
            <h3 className="text-xl font-bold relative z-10 font-display">
              UX Certified
            </h3>
            <p className="text-blue-200 font-medium mt-2 relative z-10 text-sm">
              NN/g
            </p>
          </motion.div>

          {/* BENTO BOX 3: Agromani */}
          <motion.div
            variants={itemVariants}
            className="group col-span-1 lg:col-span-1 row-span-2 bg-white rounded-[2rem] p-8 border border-gray-200 relative overflow-hidden flex flex-col cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 font-bold text-xs rounded-full uppercase tracking-wider mb-4 self-start border border-emerald-100 flex items-center gap-1">
              Web & Brand
            </span>
            <h3 className="text-2xl font-bold mb-2 font-display">Agromani</h3>
            <p className="text-gray-500 font-medium mb-6 text-sm">
              Wix E-commerce design and physical brand expansion.
            </p>
            <div className="flex-grow bg-gray-50 rounded-2xl w-full border border-gray-200 flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-700 ease-out overflow-hidden">
              <div className="w-3/4 h-3/4 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center text-gray-400 text-xs font-medium px-4 text-center">
                [Wix Mobile Screens]
              </div>
            </div>
          </motion.div>

          {/* BENTO BOX 4: Stats */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 row-span-1 bg-gray-900 text-white rounded-[2rem] p-8 flex flex-col justify-between transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl"
          >
            <p className="text-gray-400 font-medium text-sm">
              Years bridging the gap between design and business.
            </p>
            <div className="flex items-baseline gap-1">
              <h2 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 font-display">
                10
              </h2>
              <span className="text-4xl font-bold text-gray-500">+</span>
            </div>
          </motion.div>

          {/* BENTO BOX 5: Mamba */}
          <motion.div
            variants={itemVariants}
            className="group col-span-1 md:col-span-2 lg:col-span-3 row-span-1 bg-white rounded-[2rem] p-8 border border-gray-200 flex flex-col md:flex-row items-center gap-8 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="md:w-1/2 z-10 flex flex-col justify-center h-full">
              <span className="px-3 py-1 bg-purple-50 text-purple-600 font-bold text-xs rounded-full uppercase tracking-wider mb-4 self-start border border-purple-100 flex items-center gap-1">
                <Package size={14} /> Physical UX
              </span>
              <h3 className="text-2xl font-bold mb-2 font-display">
                Mamba Vacuums
              </h3>
              <p className="text-gray-500 font-medium text-sm">
                Information Architecture for packaging. Making tech specs
                digestible in 3 seconds.
              </p>
            </div>
            <div className="md:w-1/2 w-full h-full min-h-[180px] bg-gray-50 rounded-2xl border border-gray-200 flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-700 ease-out overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-xl bg-white border border-gray-200 shadow-md flex items-center justify-center overflow-hidden transform -rotate-6">
                  <img
                    src="/box_03.jpg"
                    alt="Mamba Box"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-24 h-24 rounded-xl bg-white border border-gray-200 shadow-md flex items-center justify-center overflow-hidden transform rotate-6">
                  <img
                    src="/box_09.jpg"
                    alt="Mamba Box 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              src="/PalioudakisTzanis_purple_edited.jpg"
              alt="Tzanis Palioudakis"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl relative z-10 transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Hi, I'm Tzanis.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I'm a Senior UI/UX Designer with over a decade of experience
              translating complex business requirements into intuitive, engaging
              digital products. My approach is deeply rooted in user research
              and data analysis, ensuring that every design decision serves a
              clear purpose.
            </p>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                <User size={16} /> User-Centric
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                <Target size={16} /> Data-Driven
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer / Contact */}
      <footer
        id="contact"
        className="py-12 px-6 max-w-7xl mx-auto text-center mt-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-12 md:p-24 border border-gray-200 shadow-sm"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900 font-display">
            Let's build something <br />
            great together.
          </h2>
          <p className="text-gray-500 font-medium mb-10 max-w-xl mx-auto text-lg">
            Open for new roles as a UI/UX Designer. Let's discuss how my
            data-driven design approach can help your business.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:hello@example.com"
            className="group inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-blue-500/25"
          >
            <Mail className="mr-2" size={20} /> Email Me{' '}
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </motion.a>
        </motion.div>
      </footer>
    </div>
  );
}
