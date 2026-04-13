"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#f5f0eb]">
      {/* Background abstract shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-[10%] w-[400px] h-[400px] bg-teal-700/[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-[15%] w-[300px] h-[300px] bg-stone-400/[0.06] rounded-full blur-3xl" />
      </div>

      {/* Center decorative line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-1/2 top-[15%] bottom-[15%] w-px bg-teal-700/10 origin-top"
      />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-teal-700/70 mb-6"
        >
          2026 İlkbahar / Yaz Koleksiyonu
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-stone-900 leading-[0.95] mb-6"
        >
          Adımlarınıza
          <br />
          <span className="font-normal italic text-teal-800">Karakter</span>
          <br />
          Katın
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-base md:text-lg text-stone-500 max-w-md mx-auto mb-10 leading-relaxed"
        >
          Zarafet ve konforun buluştuğu yeni nesil kadın ayakkabı ve aksesuar koleksiyonu.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <Link
            href="/products"
            className="px-8 py-3.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold uppercase tracking-[0.15em] rounded-full transition-colors"
          >
            Koleksiyonu Keşfet
          </Link>
          <Link
            href="/products?filter=ozel-seri"
            className="px-8 py-3.5 border border-stone-300 hover:border-teal-700 text-stone-600 hover:text-teal-700 text-xs font-semibold uppercase tracking-[0.15em] rounded-full transition-colors"
          >
            Özel Seri
          </Link>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="w-[1px] h-10 bg-stone-300" />
      </motion.div>
    </section>
  );
}
