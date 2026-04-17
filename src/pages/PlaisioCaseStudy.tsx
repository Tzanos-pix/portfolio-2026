import { useEffect } from 'react';
import { TrendingUp, Mail, Activity, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PlaisioCaseStudy({ navigateTo }: { navigateTo: any }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-green-900 selection:text-green-100 pb-24">
      {/* Navigation (Dark Mode) */}
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

      <main className="pt-32 px-6">
        {/* Hero Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
            Plaisio Black Friday:<br/><span className="text-gray-400">The Modular System</span>
          </h1>
        </motion.div>

        {/* Teaser Video */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-5xl mx-auto mb-24 relative rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(0,255,0,0.1)] border border-gray-800">
            <video src="/02 - bfteaser.webm" autoPlay loop muted playsInline className="w-full h-auto object-cover"></video>
        </motion.div>

        {/* Intro Box */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto border border-gray-800 bg-[#111111] rounded-2xl p-8 md:p-10 text-center mb-24 shadow-2xl">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-4">High-Conversion UI/UX at Scale</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            We redesigned the digital storefront of Greece's largest technology retailer by shifting from static campaigns to a modular design system. It handles extreme traffic spikes while maximizing conversion rates.
          </p>
        </motion.div>

        {/* Floating Mockups (Videos) */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative max-w-4xl mx-auto flex flex-col items-center mb-32">
          {/* Desktop Mockup Video (Green Glow) */}
          <div className="w-full md:w-4/5 aspect-[16/9] bg-[#161616] border border-gray-800 rounded-3xl flex items-center justify-center shadow-[0_0_60px_rgba(0,255,0,0.07)] relative z-0 overflow-hidden">
             <video src="/01 - NL scrolling.mov" autoPlay loop muted playsInline className="w-full h-full object-cover"></video>
          </div>
          {/* Mobile Mockup Video (Magenta Glow) */}
          <div className="w-2/3 md:w-1/3 aspect-[9/16] bg-[#0a0a0a] border border-gray-700 rounded-[2.5rem] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(255,0,255,0.15)] -mt-24 md:-mt-40 z-10 relative overflow-hidden">
             <video src="/02 - mobile mock up.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover"></video>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto mb-32">
          <h3 className="text-center text-xl font-bold text-white mb-8">Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-800 bg-[#111111] rounded-3xl p-10 shadow-2xl">
            <div className="text-center">
              <div className="text-green-500 flex justify-center mb-4"><TrendingUp size={36} strokeWidth={1.5} /></div>
              <div className="text-5xl font-bold text-white mb-2">+37%</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">CTR Increase</div>
            </div>
            <div className="text-center md:border-l md:border-r border-gray-800">
              <div className="text-blue-400 flex justify-center mb-4"><Activity size={36} strokeWidth={1.5} /></div>
              <div className="text-5xl font-bold text-white mb-2">4.2x</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-gray-300 flex justify-center mb-4"><Mail size={36} strokeWidth={1.5} /></div>
              <div className="text-5xl font-bold text-white mb-2">&gt;46%</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Open Rate</div>
            </div>
          </div>
        </motion.section>

        {/* The Challenge */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-10">
            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-3">The Challenge:</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display">Chaos vs Consistency</h2>
          </div>
          <div className="bg-[#111111] border-l-4 border-green-500 p-8 md:p-10 rounded-r-2xl shadow-xl">
            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              Black Friday at Plaisio handles massive traffic. The core issue was finding the balance between aggressive promotional marketing and a clean, trustworthy user experience that doesn't overwhelm the user.
            </p>
            <div className="p-5 bg-green-500/10 rounded-xl border border-green-500/20 text-green-400 text-sm leading-relaxed">
              <strong className="block mb-2 text-green-300 font-bold">The Objective:</strong>
              Increase click-through rates by standardizing components while maintaining a high-energy visual aesthetic.
            </div>
          </div>
        </motion.section>

        {/* The Solution: Figma Design System */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto mb-32 text-center">
          <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-3">The Solution:</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 font-display">A Modular Design System</h2>
          <div className="inline-flex items-center px-6 py-2 bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30 rounded-full text-sm font-bold mb-12 shadow-[0_0_20px_rgba(255,0,255,0.1)]">
            Atomic Design in Figma
          </div>
          <div className="w-full aspect-[16/10] bg-[#111111] border border-gray-800 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
             <img src="/figma file 1.jpg" alt="Figma Design System" className="w-full h-full object-cover" />
          </div>
        </motion.section>

        {/* System in Action */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-5xl mx-auto mb-32">
          <h3 className="text-center text-3xl font-bold text-white mb-16 font-display">System in Action</h3>
          
          {/* SVG Icons Row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#0a0a0a] border border-green-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,0,0.15)] hover:bg-green-500/10 transition-colors p-4">
                 <img src="/Asset 1.svg" alt="Asset 1" className="w-full h-full object-contain" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#0a0a0a] border border-green-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,0,0.15)] hover:bg-green-500/10 transition-colors p-4">
                 <img src="/Asset 2.svg" alt="Asset 2" className="w-full h-full object-contain" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#0a0a0a] border border-green-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,0,0.15)] hover:bg-green-500/10 transition-colors p-4">
                 <img src="/Asset 3.svg" alt="Asset 3" className="w-full h-full object-contain" />
              </div>
          </div>

          {/* Expanded Masonry Collage */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
             <div className="aspect-[4/3] md:col-span-2 bg-[#111111] border border-gray-800 rounded-2xl flex items-center justify-center hover:border-gray-600 transition-colors overflow-hidden">
                <img src="/landing_page.jpg" alt="Landing Page Elements" className="w-full h-full object-cover object-top" />
             </div>
             <div className="aspect-[4/3] md:col-span-2 bg-[#111111] border border-gray-800 rounded-2xl flex items-center justify-center hover:border-gray-600 transition-colors overflow-hidden">
                <img src="/20241120-electric-scooter-black-friday-slider.jpg" alt="Scooter Slider" className="w-full h-full object-cover" />
             </div>

             <div className="aspect-square bg-[#111111] border border-gray-800 rounded-2xl flex items-center justify-center hover:border-gray-600 transition-colors overflow-hidden">
                <img src="/FB - 2.jpg" alt="Facebook Ad 1" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-square bg-[#111111] border border-gray-800 rounded-2xl flex items-center justify-center hover:border-gray-600 transition-colors overflow-hidden">
                <img src="/FB - 3.jpg" alt="Facebook Ad 2" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-square bg-[#111111] border border-gray-800 rounded-2xl flex items-center justify-center hover:border-gray-600 transition-colors overflow-hidden">
                <img src="/FB - 4.jpg" alt="Facebook Ad 3" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-square bg-[#111111] border border-gray-800 rounded-2xl flex items-center justify-center hover:border-gray-600 transition-colors overflow-hidden">
                <img src="/Coupon NL.jpg" alt="Newsletter Coupon" className="w-full h-full object-cover" />
             </div>

             <div className="aspect-[3/4] bg-[#111111] border border-gray-800 rounded-2xl flex items-center justify-center hover:border-gray-600 transition-colors overflow-hidden">
                <img src="/2 - Story.jpg" alt="Social Story 1" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-[3/4] bg-[#111111] border border-gray-800 rounded-2xl flex items-center justify-center hover:border-gray-600 transition-colors overflow-hidden">
                <img src="/Story – 2.jpg" alt="Social Story 2" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-[4/5] md:col-span-2 bg-[#111111] border border-gray-800 rounded-2xl flex items-center justify-center hover:border-gray-600 transition-colors overflow-hidden">
                <img src="/newsletter.jpg" alt="Newsletter Design" className="w-full h-full object-cover object-top" />
             </div>

             <div className="aspect-[4/3] md:col-span-2 bg-[#111111] border border-gray-800 rounded-2xl flex items-center justify-center hover:border-gray-600 transition-colors overflow-hidden">
                <img src="/20241120-urban-glide-e-scooters-black-friday-category-slider.jpg" alt="Category Slider" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-square bg-[#111111] border border-gray-800 rounded-2xl flex items-center justify-center hover:border-gray-600 transition-colors overflow-hidden">
                <img src="/Push – SAMSUNG OLED TVs.png" alt="OLED TV Push" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-square bg-[#111111] border border-gray-800 rounded-2xl flex items-center justify-center hover:border-gray-600 transition-colors overflow-hidden">
                <img src="/list_banner_mobile(750x410) – 1.jpg" alt="List Banner Mobile" className="w-full h-full object-cover" />
             </div>
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-16 border-t border-gray-800 pt-24">
          <h3 className="text-2xl font-bold text-white mb-6 font-display">Conclusion</h3>
          <p className="text-gray-400 leading-relaxed text-lg mb-12">
            By aligning aggressive marketing visuals with a strict, modular layout system, we maintained order amidst the chaos. The result was a highly scalable, conversion-focused journey.
          </p>
          <button onClick={() => navigateTo('home')} className="px-10 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-bold transition-all shadow-xl inline-flex items-center gap-2">
            <ArrowLeft size={20} /> Back to Home
          </button>
        </motion.section>
      </main>
    </div>
  );
}
