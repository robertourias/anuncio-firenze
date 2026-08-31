export const property = {
  development: "Residencial Parque Firenze",
  city: "Embu das Artes - SP",
  address: "Estrada São Judas, 190 — Parque Esplanada do Embu — Embu das Artes/SP",
  group: 13,
  quota: "130898",
  bedrooms: 3,
  suites: 1,
  bathrooms: 3,
  lavabo: 1,
  area: 125,
  parkingSpaces: 1,
  paidInstallments: 118,
  remainingInstallments: 63,
  status: "Não contemplada",
  contemplation: "Aguardando sorteio",
  whatsapp: "5511980927661",
  cooperative: "Cooperativa Habitacional Vida Nova",
} as const;

export const quotaUpdate = {
  preco: 276000,
  parcela: 3160.2,
  dataAtualizacao: "01/08/2026",
} as const;

function parseBrDate(value: string): Date {
  const [day, month, year] = value.split("/").map(Number);
  return new Date(year, month - 1, day);
}

function monthsSince(value: string): number {
  const start = parseBrDate(value);
  const now = new Date();
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  return Math.max(months, 0);
}

export const monthsSinceUpdate = monthsSince(quotaUpdate.dataAtualizacao);

const rawTransferValue = quotaUpdate.preco + quotaUpdate.parcela * monthsSinceUpdate;

export const currentTransferValue = Math.round(rawTransferValue / 100) * 100;

export function formatCurrency(value: number, showCents = true): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
  });
}

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${property.whatsapp}?text=${encoded}`;
}

export const whatsappMessages = {
  hero: `Olá! Tenho interesse na cota ${property.quota} do Grupo ${property.group} do Residencial Parque Firenze.`,
  default: `Olá! Tenho interesse na cota ${property.quota} do Grupo ${property.group} do Residencial Parque Firenze. Gostaria de receber mais informações.`,
  plan: `Olá! Gostaria de receber a planta e mais informações sobre a cota ${property.quota}.`,
  contemplation: `Olá! Gostaria de saber mais sobre sorteio, lance e contemplação da cota ${property.quota}.`,
  final: `Olá! Tenho interesse na transferência da cota ${property.quota} do Grupo ${property.group}. Gostaria de receber os detalhes.`,
};

export const navLinks = [
  { href: "#oportunidade", label: "Oportunidade" },
  { href: "#apartamento", label: "Apartamento" },
  { href: "#planta", label: "Planta" },
  { href: "#condominio", label: "Condomínio" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#localizacao", label: "Localização" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];
