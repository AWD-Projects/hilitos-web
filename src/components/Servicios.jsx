import Cotizador from "./Cotizador";
import Reveal, { Seam } from "./Reveal";
import { SERVICES } from "../data/garments";

export default function Servicios() {
  return (
    <section id="servicios" data-spy="servicios" className="bg-brand-tint">
      <Seam />
      <div className="container-base section-y">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <h2 className="h-section lg:col-span-7">
            Composturas, ajustes y confección <span className="it text-brand-rose">a la medida</span>
          </h2>
          <p className="lead lg:col-span-5">
            Elige la prenda, marca el arreglo y arma tu nota de taller. La mandamos por WhatsApp para darte precio y tiempo
            de entrega.
          </p>
        </Reveal>

        <Reveal className="mt-12 lg:mt-16" delay={0.1}>
          <Cotizador />
        </Reveal>

        <div className="mt-20 grid gap-8 lg:mt-28 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <h3 className="h-sub">Todo lo que hacemos</h3>
            <p className="mt-3 max-w-xs text-brand-muted">
              Si lo tuyo no está en la nota, escríbelo en los detalles. Lo revisamos contigo.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={0.08}>
            <dl className="grid gap-x-10 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <div key={service.title} className="border-t border-dashed border-brand-primary/50 py-5">
                  <dt className="font-display text-[1.25rem] leading-tight text-brand-heading">{service.title}</dt>
                  <dd className="mt-1.5 text-brand-text">{service.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
