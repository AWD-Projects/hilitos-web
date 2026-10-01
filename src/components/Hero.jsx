import { Fragment } from "react";
import { MessageCircle } from "lucide-react";
import ParallaxPhoto from "./ParallaxPhoto";
import HeroThread from "./HeroThread";
import OpenStatus from "./OpenStatus";
import WhatsAppLink from "./WhatsAppLink";

// Cada palabra sube desde una máscara con CSS puro (se ve igual antes de hidratar y respeta reduced-motion).
function Words({ text, start = 0, className = "" }) {
  return text.split(" ").map((word, i) => (
    <Fragment key={`${word}-${i}`}>
      <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
        <span className={`hero-word inline-block ${className}`} style={{ animationDelay: `${start + i * 0.07}s` }}>
          {word}
        </span>
      </span>{" "}
    </Fragment>
  ));
}

export default function Hero() {
  return (
    <section
      id="inicio"
      data-spy="inicio"
      className="relative overflow-x-clip pb-16 pt-10 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16"
    >
      <div className="container-base grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <h1 className="h-hero">
            <Words text="Ropa femenina arreglada y hecha" />
            <span className="whitespace-nowrap">
              <Words text="a tu medida" start={0.42} className="it text-brand-secondary" />
            </span>
          </h1>
          <p className="lead mt-7 max-w-[34rem]">
            Modistería en Coyoacán, CDMX. Dobladillos, entalles, cierres y zurcidos, o una prenda nueva hecha contigo. Dinos
            qué necesita tu ropa y te cotizamos por WhatsApp.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#cotizador" className="btn btn-primary">
              Cotizar mi prenda
            </a>
            <WhatsAppLink
              message="Hola, quiero hacer una consulta en Hilitos Lili."
              location="hero"
              className="btn btn-ghost"
            >
              <MessageCircle size={18} aria-hidden="true" /> Escribir por WhatsApp
            </WhatsAppLink>
          </div>
          <OpenStatus className="mt-7" />
        </div>

        <div className="relative lg:col-span-6">
          <HeroThread className="hidden sm:block" />
          <div className="relative z-10 mx-auto w-full max-w-[34rem] lg:ml-auto lg:mr-0">
            <ParallaxPhoto
              src="/images/bg1.jpg"
              alt="Mesa de costura vista desde arriba: máquina de coser, carretes de hilo de colores, tijeras y un cuaderno con un boceto de vestido"
              sizes="(min-width: 1024px) 34rem, (min-width: 640px) 34rem, 92vw"
              position="64% 40%"
              aspect="4 / 5"
              priority
              reveal={false}
              frame
            />
          </div>
        </div>
      </div>
    </section>
  );
}
