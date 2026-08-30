import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cota Parque Firenze Grupo 13 | 3 Dormitórios | Embu das Artes",
  description:
    "Cota de 3 dormitórios no Residencial Parque Firenze, em Embu das Artes. Grupo 13, cota 130898, 118 parcelas pagas e valor de transferência de R$ 280 mil.",
  keywords: [
    "Cota Parque Firenze",
    "Residencial Parque Firenze",
    "Cota Grupo 13",
    "Cota 3 dormitórios Embu das Artes",
    "Apartamento Parque Firenze",
    "Cota Embu das Artes",
    "Cooperativa Habitacional Vida Nova",
    "Cota 130898",
  ],
  openGraph: {
    title: "Cota Parque Firenze Grupo 13 | 3 Dormitórios | Embu das Artes",
    description:
      "Transferência de cota do Residencial Parque Firenze. Grupo 13, cota 130898, 118 parcelas pagas. Valor de transferência R$ 280.000,00.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <MobileStickyCTA />
      </body>
    </html>
  );
}
