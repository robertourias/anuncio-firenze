import Image from "next/image";

const points = [
  "Empreendimento residencial em Embu das Artes",
  "Apartamentos de diferentes tipologias",
  "Grupos destinados a diferentes configurações",
  "Estrutura de lazer",
  "Áreas de convivência",
  "Localização estratégica",
  "Acesso à Rodovia Régis Bittencourt",
];

export default function About() {
  return (
    <section id="condominio" className="py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/predio.png"
            alt="Vista geral do Residencial Parque Firenze"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy sm:text-2xl lg:text-3xl">
            Conheça o Residencial Parque Firenze
          </h2>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-base text-gray-600">
                <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-gold">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
