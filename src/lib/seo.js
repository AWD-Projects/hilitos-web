import { BUSINESS, SITE_URL } from "./site";
import { SERVICES } from "../data/garments";

// Un solo @graph con ids estables. Solo datos reales del negocio:
// sin calificaciones, reseñas, precios ni horarios que el cliente no haya confirmado.
export function jsonLd() {
  const negocio = `${SITE_URL}/#negocio`;
  const sitio = `${SITE_URL}/#sitio`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        // TailorShop no existe en schema.org; el negocio también vende ropa, así que ClothingStore es real.
        "@type": ["LocalBusiness", "ClothingStore"],
        "@id": negocio,
        name: BUSINESS.name,
        description:
          "Modistería en Coyoacán, CDMX: dobladillos, entalles, cambio de cierres, zurcido y confección de ropa femenina a la medida.",
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image.jpg`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/brand/logo-full.png`,
          width: 720,
          height: 608,
        },
        telephone: "+52 55 4107 2124",
        email: BUSINESS.email,
        founder: { "@type": "Person", name: BUSINESS.owner },
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.street,
          addressLocality: "Ciudad de México",
          addressRegion: "CDMX",
          addressCountry: "MX",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.geo.latitude,
          longitude: BUSINESS.geo.longitude,
        },
        hasMap: BUSINESS.mapsDirections,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "11:30",
            closes: "19:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de modistería",
          itemListElement: SERVICES.filter((s) => s.title !== "Venta de ropa").map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.text },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": sitio,
        url: SITE_URL,
        name: BUSINESS.name,
        inLanguage: "es-MX",
        publisher: { "@id": negocio },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#pagina`,
        url: SITE_URL,
        name: "Hilitos Lili | Modistería y composturas en Coyoacán, CDMX",
        inLanguage: "es-MX",
        isPartOf: { "@id": sitio },
        about: { "@id": negocio },
      },
    ],
  };
}
