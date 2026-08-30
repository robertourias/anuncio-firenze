"use client";

import { useEffect, useState } from "react";
import { navLinks, whatsappMessages } from "@/lib/property";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled
          ? "bg-navy/95 backdrop-blur shadow-md"
          : "bg-navy"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="font-heading text-lg font-bold text-white sm:text-xl">
          Residencial <span className="text-gold">Parque Firenze</span>
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:block">
            <WhatsAppButton message={whatsappMessages.default} className="!px-5 !py-2.5 !text-sm">
              Falar no WhatsApp
            </WhatsAppButton>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-white"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="side-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      <div
        id="side-menu"
        className={`fixed inset-y-0 right-0 z-40 h-dvh w-full max-w-xs overflow-y-auto bg-navy-dark shadow-xl transition-transform duration-200 sm:max-w-sm ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-24" aria-label="Navegação">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-lg font-medium text-white/90 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6 sm:hidden">
            <WhatsAppButton message={whatsappMessages.default} className="w-full">
              Falar no WhatsApp
            </WhatsAppButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
