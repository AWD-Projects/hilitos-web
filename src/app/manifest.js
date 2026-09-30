export default function manifest() {
  return {
    name: "Hilitos Lili",
    short_name: "Hilitos Lili",
    description: "Modistería en Coyoacán, CDMX. Composturas, ajustes y ropa femenina a la medida.",
    start_url: "/",
    display: "standalone",
    lang: "es-MX",
    background_color: "#FFFFFF",
    theme_color: "#8F68A2",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
