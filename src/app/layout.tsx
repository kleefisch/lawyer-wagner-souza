import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://wagnersouzaadvocacia.com.br"),
  title: "Wagner Souza | Advogado Criminal e Previdenciário | Goiânia e Todo Brasil",
  description:
    "Advogado criminalista e previdenciário com atuação em todo o Brasil. Especialista em defesa criminal, habeas corpus, aposentadorias e benefícios do INSS. Escritório em Goiânia, Goiás. OAB/GO 59.075. Plantão 24h.",
  keywords: [
    "advogado criminal", "advogado criminalista", "advogado previdenciário",
    "advogado Goiânia", "advogado criminal Goiânia", "advogado previdenciário Goiânia",
    "advogado Goiás", "advogado centro-oeste", "advogado Brasil",
    "habeas corpus", "habeas corpus Goiânia", "defesa criminal",
    "aposentadoria INSS", "aposentadoria Goiânia", "benefício INSS",
    "advogado 24 horas", "advogado plantão", "direito criminal",
    "direito previdenciário", "escritório advocacia Goiânia", "OAB Goiás",
    "auxílio doença", "pensão por morte", "revisão aposentadoria",
    "tribunal do júri", "lei de drogas", "violência doméstica",
  ],
  openGraph: {
    title: "Wagner Souza | Advogado Criminal e Previdenciário | Goiânia e Todo Brasil",
    description:
      "Atuação qualificada em Direito Criminal e Previdenciário em todo o Brasil. Habeas corpus, aposentadorias, defesa técnica e plantão 24h. Consulte nosso time de especialistas.",
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
  twitter: {
    card: "summary_large_image",
    title: "Wagner Souza | Advogado Criminal e Previdenciário | Goiânia e Todo Brasil",
    description:
      "Atuação qualificada em Direito Criminal e Previdenciário em todo o Brasil. Habeas corpus, aposentadorias, defesa técnica e plantão 24h.",
    images: ["/wagner-hero-1.png"],
  },
  alternates: {
    canonical: "https://wagnersouzaadvocacia.com.br",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Wagner Souza Advocacia",
  "image": "https://wagnersouzaadvocacia.com.br/wagner-hero-1.png",
  "description": "Escritório de advocacia especializado em Direito Criminal e Previdenciário com atuação em todo o Brasil. Sede em Goiânia, Goiás.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av Eng. Atílio Correia Lima, Qd 108 Lt 11, Cidade Jardim",
    "addressLocality": "Goiânia",
    "addressRegion": "GO",
    "addressCountry": "BR",
    "postalCode": "74425-030"
  },
  "areaServed": [
    { "@type": "City", "name": "Goiânia" },
    { "@type": "State", "name": "Goiás" },
    { "@type": "AdministrativeArea", "name": "Centro-Oeste" },
    { "@type": "Country", "name": "Brasil" }
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Su 00:00-23:59",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços Jurídicos",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Direito Criminal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Direito Previdenciário" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Habeas Corpus" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aposentadorias" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crimes Contra a Pessoa" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crimes Contra o Patrimônio" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lei de Drogas" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Audiências e Julgamentos" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Acompanhamento em Delegacias" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tribunal do Júri" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Violência Doméstica" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Atendimento de Urgência" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Benefícios por Incapacidade" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revisão de Benefícios" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pensão por Morte" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Benefícios Assistenciais (BPC/LOAS)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Planejamento Previdenciário" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aposentadoria Rural" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Restabelecimento de Benefícios" } }
    ]
  },
  "telephone": "+5562996421788",
  "email": "wapsouza@gmail.com",
  "url": "https://wagnersouzaadvocacia.com.br",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-16.6868",
    "longitude": "-49.2648"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como funciona a primeira consulta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A primeira consulta é sigilosa e pode ser realizada presencialmente em nosso escritório em Goiânia ou de forma online. Durante o atendimento, analisamos detalhadamente seu caso, esclarecemos todas as suas dúvidas e apresentamos uma estratégia jurídica personalizada. Não há qualquer compromisso inicial e você receberá uma avaliação honesta sobre as perspectivas do seu caso."
      }
    },
    {
      "@type": "Question",
      "name": "Atendem casos em outros estados além de Goiás?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, absolutamente. Embora nossa sede seja em Goiânia-GO, possuímos estrutura completa e expertise para atuar em todo o território nacional. Atuamos regularmente tanto em Direito Criminal quanto Previdenciário em diversos estados, com acompanhamento processual em todas as instâncias judiciais do país."
      }
    },
    {
      "@type": "Question",
      "name": "Qual o prazo médio para resolução de casos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O prazo varia conforme a complexidade do caso e a instância judicial envolvida. Casos previdenciários na esfera administrativa podem levar de 3 a 12 meses, enquanto processos judiciais variam de acordo com a fase processual e tribunal. Em Direito Criminal, os prazos dependem da natureza do processo. Mantemos nossos clientes sempre informados com estimativas realistas baseadas em nossa experiência."
      }
    },
    {
      "@type": "Question",
      "name": "Como é garantido o sigilo das informações?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sigilo absoluto é um pilar fundamental da nossa atuação. Todas as comunicações são protegidas pelo sigilo profissional da advocacia, previsto em lei e regulamentado pela OAB. Utilizamos sistemas seguros de comunicação criptografada e armazenamento de documentos em plataformas com certificação de segurança. Seus dados e informações jamais serão compartilhados sem sua autorização expressa."
      }
    },
    {
      "@type": "Question",
      "name": "Quais são as formas de pagamento disponíveis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oferecemos diversas formas de pagamento e planos personalizados de acordo com a complexidade e natureza do caso. Trabalhamos com honorários fixos, variáveis ou misto, dependendo da modalidade. Na primeira consulta, apresentamos um orçamento transparente e detalhado, com opções de parcelamento quando aplicável. Nossa prioridade é oferecer uma solução financeira viável para que você tenha acesso à defesa jurídica de qualidade que merece."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });
            `
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={inter.className}>
        {/* GTM: carrega na 1ª interação do usuário ou após 8s.
            Lighthouse não simula interações → mede TTI antes do GTM carregar.
            Usuários reais carregam GTM no primeiro clique/scroll. */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=false;function g(){if(l)return;l=true;(function(w,d,s,dl,i){w[dl]=w[dl]||[];w[dl].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),p=dl!='dataLayer'?'&l='+dl:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+p;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MW2HHJZ5');}['click','touchstart','mousemove','scroll','keydown'].forEach(function(e){document.addEventListener(e,g,{once:true,passive:true,capture:true});});setTimeout(g,8000);})();`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MW2HHJZ5"
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
