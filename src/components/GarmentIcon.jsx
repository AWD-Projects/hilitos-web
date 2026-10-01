// Íconos de prenda dibujados a mano para este sitio: trazo parejo y dobladillo en puntada.
const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const dash = { strokeDasharray: "2 2.6" };

const icons = {
  pantalones: (
    <>
      <path d="M15 5h18l3.5 38h-9L24 19l-3.5 24h-9z" />
      <path d="M15 9.5h18" />
      <path d="M24 9.5V19" {...dash} />
      <path d="M13.2 39.5h7M27.8 39.5h7" {...dash} />
    </>
  ),
  faldas: (
    <>
      <path d="M16 7h16l9 35H7z" />
      <path d="M16.6 11.5h14.8" />
      <path d="M20 11.5 14.5 42M24 11.5V42M28 11.5 33.5 42" {...dash} />
    </>
  ),
  vestidos: (
    <>
      <path d="m19 4 2 9M29 4l-2 9" />
      <path d="M21 13q3 3 6 0" />
      <path d="M21 13 17.5 24 11 43h26l-6.5-19L27 13" />
      <path d="M17.5 24h13" />
      <path d="M13.2 39.5h21.6" {...dash} />
    </>
  ),
  blusas: (
    <>
      <path d="M17 6 8 11.5l3 8 5-2.5V42h16V17l5 2.5 3-8L31 6c-2 3-4.5 4.5-7 4.5S19 9 17 6z" />
      <path d="M16 38.5h16" {...dash} />
    </>
  ),
  camisas: (
    <>
      <path d="M17 6 8 11.5l3 8 5-2.5V42h16V17l5 2.5 3-8L31 6l-7 7.5z" />
      <path d="M24 13.5V42" />
      <circle cx="27.2" cy="21" r=".8" fill="currentColor" stroke="none" />
      <circle cx="27.2" cy="28" r=".8" fill="currentColor" stroke="none" />
      <circle cx="27.2" cy="35" r=".8" fill="currentColor" stroke="none" />
    </>
  ),
  chamarras: (
    <>
      <path d="M17 6 7 13l2 25 5-1.5.5-14.5V42h19V22l.5 14.5 5 1.5 2-25-10-7-7 5z" />
      <path d="M24 11v31" {...dash} />
    </>
  ),
  cojines: (
    <>
      <path d="M9 10c10-3 20-3 30 0 3 10 3 18 0 28-10 3-20 3-30 0-3-10-3-18 0-28z" />
      <circle cx="24" cy="24" r="1.3" fill="currentColor" stroke="none" />
      <path d="M24 24 14.5 14.5M24 24l9.5-9.5M24 24l-9.5 9.5M24 24l9.5 9.5" {...dash} />
    </>
  ),
  combinaciones: (
    <>
      <path d="M24 17v-2.5a3.5 3.5 0 1 0-3.5-3.5" />
      <path d="M24 17 6.5 31c-1.6 1.3-.7 3.8 1.3 3.8h32.4c2 0 2.9-2.5 1.3-3.8z" />
      <path d="M11 31.6l13-10.4 13 10.4" {...dash} />
    </>
  ),
};

export default function GarmentIcon({ id, size = 44, className = "" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...common}
    >
      {icons[id]}
    </svg>
  );
}
