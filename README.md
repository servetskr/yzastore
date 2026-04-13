# YZAStore

Kadın ayakkabı ve aksesuar koleksiyonu — demo amaçlı e-ticaret showcase sitesi.  
Zara benzeri premium, editorial tasarım diliyle hazırlanmıştır.

## Teknolojiler

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion**
- **js-cookie** (sepet persistence)

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresinden erişin.

## Build

```bash
npm run build
npm start
```

## Proje Yapısı

```
src/
├── app/              # Sayfalar (Ana Sayfa, Ürün Listeleme)
├── components/
│   ├── layout/       # Navbar, Footer, CartDrawer
│   ├── sections/     # Hero, Categories, FeaturedProducts, Campaign, ProductsContent
│   └── ui/           # ProductCard
├── context/          # CartContext (sepet state + cookie sync)
├── data/             # 25 ürün verisi
└── lib/              # Sabitler, cookie helpers, fiyat formatter
```

## Sepet & Cookie

Sepet verileri `yzastore_cart` cookie'sinde tutulur.  
Tüm sepet işlemleri **DevTools Console**'da renkli loglarla görünür.

---

> Bu site demo amaçlı hazırlanmıştır. Gerçek bir mağazayı temsil etmez.
