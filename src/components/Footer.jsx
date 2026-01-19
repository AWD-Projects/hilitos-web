import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-base footer-inner grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center">
              <Image src="/images/footer-logo.png" alt="Hilitos Lili" width={60} height={60} />
            </span>
            <div className="sr-only">Hilitos Lili</div>
          </div>
          <p className="text-sm text-white/70">
            Taller de prendas femeninas en CDMX. Cuidamos cada detalle para que tu ropa
            vuelva a sentirse como nueva.
          </p>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <span className="h-1 w-8 rounded-full bg-white/60"></span>
            +52 55 4107 2124
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Navegación
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Cerro de la Estrella 289 Local B, Campestre Churubusco, CDMX</li>
            <li>hilitoslili@gmail.com</li>
            <li>Lun - Sáb: 11:30 a 19:00</li>
            <li>Domingo: Cerrado</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Hilitos Lili. Todos los derechos reservados. Desarrollado por Amoxtli Web
        Developers.
      </div>
    </footer>
  );
}
