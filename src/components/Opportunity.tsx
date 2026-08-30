import { formatCurrency, property } from "@/lib/property";

const stats = [
  { label: "Grupo", value: String(property.group) },
  { label: "Cota", value: property.quota },
  { label: "Parcelas pagas", value: String(property.paidInstallments) },
  { label: "Parcelas restantes", value: String(property.remainingInstallments) },
  { label: "Parcela atual", value: formatCurrency(property.currentInstallment) },
  { label: "Transferência", value: formatCurrency(property.transferValue) },
  { label: "Situação", value: "Aguardando sorteio" },
];

export default function Opportunity() {
  return (
    <section className="bg-gray-soft py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-xl font-bold text-navy sm:text-2xl lg:text-3xl">
          Uma cota com {property.paidInstallments} parcelas já pagas
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-border bg-white p-5 text-center shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {stat.label}
              </p>
              <p className="mt-2 font-heading text-base font-bold text-navy sm:text-lg">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
