"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    label: "Topuklu Ayakkabı",
    href: "/products?filter=topuklu",
    gradient: ["#1a1a2e", "#16213e"],
    desc: "Gece & Özel Gün",
  },
  {
    label: "Sneaker",
    href: "/products?filter=sneaker",
    gradient: ["#e8e4e0", "#d4cfc9"],
    desc: "Günlük Şıklık",
    dark: true,
  },
  {
    label: "Günlük Ayakkabı",
    href: "/products?filter=gunluk",
    gradient: ["#2c3e50", "#34495e"],
    desc: "Her Gün Konfor",
  },
  {
    label: "Bağcık & Aksesuar",
    href: "/products?filter=bagcik",
    gradient: ["#0d7377", "#14a3a8"],
    desc: "Detaylar Fark Yaratır",
  },
];

export default function Categories() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-10 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-teal-700/60 mb-3">
          Kategoriler
        </p>
        <h2 className="text-3xl md:text-4xl font-extralight text-stone-900 tracking-tight">
          Tarzınızı Bulun
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Link
              href={cat.href}
              className="group block relative aspect-[3/4] rounded-xl overflow-hidden"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  background: `linear-gradient(160deg, ${cat.gradient[0]}, ${cat.gradient[1]})`,
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
                <p
                  className={`text-[10px] uppercase tracking-[0.2em] mb-1 ${
                    cat.dark ? "text-stone-500" : "text-white/50"
                  }`}
                >
                  {cat.desc}
                </p>
                <h3
                  className={`text-lg font-medium tracking-wide ${
                    cat.dark ? "text-stone-800" : "text-white"
                  }`}
                >
                  {cat.label}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
