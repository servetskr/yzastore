"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Campaign() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-10 max-w-[1400px] mx-auto">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Left — Editorial */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] rounded-xl overflow-hidden group"
        >
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{
              background: "linear-gradient(160deg, #0d7377, #14a3a8, #0d7377)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
              Sınırlı Koleksiyon
            </p>
            <h3 className="text-3xl md:text-4xl font-extralight text-white mb-3 leading-tight">
              Özel Seri
              <br />
              <span className="italic font-normal">Édition Noire</span>
            </h3>
            <p className="text-sm text-white/60 mb-8 max-w-xs">
              Numaralı üretim, el yapımı detaylar. Sadece 100 adet.
            </p>
            <Link
              href="/products?filter=ozel-seri"
              className="px-7 py-3 border border-white/30 hover:bg-white hover:text-teal-800 text-white text-xs font-semibold uppercase tracking-[0.15em] rounded-full transition-all duration-300"
            >
              Keşfet
            </Link>
          </div>
        </motion.div>

        {/* Right — Stacked */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative flex-1 rounded-xl overflow-hidden group"
          >
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{
                background: "linear-gradient(145deg, #f5f0eb, #e8e1d8)",
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-center px-10">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-2">
                Kampanya
              </p>
              <h3 className="text-2xl font-extralight text-stone-800 mb-2">
                1.500 TL Üzeri{" "}
                <span className="text-teal-700 font-normal">Ücretsiz Kargo</span>
              </h3>
              <p className="text-sm text-stone-500">
                Tüm koleksiyonda geçerli.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative flex-1 rounded-xl overflow-hidden group"
          >
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{
                background: "linear-gradient(145deg, #1a1a2e, #0f3460)",
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-center px-10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">
                Bağcık Koleksiyonu
              </p>
              <h3 className="text-2xl font-extralight text-white mb-2">
                Detaylar{" "}
                <span className="italic font-normal">Fark</span> Yaratır
              </h3>
              <Link
                href="/products?filter=bagcik"
                className="text-xs uppercase tracking-wider text-teal-400 hover:text-teal-300 transition-colors mt-1 w-fit"
              >
                İncele →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
