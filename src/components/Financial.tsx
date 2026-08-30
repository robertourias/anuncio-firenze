import { formatCurrency, property } from "@/lib/property";

const rows = [
  { label: "Valor da transferência", value: formatCurrency(property.transferValue) },
  { label: "Parcelas pagas", value: String(property.paidInstallments) },
  { label: "Parcelas restantes", value: String(property.remainingInstallments) },
  { label: "Parcela atual", value: formatCurrency(property.currentInstallment) },
  { label: "Situação", value: "Não contemplada" },
  { label: "Contemplação", value: "Aguardando sorteio" },
];

const estimatedBalance = property.remainingInstallments * property.currentInstallment;

export default function Financial() {
  return (
    <section className="bg-gray-soft py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
          Condições atuais da cota
        </h2>

        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-border bg-white">
          <table className="w-full text-left">
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i !== rows.length - 1 ? "border-b border-gray-border" : ""}>
                  <th scope="row" className="px-5 py-4 text-sm font-medium text-gray-500 sm:px-6">
                    {row.label}
                  </th>
                  <td className="px-5 py-4 text-right font-heading font-bold text-navy sm:px-6">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border-2 border-gold/40 bg-white p-6 text-center">
          <p className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">
            {property.remainingInstallments} × {formatCurrency(property.currentInstallment)} ={" "}
            {formatCurrency(estimatedBalance)}
          </p>
          <p className="mt-2 text-sm font-semibold text-gray-500">
            Saldo aproximado considerando o valor atual da parcela
          </p>
          <p className="mt-3 text-xs leading-relaxed text-gray-500">
            Este cálculo é apenas uma referência. O saldo efetivo pode ser diferente devido aos
            reajustes e demais condições previstas no contrato.
          </p>
        </div>
      </div>
    </section>
  );
}
