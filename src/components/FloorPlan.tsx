import Image from "next/image";
import { whatsappMessages } from "@/lib/property";
import WhatsAppButton from "./WhatsAppButton";

export default function FloorPlan() {
  return (
    <section id="planta" className="bg-gray-soft py-10 sm:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-xl font-bold text-navy sm:text-2xl lg:text-3xl">
          Planta do apartamento — 3 dormitórios
        </h2>

        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-border bg-white shadow-sm">
          <div className="relative mx-auto aspect-[4/3] w-full max-h-[420px] sm:aspect-[3/2] sm:max-h-[480px]">
            <Image
              src="/images/planta.png"
              alt="Planta baixa do apartamento de 3 dormitórios, Grupo 13/15/17"
              fill
              loading="lazy"
              className="object-contain"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
          <p className="border-t border-gray-border py-2 text-center font-heading text-sm font-semibold text-navy">
            Planta tipo — Grupo 13/15/17
          </p>
        </div>

        <p className="mt-3 text-center text-xs sm:text-sm leading-relaxed text-gray-500">
          Imagem meramente ilustrativa. A configuração definitiva da unidade, incluindo
          dependência e despensa, deverá ser confirmada conforme sorteio, lance e documentação da
          cota.
        </p>

        <div className="mt-6 flex justify-center">
          <WhatsAppButton message={whatsappMessages.plan}>
            Quero receber a planta e mais informações
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
