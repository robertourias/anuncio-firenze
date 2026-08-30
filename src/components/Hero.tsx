import Image from "next/image";
import { formatCurrency, property, whatsappMessages } from "@/lib/property";
import WhatsAppButton from "./WhatsAppButton";

const quickInfo = [
  { label: `${property.area} m²` },
  { label: `${property.bedrooms} dormitórios` },
  { label: `${property.suites} suíte` },
  { label: `${property.bathrooms} banheiros + lavabo` },
  { label: `${property.parkingSpaces} vaga` },
  { label: "Varanda gourmet" },
];

export default function Hero() {
  return (
    <section id="oportunidade" className="relative overflow-hidden bg-navy">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold tracking-wider text-gold ring-1 ring-gold/40">
            OPORTUNIDADE DE COTA
          </span>

          <h1 className="mt-5 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Cota de 3 dormitórios no Residencial Parque Firenze
          </h1>

          <p className="mt-4 font-heading text-base font-medium text-blue-light sm:text-lg">
            Grupo {property.group} • Cota {property.quota} • {property.city}
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {quickInfo.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm text-white/85">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-gold">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                {item.label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message={whatsappMessages.hero}>
              Quero conhecer a cota
            </WhatsAppButton>
            <a
              href="#apartamento"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-6 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:text-base"
            >
              Ver detalhes
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/predio.png"
              alt="Fachada do Residencial Parque Firenze"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Valor da transferência
                </p>
                <p className="font-heading text-3xl font-extrabold text-navy sm:text-4xl">
                  {formatCurrency(property.transferValue)}
                </p>
              </div>
              <span className="rounded-full bg-navy px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-gold">
                Não contemplada • Aguardando sorteio
              </span>
            </div>

            <div className="mt-4 flex gap-6 border-t border-gray-border pt-4 text-sm">
              <div>
                <p className="font-heading text-xl font-bold text-navy">{property.paidInstallments}</p>
                <p className="text-gray-500">parcelas pagas</p>
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-navy">{property.remainingInstallments}</p>
                <p className="text-gray-500">parcelas restantes</p>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              O valor informado refere-se à transferência da cota. O comprador assume também o
              saldo de parcelas e demais obrigações contratuais junto à cooperativa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
