"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/images/predio.png",
    alt: "Fachada do Residencial Parque Firenze",
  },
  {
    src: "/images/predio.png",
    alt: "Vista geral do Residencial Parque Firenze",
  },
  {
    src: "/images/planta.png",
    alt: "Planta do apartamento de 3 dormitórios",
  },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-xl font-bold text-navy sm:text-2xl lg:text-3xl">
          Galeria
        </h2>

        {/* Desktop: asymmetric grid */}
        <div className="mt-10 hidden gap-4 sm:grid sm:grid-cols-3">
          <button
            type="button"
            onClick={() => setOpenIndex(0)}
            className="group relative col-span-2 row-span-2 aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 640px) 66vw, 100vw"
            />
          </button>
          {images.slice(1).map((img, i) => (
            <button
              type="button"
              key={img.src}
              onClick={() => setOpenIndex(i + 1)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="33vw"
              />
            </button>
          ))}
        </div>

        {/* Mobile: horizontal carousel */}
        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:hidden">
          {images.map((img, i) => (
            <button
              type="button"
              key={img.src}
              onClick={() => setOpenIndex(i)}
              className="relative aspect-[4/3] w-[85%] shrink-0 snap-center overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                className="object-cover"
                sizes="85vw"
              />
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria em tela cheia"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setOpenIndex(null)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative aspect-[4/3] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
