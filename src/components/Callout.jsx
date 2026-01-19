import Link from "next/link";

export default function Callout() {
  return (
    <section className="section-pad">
      <div className="container-base">
        <div className="rounded-3xl border border-black/5 bg-brand-light p-10 text-center md:p-14">
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Renueva tu clóset con detalles que se sienten hechos para ti
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-text/80">
            Trabajamos contigo para ajustar, reparar o crear prendas femeninas que te
            acompañen con confianza.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contacto" className="button-primary">
              Agenda tu visita
            </Link>
            <Link href="/servicios" className="button-outline">
              Ver servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
