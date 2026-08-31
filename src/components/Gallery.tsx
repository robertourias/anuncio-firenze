"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const allImages = [
  { src: "/images/firenze (1).png", alt: "Residencial Parque Firenze" },
  { src: "/images/firenze (2).png", alt: "Residencial Parque Firenze" },
  { src: "/images/firenze (3).png", alt: "Residencial Parque Firenze" },
  { src: "/images/firenze (4).png", alt: "Residencial Parque Firenze" },
  { src: "/images/firenze (5).png", alt: "Residencial Parque Firenze" },
  { src: "/images/firenze (6).png", alt: "Residencial Parque Firenze" },
  { src: "/images/firenze (7).png", alt: "Residencial Parque Firenze" },
  { src: "/images/firenze (8).png", alt: "Residencial Parque Firenze" },
  { src: "/images/firenze (9).png", alt: "Residencial Parque Firenze" },
  { src: "/images/firenze (10).png", alt: "Residencial Parque Firenze" },
  { src: "/images/predio.png", alt: "Fachada do Residencial Parque Firenze" },
  { src: "/images/planta.png", alt: "Planta do apartamento de 3 dormitórios" },
  { src: "/images/anuncio.png", alt: "Anúncio do Residencial Parque Firenze" },
];

const highlightSrcs = ["/images/firenze (1).png", "/images/firenze (4).png", "/images/firenze (10).png"];
const highlights = highlightSrcs.map((src) => allImages.find((img) => img.src === src)!);

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openAt = (src: string) => {
    const index = allImages.findIndex((img) => img.src === src);
    setOpenIndex(index === -1 ? 0 : index);
  };

  return (
    <section className="py-14 sm:pt-0 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-xl font-bold text-navy sm:text-2xl lg:text-3xl">
          Galeria
        </h2>

        {/* Desktop: asymmetric grid */}
        <div className="mt-10 hidden gap-4 sm:grid sm:grid-cols-3">
          <button
            type="button"
            onClick={() => openAt(highlights[0].src)}
            className="group relative col-span-2 row-span-2 aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src={highlights[0].src}
              alt={highlights[0].alt}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 640px) 66vw, 100vw"
            />
          </button>
          {highlights.slice(1).map((img) => (
            <button
              type="button"
              key={img.src}
              onClick={() => openAt(img.src)}
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
          {highlights.map((img) => (
            <button
              type="button"
              key={img.src}
              onClick={() => openAt(img.src)}
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

      <Lightbox
        open={openIndex !== null}
        close={() => setOpenIndex(null)}
        index={openIndex ?? 0}
        slides={allImages.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </section>
  );
}
