/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "rgb(var(--color-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-secondary) / <alpha-value>)",
          text: "rgb(var(--color-text) / <alpha-value>)",
          heading: "rgb(var(--color-heading) / <alpha-value>)",
          light: "rgb(var(--color-bg-light) / <alpha-value>)",
          soft: "rgb(var(--color-bg-soft) / <alpha-value>)",
          base: "rgb(var(--color-bg-base) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(19, 25, 23, 0.12)",
        lift: "0 18px 40px rgba(19, 25, 23, 0.18)",
      },
      borderRadius: {
        xl: "1.25rem",
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top left, rgba(143, 104, 162, 0.22), transparent 55%), radial-gradient(circle at 80% 20%, rgba(182, 101, 132, 0.18), transparent 50%)",
      },
    },
  },
  plugins: [],
};
