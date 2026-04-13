"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { CATEGORIES } from "@/lib/constants";
import ProductCard from "@/components/ui/ProductCard";

type SortKey = "default" | "price-asc" | "price-desc" | "name";

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter") || "all";

  const [activeCategory, setActiveCategory] = useState(initialFilter);
  const [sort, setSort] = useState<SortKey>("default");

  const filtered = useMemo(() => {
    let list =
      activeCategory === "all"
        ? products
        : activeCategory === "yeni"
          ? products.filter((p) => p.badge === "Yeni")
          : activeCategory === "indirim"
            ? products.filter((p) => p.badge === "İndirim")
            : products.filter((p) => p.category === activeCategory);

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "name":
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return list;
  }, [activeCategory, sort]);

  const allFilters = [
    { id: "all", label: "Tümü" },
    ...CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
    { id: "yeni", label: "Yeni Gelenler" },
    { id: "indirim", label: "İndirimli" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#f5f0eb] py-16 md:py-20 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-teal-700/60 mb-3"
        >
          {filtered.length} Ürün
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl md:text-5xl font-extralight text-stone-900 tracking-tight"
        >
          Koleksiyon
        </motion.h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10">
        {/* Filters & Sort */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <div className="flex flex-wrap gap-2">
            {allFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveCategory(f.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full border transition-all duration-200 ${
                  activeCategory === f.id
                    ? "bg-teal-700 text-white border-teal-700"
                    : "bg-transparent text-stone-500 border-stone-200 hover:border-teal-700 hover:text-teal-700"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="text-xs uppercase tracking-wider text-stone-500 bg-transparent border border-stone-200 rounded-full px-4 py-2 focus:outline-none focus:border-teal-700 cursor-pointer"
          >
            <option value="default">Sıralama</option>
            <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
            <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
            <option value="name">İsme Göre</option>
          </select>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-stone-400 text-sm">
              Bu kategoride ürün bulunamadı.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
