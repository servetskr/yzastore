"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/constants";
import { useCart } from "@/context/CartContext";
import ShoeIllustration from "./ShoeIllustration";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const badgeStyles: Record<string, string> = {
  Yeni: "bg-teal-700 text-white",
  Sınırlı: "bg-amber-800 text-amber-100",
  İndirim: "bg-rose-700 text-white",
  "Çok Satan": "bg-stone-700 text-stone-100",
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="group cursor-pointer"
    >
      {/* Image placeholder */}
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            background: `linear-gradient(145deg, ${product.gradient[0]}, ${product.gradient[1]})`,
          }}
        />

        {/* Shoe illustration */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <ShoeIllustration
            category={product.category}
            className="w-[75%] h-auto drop-shadow-lg transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-1"
          />
        </div>

        {/* Product name overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent h-16 pointer-events-none" />

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full ${badgeStyles[product.badge]}`}
          >
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product.id);
          }}
          className="absolute bottom-3 left-3 right-3 py-2.5 bg-white/95 text-stone-900 text-xs font-semibold tracking-wide uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-white active:scale-[0.98] cursor-pointer"
        >
          Sepete Ekle
        </button>
      </div>

      {/* Info */}
      <div className="space-y-1">
        <p className="text-[11px] text-stone-400 uppercase tracking-wider">
          {product.categoryLabel}
        </p>
        <h3 className="text-sm font-medium text-stone-800 group-hover:text-teal-700 transition-colors leading-snug">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-stone-900">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-stone-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
