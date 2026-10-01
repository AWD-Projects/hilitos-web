# Hilitos Lili (Next.js)

Sitio web moderno para Hilitos Lili, taller de compostura y confección personalizada en CDMX.

## Requisitos
- Node.js 18+

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```

## Producción
```bash
npm run build
npm start
```

## Variables de entorno
Todas son opcionales; hay valores por defecto.
```
NEXT_PUBLIC_SITE_URL=https://www.hilitoslili.com   # dominio canónico
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX                     # Google Analytics 4
NEXT_PUBLIC_GSC_VERIFICATION=                      # código de Search Console
NEXT_PUBLIC_NOINDEX=true                           # fuerza noindex (previews)
```
Los previews de Netlify/Vercel que no son producción salen con `noindex` y sin analítica.

## Despliegue
Compatible con Netlify, Vercel o cualquier hosting que soporte Next.js.

## Notas
- Las imágenes se encuentran en `public/images/` y se cargan con `next/image`.
- Cotizador ("nota de taller") y formulario de contacto arman un mensaje y lo abren en WhatsApp; no hay backend. Datos del negocio en `src/lib/site.js`, prendas y servicios en `src/data/garments.js`.
