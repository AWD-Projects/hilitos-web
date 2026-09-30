/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/data/**/*.js", "./src/lib/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "rgb(var(--color-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-secondary) / <alpha-value>)",
          deep: "rgb(var(--color-primary-deep) / <alpha-value>)",
          rose: "rgb(var(--color-secondary-deep) / <alpha-value>)",
          text: "rgb(var(--color-text) / <alpha-value>)",
          muted: "rgb(var(--color-muted) / <alpha-value>)",
          heading: "rgb(var(--color-heading) / <alpha-value>)",
          light: "rgb(var(--color-bg-light) / <alpha-value>)",
          soft: "rgb(var(--color-bg-soft) / <alpha-value>)",
          base: "rgb(var(--color-bg-base) / <alpha-value>)",
          tint: "rgb(var(--color-tint) / <alpha-value>)",
          tint2: "rgb(var(--color-tint-2) / <alpha-value>)",
          plum: "rgb(var(--color-plum) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-text)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        paper: "0 1px 0 rgb(var(--color-primary) / 0.14), 0 22px 44px -26px rgb(36 24 41 / 0.32)",
      },
    },
  },
  plugins: [],
};
