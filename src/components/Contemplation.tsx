import { whatsappMessages } from "@/lib/property";
import WhatsAppButton from "./WhatsAppButton";

export default function Contemplation() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-xl font-bold text-navy sm:text-2xl lg:text-3xl">
          Sorteio ou lance: como funciona?
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-border bg-white p-6 sm:p-8">
            <p className="font-heading text-base font-bold text-navy">Sorteio</p>
            <p className="mt-3 text-sm font-semibold text-navy">
              A cota está atualmente aguardando sorteio.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              A contemplação depende das regras e dos procedimentos estabelecidos pela
              cooperativa.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-border bg-white p-6 sm:p-8">
            <p className="font-heading text-base font-bold text-navy">Lance</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              O cooperado poderá verificar, conforme as regras vigentes do grupo, as
              possibilidades de utilização de lance para antecipação/contemplação.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <WhatsAppButton message={whatsappMessages.contemplation}>
            Quero entender as opções de contemplação
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
