import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

// Local Fonts Configuration
const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/Helvetica Now Display/WOFF2/HelveticaNowDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Helvetica Now Display/WOFF2/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Helvetica Now Display/WOFF2/HelveticaNowDisplay-RegIta.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Helvetica Now Display/WOFF2/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Helvetica Now Display/WOFF2/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

const distrample = localFont({
  src: "../../public/fonts/Distrampler.ttf",
  variable: "--font-distrample",
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://diamond.com.br"),
  title: {
    default: "Diamond | Soluções Premium para seu Negócio",
    template: "%s | Diamond",
  },
  description:
    "A Diamond oferece soluções premium e inovadoras para impulsionar seu negócio. Qualidade, excelência e resultados que brilham.",
  keywords: [
    "Diamond",
    "soluções empresariais",
    "consultoria",
    "premium",
    "negócios",
    "inovação",
  ],
  authors: [{ name: "Diamond", url: "https://diamond.com.br" }],
  creator: "Diamond",
  publisher: "Diamond",
  icons: {
    icon: [
      {
        url: "/favicon-light-mode.svg",
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-dark-mode.svg",
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon-light-mode.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://diamond.com.br",
    siteName: "Diamond",
    title: "Diamond | Soluções Premium para seu Negócio",
    description:
      "A Diamond oferece soluções premium e inovadoras para impulsionar seu negócio. Qualidade, excelência e resultados que brilham.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Diamond - Soluções Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diamond | Soluções Premium para seu Negócio",
    description:
      "A Diamond oferece soluções premium e inovadoras para impulsionar seu negócio.",
    images: ["/og-image.jpg"],
    creator: "@diamond",
  },
  alternates: {
    canonical: "https://diamond.com.br",
  },
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Diamond",
  description:
    "A Diamond oferece soluções premium e inovadoras para impulsionar seu negócio.",
  url: "https://diamond.com.br",
  logo: "https://diamond.com.br/logo.svg",
  sameAs: [
    "https://www.linkedin.com/company/diamond",
    "https://www.instagram.com/diamond",
    "https://www.facebook.com/diamond",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-11-99999-9999",
    contactType: "customer service",
    availableLanguage: ["Portuguese"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressLocality: "São Paulo",
    addressRegion: "SP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body
        className={`${helvetica.variable} ${distrample.variable} font-helvetica antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll />
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
