import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import OpenStatus from "./OpenStatus";
import Reveal, { Seam } from "./Reveal";
import WhatsAppLink from "./WhatsAppLink";
import { BUSINESS, HOURS } from "../lib/site";

export default function Contacto() {
  return (
    <section id="contacto" data-spy="contacto">
      <Seam />
      <div className="container-base section-y">
        <Reveal>
          <h2 className="h-section max-w-[44rem]">
            Escríbenos o <span className="it text-brand-rose">pasa al taller</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <dl className="divide-y divide-dashed divide-brand-primary/50 border-y border-dashed border-brand-primary/50">
              <div className="grid gap-1 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                <dt className="font-display text-[1.1rem] text-brand-heading">Dirección</dt>
                <dd>
                  <address className="not-italic">
                    {BUSINESS.street}
                    <br />
                    {BUSINESS.colonia}, {BUSINESS.area}
                  </address>
                  <a
                    href={BUSINESS.mapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex min-h-[2.75rem] items-center gap-2 font-semibold text-brand-deep"
                  >
                    <MapPin size={16} aria-hidden="true" />
                    <span className="link-line">Cómo llegar</span>
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                <dt className="font-display text-[1.1rem] text-brand-heading">WhatsApp y teléfono</dt>
                <dd className="flex flex-col items-start">
                  <a
                    href={`tel:${BUSINESS.phoneE164}`}
                    className="inline-flex min-h-[2.75rem] items-center gap-2 font-semibold text-brand-deep"
                  >
                    <Phone size={16} aria-hidden="true" />
                    <span className="link-line">{BUSINESS.phoneDisplay}</span>
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                <dt className="font-display text-[1.1rem] text-brand-heading">Correo</dt>
                <dd>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="inline-flex min-h-[2.75rem] items-center gap-2 break-all font-semibold text-brand-deep"
                  >
                    <Mail size={16} aria-hidden="true" />
                    <span className="link-line">{BUSINESS.email}</span>
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                <dt className="font-display text-[1.1rem] text-brand-heading">Horario</dt>
                <dd>
                  <p>{HOURS.label}</p>
                  <p className="text-brand-muted">{HOURS.sunday}</p>
                  <OpenStatus className="mt-2" />
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-brand-muted">
              ¿Ya sabes qué prenda quieres cotizar?{" "}
              <a href="#cotizador" className="font-semibold text-brand-deep">
                <span className="link-line">Elígela y arma tu lista</span>
              </a>
              , o{" "}
              <WhatsAppLink
                message="Hola, quiero hacer una consulta en Hilitos Lili."
                location="contacto"
                className="font-semibold text-brand-deep"
              >
                <span className="link-line">escríbenos directo</span>
              </WhatsAppLink>
              .
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>

        <Reveal className="mt-14 lg:mt-20" delay={0.05}>
          <div className="photo-frame">
            <div className="photo !rounded-[1.25rem]">
              <iframe
                title="Mapa con la ubicación del taller Hilitos Lili"
                src={BUSINESS.mapsEmbed}
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
