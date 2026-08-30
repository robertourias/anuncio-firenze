type IconProps = { className?: string };

const s = {
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<string, (p: IconProps) => React.JSX.Element> = {
  // Ondas de água
  piscinas: (p) => (
    <svg {...s} {...p}>
      <path d="M3 16c1.6 0 1.6 1.5 3.2 1.5S7.8 16 9.4 16s1.6 1.5 3.2 1.5S14.2 16 15.8 16s1.6 1.5 3.2 1.5S20.6 16 21 16" />
      <path d="M3 20c1.6 0 1.6 1.5 3.2 1.5S7.8 20 9.4 20s1.6 1.5 3.2 1.5S14.2 20 15.8 20s1.6 1.5 3.2 1.5" />
      <path d="M8 14V5a2 2 0 1 1 4 0M14 14V5a2 2 0 1 1 4 0" />
      <path d="M8 9h4M14 9h4" />
    </svg>
  ),
  // Halter
  academia: (p) => (
    <svg {...s} {...p}>
      <path d="M6.5 7v10M3.5 9v6M17.5 7v10M20.5 9v6M6.5 12h11" />
    </svg>
  ),
  // Halter ao ar livre (com sol)
  "academia-ar-livre": (p) => (
    <svg {...s} {...p}>
      <circle cx="17.5" cy="6.5" r="2.5" />
      <path d="M17.5 2v1M17.5 10v1M21 3l-.7.7M14.7 9.3l-.7.7M22 6.5h-1M14 6.5h-1M21 10l-.7-.7" />
      <path d="M5 12v7M2.5 14v3M13 12v7M15.5 14v3M5 15.5h8" />
    </svg>
  ),
  // Bola / quadra
  quadras: (p) => (
    <svg {...s} {...p}>
      <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      <path d="M12 5v14" />
      <circle cx="12" cy="12" r="2.8" />
      <path d="M2.5 9h2.8v6H2.5M21.5 9h-2.8v6h2.8" />
    </svg>
  ),
  // Taças de brinde
  "salao-festas": (p) => (
    <svg {...s} {...p}>
      <path d="M4 3l3.2.9L10 12.4a2.6 2.6 0 1 1-5 1.4L4 3z" />
      <path d="M20 3l-3.2.9L14 12.4a2.6 2.6 0 1 0 5 1.4L20 3z" />
      <path d="M7.6 15.6 8.8 21M16.4 15.6 15.2 21M7 21h10" />
    </svg>
  ),
  // Dado / bilhar
  "salao-jogos": (p) => (
    <svg {...s} {...p}>
      <rect x="3" y="3" width="12" height="12" rx="2.5" />
      <path d="M7 7h.01M11 11h.01" />
      <circle cx="16.5" cy="16.5" r="4.5" />
      <path d="M14.6 14.6l3.8 3.8" />
    </svg>
  ),
  // Escorregador
  playground: (p) => (
    <svg {...s} {...p}>
      <path d="M3 20c0-4.5 3-8 7-9.5" />
      <path d="M3 20h6" />
      <path d="M14 4.5v13M20 4.5v13M14 20v-2.5h6V20" />
      <path d="M10.5 10.5 14 8.5" />
      <circle cx="9" cy="5" r="2" />
    </svg>
  ),
  // Ursinho / blocos
  brinquedoteca: (p) => (
    <svg {...s} {...p}>
      <rect x="3" y="12" width="8" height="8" rx="1.5" />
      <rect x="13" y="12" width="8" height="8" rx="1.5" />
      <rect x="8" y="4" width="8" height="8" rx="1.5" />
      <path d="M6 16h2M16 16h2M11 8h2" />
    </svg>
  ),
  // Grelha com fumaça
  churrasqueiras: (p) => (
    <svg {...s} {...p}>
      <path d="M4 9h16l-1.6 5.5a5 5 0 0 1-4.8 3.5h-3.2a5 5 0 0 1-4.8-3.5L4 9z" />
      <path d="M9 18l-1.5 3M15 18l1.5 3" />
      <path d="M9 6c0-1 1-1.4 1-2.4S9 2 9 2M13 6c0-1 1-1.4 1-2.4S13 2 13 2" />
    </svg>
  ),
  // Folha / árvore
  "areas-verdes": (p) => (
    <svg {...s} {...p}>
      <path d="M12 21v-6" />
      <path d="M12 15C7.5 15 5 12 5 8.5 5 5.5 7.5 3 12 3s7 2.5 7 5.5c0 3.5-2.5 6.5-7 6.5z" />
      <path d="M12 15V6" />
      <path d="M12 10.5 9 8M12 12.5l3-2.5" />
    </svg>
  ),
  // Banco de praça
  praca: (p) => (
    <svg {...s} {...p}>
      <path d="M3 11h18M3 14h18" />
      <path d="M4 8h16l1 3H3l1-3z" />
      <path d="M5 14v6M19 14v6M7.5 14v3.5M16.5 14v3.5" />
    </svg>
  ),
  // Pegadas / caminhada
  "pista-caminhada": (p) => (
    <svg {...s} {...p}>
      <circle cx="14.5" cy="4.5" r="2" />
      <path d="M13 21l1.8-5.4-2.8-2.4.9-4.7 3.6 1.6 1.5 2.6 2.5.9" />
      <path d="M12.9 8.5 9.6 9.9 8 13" />
      <path d="M14.8 15.6 11.5 18l-2 3" />
      <path d="M2.5 21h4" />
    </svg>
  ),
  // Guarita / portaria
  portaria: (p) => (
    <svg {...s} {...p}>
      <path d="M4 10.5 12 4l8 6.5" />
      <path d="M5.5 10.5V20h13v-9.5" />
      <rect x="9" y="13" width="6" height="7" rx="1" />
      <path d="M2.5 20h19" />
    </svg>
  ),
  // Cadeado / acesso
  "controle-acesso": (p) => (
    <svg {...s} {...p}>
      <rect x="4" y="10" width="16" height="11" rx="2.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.5" r="1.4" />
      <path d="M12 16.9v1.6" />
    </svg>
  ),
  // Carro / vagas
  vagas: (p) => (
    <svg {...s} {...p}>
      <path d="M3 16v-3.2L5 8h14l2 4.8V16" />
      <path d="M3 16h18" />
      <path d="M5 16v2.5H8V16M16 16v2.5h3V16" />
      <circle cx="7.5" cy="13" r="1.2" />
      <circle cx="16.5" cy="13" r="1.2" />
    </svg>
  ),
};

const amenities = [
  { key: "piscinas", name: "Piscinas", description: "Áreas destinadas ao lazer aquático dos moradores." },
  { key: "academia", name: "Academia", description: "Espaço destinado à prática de atividades físicas." },
  { key: "academia-ar-livre", name: "Academia ao ar livre", description: "Equipamentos de exercício em área externa." },
  { key: "quadras", name: "Quadras esportivas", description: "Espaço para prática de esportes coletivos." },
  { key: "salao-festas", name: "Salão de festas", description: "Ambiente para eventos e confraternizações." },
  { key: "salao-jogos", name: "Salão de jogos", description: "Espaço de convivência e entretenimento." },
  { key: "playground", name: "Playground", description: "Área de recreação infantil." },
  { key: "brinquedoteca", name: "Brinquedoteca", description: "Espaço lúdico coberto para as crianças." },
  { key: "churrasqueiras", name: "Churrasqueiras", description: "Áreas comuns equipadas para churrasco." },
  { key: "areas-verdes", name: "Áreas verdes", description: "Espaços de convivência com paisagismo." },
  { key: "praca", name: "Praça", description: "Área de convívio ao ar livre." },
  { key: "pista-caminhada", name: "Pista de caminhada", description: "Percurso para caminhada e corrida." },
  { key: "portaria", name: "Portaria", description: "Recepção e controle de entrada do condomínio." },
  { key: "controle-acesso", name: "Controle de acesso", description: "Sistema de segurança para moradores e visitantes." },
  { key: "vagas", name: "Vagas para visitantes", description: "Estacionamento destinado a visitantes." },
];

export default function Amenities() {
  return (
    <section className="bg-gray-soft py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-xl font-bold text-navy sm:text-2xl lg:text-3xl">
          Estrutura e lazer
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item) => {
            const Icon = icons[item.key];
            return (
              <div
                key={item.key}
                className="flex gap-4 rounded-xl border border-gray-border bg-white p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-heading font-semibold text-navy">{item.name}</p>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
