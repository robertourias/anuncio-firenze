"use client";

import { useEffect, useState } from "react";
import { buildWhatsAppLink, currentTransferValue, formatCurrency, whatsappMessages } from "@/lib/property";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroHeight = window.innerHeight * 0.6;
    const onScroll = () => setVisible(window.scrollY > heroHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-gray-border bg-white px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] transition-transform duration-200 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
          Transferência
        </p>
        <p className="font-heading text-lg font-extrabold text-navy">
          {formatCurrency(currentTransferValue)}
        </p>
      </div>
      <a
        href={buildWhatsAppLink(whatsappMessages.default)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 font-heading text-sm font-bold text-navy-dark"
      >
        Falar no WhatsApp
      </a>
    </div>
  );
}
