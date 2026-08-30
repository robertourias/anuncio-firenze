"use client";

import { useState } from "react";

const faqs = [
  {
    q: "O valor de R$ 280 mil é o valor total do apartamento?",
    a: "Não. R$ 280.000,00 corresponde ao valor solicitado pela transferência da cota. O comprador também assume as 63 parcelas restantes e demais obrigações previstas no contrato da cooperativa.",
  },
  {
    q: "Quantas parcelas já foram pagas?",
    a: "A cota possui atualmente 118 parcelas pagas e 63 parcelas restantes.",
  },
  {
    q: "Qual é o valor atual da parcela?",
    a: "O valor informado atualmente é de R$ 3.160,20. O valor efetivo das parcelas futuras deverá ser confirmado conforme os reajustes e condições contratuais.",
  },
  {
    q: "A cota já foi contemplada?",
    a: "Não. A cota 130898 do Grupo 13 está atualmente não contemplada e aguardando sorteio.",
  },
  {
    q: "Posso dar lance?",
    a: "A possibilidade e as condições de lance devem ser confirmadas conforme as regras vigentes do Grupo 13 e da Cooperativa Habitacional Vida Nova.",
  },
  {
    q: "Quando vou receber o apartamento?",
    a: "O prazo depende da contemplação, das regras do grupo, do estágio do empreendimento e das condições estabelecidas pela cooperativa. A previsão específica deverá ser confirmada para esta cota.",
  },
  {
    q: "A dependência de empregada está garantida?",
    a: "Não necessariamente. A disponibilidade de dependência de empregada e despensa deverá ser confirmada de acordo com a unidade definida no sorteio ou pelas condições do lance.",
  },
  {
    q: "O comprador assume as parcelas restantes?",
    a: "Sim. Na transferência da cota, o comprador assume os direitos e obrigações vinculados à cota, incluindo o saldo de parcelas e demais condições contratuais.",
  },
  {
    q: "Posso financiar os R$ 280 mil?",
    a: "A modalidade de pagamento da transferência e eventual utilização de financiamento devem ser negociadas e verificadas previamente. A cota possui regras próprias de transferência junto à cooperativa.",
  },
  {
    q: "Como faço para receber os documentos da cota?",
    a: "Entre em contato pelo WhatsApp para solicitar as informações e documentos disponíveis para análise antes da negociação.",
  },
  {
    q: "Como funciona a transferência?",
    a: "A transferência deve ser formalizada conforme os procedimentos exigidos pela Cooperativa Habitacional Vida Nova, incluindo análise da documentação e cumprimento das condições aplicáveis à cessão da cota.",
  },
  {
    q: "Existe algum custo além do valor da transferência?",
    a: "Podem existir taxas, custos administrativos ou outras obrigações relacionadas à transferência e à cota. Todos os valores devem ser confirmados antes da conclusão da operação.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-gray-soft py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-xl font-bold text-navy sm:text-2xl lg:text-3xl">
          Perguntas frequentes
        </h2>

        <div className="mt-10 divide-y divide-gray-border overflow-hidden rounded-2xl border border-gray-border bg-white">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading font-semibold text-navy sm:px-6 sm:py-5"
                  >
                    <span>{item.q}</span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-5 w-5 shrink-0 text-gold transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5 text-sm leading-relaxed text-gray-600 sm:px-6 sm:text-base"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
