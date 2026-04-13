import Cookies from "js-cookie";
import { CART_COOKIE_KEY } from "./constants";

const LS_KEY = "yzastore_cart";

export interface CartItemCookie {
  id: number;
  qty: number;
}

export function getCartFromCookie(): CartItemCookie[] {
  try {
    // Try cookie first, fallback to localStorage
    let raw = Cookies.get(CART_COOKIE_KEY);
    let source = "cookie";

    if (!raw && typeof window !== "undefined") {
      raw = localStorage.getItem(LS_KEY) ?? undefined;
      source = "localStorage";
    }

    if (!raw) return [];
    const parsed = JSON.parse(raw);

    console.log(
      `%c[YZAStore] 🍪 Sepet ${source}'dan okundu:`,
      "color: #0d7377; font-weight: bold;",
      parsed
    );
    return parsed;
  } catch {
    return [];
  }
}

export function saveCartToCookie(items: CartItemCookie[]): void {
  const data = JSON.stringify(items);

  // Save to cookie
  Cookies.set(CART_COOKIE_KEY, data, { expires: 7, path: "/" });

  // Save to localStorage
  if (typeof window !== "undefined") {
    localStorage.setItem(LS_KEY, data);
  }

  console.log(
    "%c[YZAStore Cookie] 💾 Sepet cookie'ye kaydedildi:",
    "color: #0d7377; font-weight: bold;",
    items
  );
  console.log(
    "%c[YZAStore localStorage] 💾 Sepet localStorage'a kaydedildi:",
    "color: #2563eb; font-weight: bold;",
    items
  );
  console.log(
    "%c[YZAStore] 📦 Ham veri:",
    "color: #888;",
    data
  );
}

export function clearCartCookie(): void {
  Cookies.remove(CART_COOKIE_KEY, { path: "/" });

  if (typeof window !== "undefined") {
    localStorage.removeItem(LS_KEY);
  }

  console.log(
    "%c[YZAStore] 🗑️ Sepet cookie + localStorage temizlendi",
    "color: #e74c3c; font-weight: bold;"
  );
}
