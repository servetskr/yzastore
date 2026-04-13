"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import {
  formatPrice,
  SHIPPING_COST,
  FREE_SHIPPING_THRESHOLD,
} from "@/lib/constants";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQty,
    clearCart,
    subtotal,
  } = useCart();

  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shipping = items.length === 0 ? 0 : isFreeShipping ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/30 z-50"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-stone-900">
                Sepetiniz ({items.length})
              </h2>
              <button
                onClick={closeCart}
                className="text-stone-400 hover:text-stone-700 transition-colors"
                aria-label="Sepeti kapat"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-stone-200 mb-4"
                  >
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" />
                  </svg>
                  <p className="text-stone-400 text-sm">Sepetiniz boş</p>
                  <button
                    onClick={closeCart}
                    className="mt-4 text-xs uppercase tracking-wider text-teal-700 hover:text-teal-800 font-medium"
                  >
                    Alışverişe Başla
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 pb-5 border-b border-stone-50 last:border-0"
                    >
                      {/* Mini product visual */}
                      <div
                        className="w-20 h-24 rounded-md flex-shrink-0"
                        style={{
                          background: `linear-gradient(145deg, ${item.product.gradient[0]}, ${item.product.gradient[1]})`,
                        }}
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[10px] text-stone-400 uppercase tracking-wider">
                              {item.product.categoryLabel}
                            </p>
                            <h4 className="text-sm font-medium text-stone-800 leading-snug">
                              {item.product.name}
                            </h4>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-stone-300 hover:text-rose-500 transition-colors flex-shrink-0"
                            aria-label="Ürünü kaldır"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity */}
                          <div className="flex items-center border border-stone-200 rounded">
                            <button
                              onClick={() =>
                                updateQty(item.product.id, item.qty - 1)
                              }
                              disabled={item.qty <= 1}
                              className="w-7 h-7 flex items-center justify-center text-stone-400 hover:text-stone-700 disabled:opacity-30 transition-colors text-xs"
                            >
                              −
                            </button>
                            <span className="w-8 text-center text-xs font-medium text-stone-700">
                              {item.qty}
                            </span>
                            <button
                              onClick={() =>
                                updateQty(item.product.id, item.qty + 1)
                              }
                              className="w-7 h-7 flex items-center justify-center text-stone-400 hover:text-stone-700 transition-colors text-xs"
                            >
                              +
                            </button>
                          </div>

                          <span className="text-sm font-semibold text-stone-800">
                            {formatPrice(item.product.price * item.qty)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Clear cart */}
                  <button
                    onClick={clearCart}
                    className="text-[11px] uppercase tracking-wider text-stone-400 hover:text-rose-500 transition-colors"
                  >
                    Sepeti Temizle
                  </button>
                </div>
              )}
            </div>

            {/* Footer / Summary */}
            {items.length > 0 && (
              <div className="border-t border-stone-100 px-6 py-5 space-y-3 bg-stone-50/50">
                <div className="flex justify-between text-sm text-stone-500">
                  <span>Ara Toplam</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm text-stone-500">
                  <span>Kargo</span>
                  <span>
                    {isFreeShipping ? (
                      <span className="text-teal-700 font-medium">Ücretsiz</span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>
                {!isFreeShipping && (
                  <p className="text-[11px] text-stone-400">
                    {formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)} daha
                    ekleyin, kargo ücretsiz olsun
                  </p>
                )}
                <div className="flex justify-between text-base font-semibold text-stone-900 pt-2 border-t border-stone-200">
                  <span>Toplam</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <button className="w-full py-3.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold uppercase tracking-[0.15em] rounded-lg transition-colors">
                  Ödemeye Geç
                </button>
                <p className="text-[10px] text-stone-400 text-center">
                  Demo amaçlı — gerçek ödeme işlemi yapılmaz
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
