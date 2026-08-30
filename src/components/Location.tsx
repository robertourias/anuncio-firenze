import { property } from "@/lib/property";

const infos = [
  "Embu das Artes",
  "Próximo à Rodovia Régis Bittencourt",
  "Acesso ao Rodoanel",
  "Conexão com São Paulo",
  "Próximo à região de Taboão da Serra",
];

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  property.address
)}`;

export default function Location() {
  return (
    <section id="localizacao" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-xl font-bold text-navy sm:text-2xl lg:text-3xl">
          Localização
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-heading text-lg font-bold text-navy">{property.development}</p>
            <p className="mt-1 text-base text-gray-600">{property.address}</p>

            <ul className="mt-6 space-y-3">
              {infos.map((info) => (
                <li key={info} className="flex items-start gap-3 text-base text-gray-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-gold">
                    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.354 7.584a13.987 13.987 0 002.274 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                  </svg>
                  {info}
                </li>
              ))}
            </ul>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-navy px-6 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-blue sm:text-base"
            >
              Abrir no Google Maps
            </a>
          </div>

          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-border">
            <iframe
              title={`Mapa — ${property.development}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                property.address
              )}&output=embed`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
