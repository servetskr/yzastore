import Cookies from "js-cookie";
import { CART_COOKIE_KEY } from "./constants";

export interface CartItemCookie {
  id: number;
  qty: number;
}

export function getCartFromCookie(): CartItemCookie[] {
  try {
    const raw = Cookies.get(CART_COOKIE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    console.log(
      "%c[YZAStore Cookie] 🍪 Sepet cookie'den okundu:",
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
  Cookies.set(CART_COOKIE_KEY, data, { expires: 7, path: "/" });
  console.log(
    "%c[YZAStore Cookie] 💾 Sepet cookie'ye kaydedildi:",
    "color: #0d7377; font-weight: bold;",
    items
  );
  console.log(
    "%c[YZAStore Cookie] 📦 Ham cookie değeri:",
    "color: #888;",
    data
  );
}

export function clearCartCookie(): void {
  Cookies.remove(CART_COOKIE_KEY, { path: "/" });
  console.log(
    "%c[YZAStore Cookie] 🗑️ Sepet cookie temizlendi",
    "color: #e74c3c; font-weight: bold;"
  );
}
