import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
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
          <Mail className="mr-2" size={20} />
          Email Me
          <ArrowRight
            className="ml-2 group-hover:translate-x-1 transition-transform"
            size={20}
          />
        </motion.a>
      </motion.div>
    </footer>
  );
}
