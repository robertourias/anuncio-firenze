const amenities = [
  { name: "Piscinas", description: "Áreas destinadas ao lazer aquático dos moradores." },
  { name: "Academia", description: "Espaço destinado à prática de atividades físicas." },
  { name: "Academia ao ar livre", description: "Equipamentos de exercício em área externa." },
  { name: "Quadras esportivas", description: "Espaço para prática de esportes coletivos." },
  { name: "Salão de festas", description: "Ambiente para eventos e confraternizações." },
  { name: "Salão de jogos", description: "Espaço de convivência e entretenimento." },
  { name: "Playground", description: "Área de recreação infantil." },
  { name: "Brinquedoteca", description: "Espaço lúdico coberto para as crianças." },
  { name: "Churrasqueiras", description: "Áreas comuns equipadas para churrasco." },
  { name: "Áreas verdes", description: "Espaços de convivência com paisagismo." },
  { name: "Praça", description: "Área de convívio ao ar livre." },
  { name: "Pista de caminhada", description: "Percurso para caminhada e corrida." },
  { name: "Portaria", description: "Recepção e controle de entrada do condomínio." },
  { name: "Controle de acesso", description: "Sistema de segurança para moradores e visitantes." },
  { name: "Vagas para visitantes", description: "Estacionamento destinado a visitantes." },
];

const icon = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
  </svg>
);

export default function Amenities() {
  return (
    <section className="bg-gray-soft py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
          Estrutura e lazer
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item) => (
            <div
              key={item.name}
              className="flex gap-4 rounded-xl border border-gray-border bg-white p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                {icon}
              </span>
              <div>
                <p className="font-heading font-semibold text-navy">{item.name}</p>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
