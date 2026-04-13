"use client";

import { BRAND_NAME } from "@/lib/constants";

const footerLinks = {
  Mağaza: ["Tüm Ürünler", "Yeni Gelenler", "Çok Satanlar", "Özel Seri", "İndirimler"],
  Yardım: ["Sipariş Takibi", "İade & Değişim", "Beden Rehberi", "Kargo Bilgisi", "SSS"],
  Kurumsal: ["Hakkımızda", "Kariyer", "Sürdürülebilirlik", "Basın", "İletişim"],
};

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-light tracking-[0.3em] uppercase text-white mb-4">
              {BRAND_NAME}
            </h3>
            <p className="text-sm leading-relaxed text-stone-500 mb-6">
              Kadın ayakkabı ve aksesuar koleksiyonları. Her adımda stil, her detayda kalite.
            </p>
            <div className="flex items-center gap-4">
              {["Instagram", "Pinterest", "X"].map((s) => (
                <span
                  key={s}
                  className="text-xs text-stone-600 hover:text-white transition-colors cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-300 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <span className="text-sm text-stone-500 hover:text-white transition-colors cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-600">
            © 2026 {BRAND_NAME}. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-stone-700">
            Bu site demo amaçlı hazırlanmıştır. Gerçek bir mağazayı temsil etmez.
          </p>
        </div>
      </div>
    </footer>
  );
}
