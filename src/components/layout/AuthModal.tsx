"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

export default function AuthModal() {
  const { isAuthOpen, authMode, login, register, closeAuth, openAuth } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (authMode === "register") {
      if (!name.trim() || !email.trim() || !password.trim()) {
        setError("Tüm alanlar zorunludur.");
        return;
      }
      if (password.length < 4) {
        setError("Şifre en az 4 karakter olmalıdır.");
        return;
      }
      const result = register(name.trim(), email.trim().toLowerCase(), password);
      if (!result.ok) setError(result.error || "Bir hata oluştu.");
      else resetForm();
    } else {
      if (!email.trim() || !password.trim()) {
        setError("E-posta ve şifre gereklidir.");
        return;
      }
      const result = login(email.trim().toLowerCase(), password);
      if (!result.ok) setError(result.error || "Bir hata oluştu.");
      else resetForm();
    }
  };

  const switchMode = () => {
    resetForm();
    openAuth(authMode === "login" ? "register" : "login");
  };

  return (
    <AnimatePresence>
      {isAuthOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => { closeAuth(); resetForm(); }}
            className="fixed inset-0 bg-black/40 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl mx-4">
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-2">
                <div>
                  <h2 className="text-lg font-semibold text-stone-900">
                    {authMode === "login" ? "Giriş Yap" : "Hesap Oluştur"}
                  </h2>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {authMode === "login"
                      ? "Hesabınıza giriş yapın"
                      : "Yeni bir hesap oluşturun"}
                  </p>
                </div>
                <button
                  onClick={() => { closeAuth(); resetForm(); }}
                  className="text-stone-300 hover:text-stone-500 transition-colors"
                  aria-label="Kapat"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-6 py-4 space-y-4">
                {authMode === "register" && (
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-500 mb-1.5">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Adınız Soyadınız"
                      className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-teal-600 transition-colors"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-500 mb-1.5">
                    E-posta
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ornek@email.com"
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-teal-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-500 mb-1.5">
                    Şifre
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-teal-600 transition-colors"
                  />
                </div>

                {/* Error */}
                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-rose-600 text-xs bg-rose-50 px-3 py-2 rounded-lg"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  className="w-full py-3 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold uppercase tracking-[0.15em] rounded-lg transition-colors"
                >
                  {authMode === "login" ? "Giriş Yap" : "Kayıt Ol"}
                </button>
              </form>

              {/* Footer switch */}
              <div className="px-6 pb-6 pt-2 text-center">
                <p className="text-xs text-stone-400">
                  {authMode === "login" ? "Hesabınız yok mu?" : "Zaten hesabınız var mı?"}{" "}
                  <button
                    onClick={switchMode}
                    className="text-teal-700 hover:text-teal-800 font-medium transition-colors"
                  >
                    {authMode === "login" ? "Hesap Oluştur" : "Giriş Yap"}
                  </button>
                </p>
                <p className="text-[10px] text-stone-300 mt-3">
                  Demo — veriler localStorage&apos;da saklanır
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
