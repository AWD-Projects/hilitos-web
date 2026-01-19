"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-base nav-inner">
        <Link href="#inicio" className="flex items-center gap-4">
          <span className="flex items-center">
            <Image src="/images/logotipo.png" alt="Hilitos Lili" width={56} height={56} />
          </span>
          <div className="sr-only">Hilitos Lili</div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-secondary"
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contacto" className="button-primary">
            Solicitar cita
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden text-brand-heading"
          aria-label="Abrir menú"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu size={26} />
        </button>
      </div>
      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="container-base flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="#contacto" className="button-primary" onClick={() => setOpen(false)}>
              Solicitar cita
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
