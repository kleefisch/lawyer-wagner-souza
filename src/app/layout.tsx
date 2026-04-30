import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://wagnersouzaadvocacia.com.br"),
  title: "Wagner Souza | Advogado Especialista em São Paulo",
  description:
    "Escritório de advocacia focado em resultados rápidos, seguros e eficientes para você e sua empresa. Agende sua consultoria.",
  openGraph: {
    title: "Wagner Souza | Especialista em Direito Tributário e Empresarial",
    description:
      "Atuação qualificada na defesa dos seus direitos. Consulte nosso time de especialistas.",
    url: "https://wagnersouzaadvocacia.com.br",
    siteName: "Wagner Souza Advocacia",
    images: [
      {
        url: "/wagner-hero-1.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
      </head>
      <body className={inter.className}>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Wagner Souza Advocacia",
              "image": "https://wagnersouzaadvocacia.com.br/wagner-hero-1.png",
              "description": "Escritório de advocacia focado em resultados rápidos, seguros e eficientes para você e sua empresa.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Endereço do Escritório",
                "addressLocality": "Goiânia",
                "addressRegion": "GO",
                "addressCountry": "BR"
              },
              "telephone": "+5562996421788",
              "url": "https://wagnersouzaadvocacia.com.br"
            })
          }}
        />
        <GoogleTagManager gtmId="GTM-MW2HHJZ5" />
        {children}
      </body>
    </html>
  );
}
