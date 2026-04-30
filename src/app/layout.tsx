import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Wagner Souza | Advogado Especialista em São Paulo",
  description:
    "Escritório de advocacia focado em resultados rápidos, seguros e eficientes para você e sua empresa. Agende sua consultoria.",
  openGraph: {
    title: "Wagner Souza | Especialista em Direito Tributário e Empresarial",
    description:
      "Atuação qualificada na defesa dos seus direitos. Consulte nosso time de especialistas.",
    url: "https://seusite.com.br",
    siteName: "Wagner Souza Advocacia",
    images: [
      {
        url: "/wagner-hero-1.webp",
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`, // TROQUE GTM-XXXXXXX
          }}
        />
      </head>
      <body>
        {/* Anti-Flicker ou GTM non-script fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" // TROQUE
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
