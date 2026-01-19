import "../styles/globals.css";
import { Poppins, Josefin_Sans } from "next/font/google";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata = {
  title: {
    default: "Hilitos Lili | Compostura y confección a tu medida",
    template: "%s | Hilitos Lili",
  },
  description:
    "Hilitos Lili es un taller de compostura y confección personalizada de prendas femeninas en CDMX. Ajustes, diseños únicos y atención detallista.",
  keywords: [
    "compostura",
    "confección",
    "modista",
    "ajustes de ropa",
    "prendas femeninas",
    "CDMX",
    "bordados",
    "taller de costura",
    "Hilitos Lili",
  ],
  metadataBase: new URL("https://hilitoslili.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hilitos Lili",
    description:
      "Compostura y confección personalizada con más de 10 años de experiencia."
    ,
    url: "https://hilitoslili.netlify.app",
    siteName: "Hilitos Lili",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hilitos Lili",
    description:
      "Compostura y confección personalizada con más de 10 años de experiencia.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-98H8KRKT85";
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hilitos Lili",
  description:
    "Taller de compostura y confección personalizada de prendas femeninas en CDMX.",
  telephone: "+52 55 4107 2124",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cerro de la Estrella 289 Local B, Campestre Churubusco",
    addressLocality: "Ciudad de México",
    addressCountry: "MX",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:30",
      closes: "19:00",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${josefin.variable}`}>
      <body className="font-sans">
        <a href="#inicio" className="skip-link">Saltar al contenido</a>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 

gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
