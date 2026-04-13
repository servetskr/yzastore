"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND_NAME, NAV_LINKS } from "@/lib/constants";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { totalItems, toggleCart } = useCart();
  const { currentUser, openAuth, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Left nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] text-stone-500 hover:text-teal-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-stone-900 hover:text-teal-700 transition-colors"
          >
            {BRAND_NAME}
          </Link>

          {/* Right nav */}
          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.15em] text-stone-500 hover:text-teal-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth button */}
            {currentUser ? (
              <div className="relative group">
                <button
                  className="flex items-center gap-2 text-stone-700 hover:text-teal-700 transition-colors"
                  aria-label="Hesabım"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="hidden md:inline text-xs uppercase tracking-wider">
                    {currentUser.name.split(" ")[0]}
                  </span>
                </button>
                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-stone-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <div className="px-4 py-2 border-b border-stone-50">
                    <p className="text-xs font-medium text-stone-800">{currentUser.name}</p>
                    <p className="text-[10px] text-stone-400">{currentUser.email}</p>
                  </div>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2.5 text-xs text-stone-500 hover:text-rose-600 hover:bg-stone-50 transition-colors"
                  >
                    Çıkış Yap
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => openAuth("login")}
                className="flex items-center gap-1.5 text-stone-700 hover:text-teal-700 transition-colors"
                aria-label="Giriş Yap"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="hidden md:inline text-xs uppercase tracking-[0.15em]">Giriş</span>
              </button>
            )}

            {/* Cart button */}
            <button
              onClick={toggleCart}
              className="relative p-1 text-stone-700 hover:text-teal-700 transition-colors"
              aria-label="Sepet"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-teal-700 text-white text-[9px] font-bold rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
