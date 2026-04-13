"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function FeaturedProducts() {
  const featured = products.filter(
    (p) => p.badge === "Yeni" || p.badge === "Çok Satan"
  ).slice(0, 8);

  return (
    <section className="py-20 md:py-28 px-6 lg:px-10 max-w-[1400px] mx-auto bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-teal-700/60 mb-3">
          Seçili Parçalar
        </p>
        <h2 className="text-3xl md:text-4xl font-extralight text-stone-900 tracking-tight">
          Öne Çıkanlar
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
        {featured.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mt-14"
      >
        <Link
          href="/products"
          className="inline-block px-8 py-3.5 border border-stone-300 hover:border-teal-700 text-stone-600 hover:text-teal-700 text-xs font-semibold uppercase tracking-[0.15em] rounded-full transition-colors"
        >
          Tüm Koleksiyonu Gör
        </Link>
      </motion.div>
    </section>
  );
}
