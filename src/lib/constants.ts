export const BRAND_NAME = "YZAStore";
export const BRAND_TAGLINE = "Adımlarınıza Karakter Katın";
export const BRAND_DESCRIPTION = "Kadın ayakkabı ve aksesuar koleksiyonları";
export const CURRENCY = "TL";
export const SHIPPING_COST = 49.9;
export const FREE_SHIPPING_THRESHOLD = 1500;
export const CART_COOKIE_KEY = "yzastore_cart";

export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Koleksiyon", href: "/products" },
  { label: "Yeni Gelenler", href: "/products?filter=yeni" },
  { label: "İndirim", href: "/products?filter=indirim" },
];

export const CATEGORIES = [
  { id: "topuklu", label: "Topuklu Ayakkabı", count: 6 },
  { id: "sneaker", label: "Sneaker", count: 6 },
  { id: "gunluk", label: "Günlük Ayakkabı", count: 5 },
  { id: "bagcik", label: "Bağcık & Aksesuar", count: 5 },
  { id: "ozel-seri", label: "Özel Seri", count: 3 },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price) + " TL";
};
