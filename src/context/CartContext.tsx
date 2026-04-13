"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { products, Product } from "@/data/products";
import {
  getCartFromCookie,
  saveCartToCookie,
  clearCartCookie,
  CartItemCookie,
} from "@/lib/cookies";

export interface CartItem {
  product: Product;
  qty: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  subtotal: number;
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  updateQty: (productId: number, qty: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from cookie on mount
  useEffect(() => {
    const cookieItems = getCartFromCookie();
    if (cookieItems.length > 0) {
      const restored: CartItem[] = [];
      cookieItems.forEach((ci: CartItemCookie) => {
        const product = products.find((p) => p.id === ci.id);
        if (product) {
          restored.push({ product, qty: ci.qty });
        }
      });
      setItems(restored);
      console.log(
        "%c[YZAStore Cart] 🔄 Sepet cookie'den yüklendi — %d ürün",
        "color: #0d7377; font-weight: bold;",
        restored.length
      );
    }
    setHydrated(true);
  }, []);

  // Sync to cookie on change
  useEffect(() => {
    if (!hydrated) return;
    const cookieData: CartItemCookie[] = items.map((i) => ({
      id: i.product.id,
      qty: i.qty,
    }));
    saveCartToCookie(cookieData);
  }, [items, hydrated]);

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.qty, 0);

  const addToCart = useCallback(
    (productId: number) => {
      const product = products.find((p) => p.id === productId);
      if (!product) return;

      setItems((prev) => {
        const existing = prev.find((i) => i.product.id === productId);
        if (existing) {
          const updated = prev.map((i) =>
            i.product.id === productId ? { ...i, qty: i.qty + 1 } : i
          );
          console.log(
            "%c[YZAStore Cart] ➕ Adet artırıldı: %s (yeni adet: %d)",
            "color: #27ae60; font-weight: bold;",
            product.name,
            existing.qty + 1
          );
          return updated;
        }
        console.log(
          "%c[YZAStore Cart] 🛒 Sepete eklendi: %s — %d TL",
          "color: #27ae60; font-weight: bold;",
          product.name,
          product.price
        );
        return [...prev, { product, qty: 1 }];
      });

      setIsOpen(true);
    },
    []
  );

  const removeFromCart = useCallback((productId: number) => {
    setItems((prev) => {
      const item = prev.find((i) => i.product.id === productId);
      if (item) {
        console.log(
          "%c[YZAStore Cart] 🗑️ Sepetten çıkarıldı: %s",
          "color: #e74c3c; font-weight: bold;",
          item.product.name
        );
      }
      return prev.filter((i) => i.product.id !== productId);
    });
  }, []);

  const updateQty = useCallback((productId: number, qty: number) => {
    if (qty < 1) return;
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId ? { ...i, qty } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    clearCartCookie();
    console.log(
      "%c[YZAStore Cart] 🧹 Sepet tamamen temizlendi",
      "color: #e74c3c; font-weight: bold;"
    );
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((p) => !p), []);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        totalItems,
        subtotal,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
