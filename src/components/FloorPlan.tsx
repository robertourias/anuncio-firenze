import Image from "next/image";
import { whatsappMessages } from "@/lib/property";
import WhatsAppButton from "./WhatsAppButton";

export default function FloorPlan() {
  return (
    <section id="planta" className="bg-gray-soft py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
          Planta do apartamento — 3 dormitórios
        </h2>

        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-border bg-white shadow-sm">
          <div className="relative aspect-[9/11] w-full">
            <Image
              src="/images/planta.png"
              alt="Planta baixa do apartamento de 3 dormitórios, Grupo 13/15/17"
              fill
              loading="lazy"
              className="object-contain"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
          <p className="border-t border-gray-border py-3 text-center font-heading text-sm font-semibold text-navy">
            Planta tipo — Grupo 13/15/17
          </p>
        </div>

        <p className="mt-4 text-center text-sm leading-relaxed text-gray-500">
          Imagem meramente ilustrativa. A configuração definitiva da unidade, incluindo
          dependência e despensa, deverá ser confirmada conforme sorteio, lance e documentação da
          cota.
        </p>

        <div className="mt-8 flex justify-center">
          <WhatsAppButton message={whatsappMessages.plan}>
            Quero receber a planta e mais informações
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
