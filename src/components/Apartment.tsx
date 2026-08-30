import { property } from "@/lib/property";

const features = [
  `${property.area} m² de área privativa`,
  `${property.bedrooms} dormitórios`,
  `${property.suites} suíte com closet`,
  `${property.bathrooms} banheiros + lavabo`,
  "Varanda gourmet",
  "Churrasqueira",
  `${property.parkingSpaces} vaga de garagem`,
  "Sala de estar",
  "Sala de jantar",
  "Cozinha",
  "Área de serviço",
];

export default function Apartment() {
  return (
    <section id="apartamento" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
            Um apartamento pensado para viver com espaço
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            A cota está vinculada a uma unidade de aproximadamente {property.area} m², com{" "}
            {property.bedrooms} dormitórios, suíte com closet e ambientes amplos, incluindo
            varanda gourmet.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-lg border border-gray-border bg-white px-4 py-3.5"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 shrink-0 text-gold">
                <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium text-navy">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-gold/30 bg-gold/5 p-5 text-sm leading-relaxed text-navy">
          <strong>Dependência de empregada e despensa:</strong> disponibilidade conforme unidade
          definida no sorteio ou condições do lance.
        </div>
      </div>
    </section>
  );
}
