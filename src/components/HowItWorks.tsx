const steps = [
  {
    number: "01",
    title: "Transferência",
    description:
      "O comprador adquire os direitos e obrigações da cota atualmente pertencente ao vendedor.",
  },
  {
    number: "02",
    title: "Assunção das parcelas",
    description:
      "O comprador assume as parcelas restantes e demais obrigações previstas no contrato da cooperativa.",
  },
  {
    number: "03",
    title: "Contemplação",
    description:
      "A cota pode ser contemplada conforme as regras do grupo, incluindo sorteio ou lance.",
  },
  {
    number: "04",
    title: "Unidade",
    description:
      "Após a contemplação, seguem-se os procedimentos definidos pela cooperativa para definição/liberação da unidade.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
          Como funciona a aquisição da cota?
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-gray-border bg-white p-6">
              <span className="font-heading text-3xl font-extrabold text-gold">{step.number}</span>
              <p className="mt-3 font-heading text-lg font-bold text-navy">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-navy p-6 sm:p-8">
          <p className="font-heading text-lg font-bold text-white sm:text-xl">
            Esta não é uma venda convencional de imóvel pronto.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
            Trata-se da transferência de uma cota vinculada à Cooperativa Habitacional Vida Nova.
            As condições de contemplação, unidade, prazos, reajustes, saldo devedor e demais
            obrigações devem ser confirmadas na documentação vigente da cota.
          </p>
        </div>
      </div>
    </section>
  );
}
