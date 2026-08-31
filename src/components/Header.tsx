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
    if (!open) return;

    const scrollY = window.scrollY;
    const { body } = document;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflowY: body.style.overflowY,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflowY = "scroll";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.width = previous.width;
      body.style.overflowY = previous.overflowY;
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-colors duration-200 ${
        scrolled ? "bg-navy/95 backdrop-blur shadow-md" : "bg-navy"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="font-heading text-lg font-bold text-white sm:text-xl">
          Residencial <span className="text-gold">Parque Firenze</span>
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:block">
            <WhatsAppButton message={whatsappMessages.default} className="!px-4 !py-2 !text-sm">
              Falar no WhatsApp
            </WhatsAppButton>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-white"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="side-menu"
            onClick={() => setOpen(true)}
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-50 flex h-dvh w-full max-w-xs flex-col overflow-y-auto overscroll-contain bg-navy-dark shadow-xl transition-transform duration-200 sm:max-w-sm ${
          open ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-3">
          <span className="font-heading text-base font-bold text-white">Menu</span>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-white hover:text-gold"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-6 py-6" aria-label="Navegação">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="border-b border-white/10 py-3.5 text-base font-medium text-white/90 hover:text-gold"
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
