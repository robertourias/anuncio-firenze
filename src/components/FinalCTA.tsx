import { formatCurrency, property, whatsappMessages } from "@/lib/property";
import WhatsAppButton from "./WhatsAppButton";

export default function FinalCTA() {
  return (
    <section id="contato" className="bg-navy py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Quer receber todos os detalhes desta cota?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
          Solicite a documentação, informações sobre a cota, condições de transferência e
          detalhes sobre sorteio e contemplação.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppButton message={whatsappMessages.final}>Falar no WhatsApp</WhatsAppButton>
          <WhatsAppButton message={whatsappMessages.final} variant="ghost">
            Solicitar informações
          </WhatsAppButton>
        </div>

        <div className="mt-10 flex flex-col items-center gap-1 border-t border-white/15 pt-8 text-white/85">
          <p className="font-heading font-semibold">
            Grupo {property.group} • Cota {property.quota}
          </p>
          <p className="font-heading text-2xl font-extrabold text-gold">
            {formatCurrency(property.transferValue)}
          </p>
          <p className="text-sm">
            {property.paidInstallments} parcelas pagas • {property.remainingInstallments} restantes
          </p>
        </div>
      </div>
    </section>
  );
}
