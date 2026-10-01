import Image from "next/image";
import { NAV, BUSINESS } from "../lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="seam-light" aria-hidden="true" />
      <div className="container-base grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Image
            src="/brand/wordmark-light.png"
            alt="Hilitos Lili"
            width={720}
            height={525}
            sizes="144px"
            className="h-auto w-36"
          />
          <p className="mt-5 max-w-xs text-white/80">Un taller de costura en {BUSINESS.colonia}.</p>
        </div>

        <nav aria-label="Pie de página" className="md:col-span-3">
          <p className="font-display text-[1.15rem] italic text-white">Ir a</p>
          <ul className="mt-4 space-y-1">
            {NAV.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="inline-flex min-h-[2.5rem] items-center text-white/80">
                  <span className="link-line">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="font-display text-[1.15rem] italic text-white">Hablemos</p>
          <ul className="mt-4 space-y-1">
            <li>
              <a href={`tel:${BUSINESS.phoneE164}`} className="inline-flex min-h-[2.5rem] items-center text-white/80">
                <span className="link-line">{BUSINESS.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="inline-flex min-h-[2.5rem] items-center break-all text-white/80">
                <span className="link-line">{BUSINESS.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-base flex flex-col gap-2 py-6 pb-24 text-[0.9rem] text-white/75 sm:flex-row sm:items-center sm:justify-between md:pb-6">
          <p>© {year} Hilitos Lili. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{" "}
            <a href="https://amoxtli.tech" target="_blank" rel="noopener noreferrer" className="font-semibold text-white">
              <span className="link-line">AMOXTLI®</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
