import { SITE_URL } from "../lib/site";

// Solo URLs reales. /nosotros, /servicios y /contacto redirigen a anclas de la portada y no se listan.
export default function sitemap() {
  return [{ url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
