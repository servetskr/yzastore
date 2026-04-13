import { Suspense } from "react";
import ProductsContent from "@/components/sections/ProductsContent";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <p className="text-stone-400 text-sm uppercase tracking-wider">
            Yükleniyor...
          </p>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
