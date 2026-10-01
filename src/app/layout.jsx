import "../styles/globals.css";
import localFont from "next/font/local";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyCta from "../components/StickyCta";
import { QuoteProvider } from "../components/QuoteProvider";
import MotionProvider from "../components/MotionProvider";
import { jsonLd } from "../lib/seo";
import { GA_ID, INDEXABLE, SITE_URL } from "../lib/site";

// Fuentes autoalojadas (licencia OFL): no dependen de Google Fonts al compilar ni al visitar.
const display = localFont({
  src: [
    { path: "../fonts/fraunces-latin-wght-normal.woff2", style: "normal", weight: "100 900" },
    { path: "../fonts/fraunces-latin-wght-italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-display",
  display: "swap",
});

const text = localFont({
  src: [{ path: "../fonts/hanken-grotesk-latin-wght-normal.woff2", style: "normal", weight: "100 900" }],
  variable: "--font-text",
  display: "swap",
});

const TITLE = "Hilitos Lili | Modistería y composturas en Coyoacán, CDMX";
const DESCRIPTION =
  "Modistería en Coyoacán: dobladillos, entalles, cierres, zurcidos y ropa a la medida. Arma tu nota de taller y cotiza por WhatsApp.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Hilitos Lili" },
  description: DESCRIPTION,
  applicationName: "Hilitos Lili",
  keywords: [
    "modistería Coyoacán",
    "composturas de ropa CDMX",
    "dobladillos",
    "entalle de ropa",
    "cambio de cierre",
    "zurcido",
    "ropa a la medida",
    "Hilitos Lili",
  ],
  alternates: { canonical: "/", languages: { "es-MX": "/" } },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Hilitos Lili",
    locale: "es_MX",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: {
    index: INDEXABLE,
    follow: INDEXABLE,
    googleBot: {
      index: INDEXABLE,
      follow: INDEXABLE,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8F68A2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX" className={`${display.variable} ${text.variable}`}>
      <body>
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}[style*="clip-path"]{clip-path:none!important}`}</style>
        </noscript>
        <MotionProvider>
        <QuoteProvider>
          <a href="#contenido" className="skip-link">
            Saltar al contenido
          </a>
          <Header />
          <main id="contenido" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <StickyCta />
        </QuoteProvider>
        </MotionProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
        {GA_ID && INDEXABLE && (
          <>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <Script id="ga-init" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
