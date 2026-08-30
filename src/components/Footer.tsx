import { navLinks, property } from "@/lib/property";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-heading text-lg font-bold text-white">{property.development}</p>
          <p className="mt-2 text-sm">{property.city}</p>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Navegação
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Contato
          </p>
          <p className="mt-3 text-sm">WhatsApp</p>
          <p className="text-sm">(11) 98092-7661</p>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Informações
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li>Grupo: {property.group}</li>
            <li>Cota: {property.quota}</li>
            <li>Situação: {property.status}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-7xl text-xs leading-relaxed text-white/50">
          As informações apresentadas são meramente informativas e estão sujeitas às condições,
          regras e documentação vigente da cooperativa. A aquisição apresentada refere-se à
          transferência de cota e não à venda convencional de imóvel quitado.
        </p>
        <p className="mx-auto mt-3 max-w-7xl text-xs text-white/50">
          © 2026 — Cota Residencial Parque Firenze
        </p>
      </div>
    </footer>
  );
}
