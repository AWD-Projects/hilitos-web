import Image from "next/image";
import ParallaxPhoto from "./ParallaxPhoto";
import Reveal, { Seam } from "./Reveal";
import { FACTS } from "../lib/site";

const steps = [
  {
    title: "Primero la revisamos",
    text: "Cada prenda se mira con calma antes de hacer cualquier ajuste.",
  },
  {
    title: "Probamos antes de coser",
    text: "En ajustes y entalles hay prueba previa, para que quede donde tú quieres.",
  },
  {
    title: "La ropa a la medida, con cita",
    text: "Las prendas nuevas se trabajan contigo, con toma de medidas y por cita.",
  },
];

const gallery = [
  {
    src: "/images/s8.jpg",
    alt: "Manos con una cinta métrica amarilla sobre la muñeca, tomando medidas",
    caption: "Medidas",
    position: "50% 40%",
  },
  {
    src: "/images/s5.jpg",
    alt: "Primer plano de una máquina de coser iluminada mientras unas manos guían la tela",
    caption: "Costura a máquina",
    position: "50% 50%",
  },
  {
    src: "/images/s3.jpg",
    alt: "Manos con tijeras cortando el ribete de un saco sobre un maniquí",
    caption: "Corte y detalles",
    position: "50% 45%",
  },
  {
    src: "/images/s4.jpg",
    alt: "Mujer cosiendo a mano una prenda blanca, sentada en un sillón",
    caption: "Puntadas a mano",
    position: "50% 45%",
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" data-spy="nosotros">
      <Seam />
      <div className="container-base section-y">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-last lg:order-first lg:col-span-5">
            <ParallaxPhoto
              src="/images/b1.jpg"
              alt="Mujer tomando medidas sobre un vestido blanco en un maniquí, dentro de un taller de costura"
              sizes="(min-width: 1024px) 30rem, (min-width: 640px) 34rem, 92vw"
              position="68% 50%"
              aspect="4 / 5"
              frame
              className="mx-auto w-full max-w-[34rem] lg:max-w-none"
            />
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="h-section">
                Un taller para darle otra vida a tu ropa
              </h2>
              <p className="lead mt-6 max-w-[38rem]">
                Hilitos Lili nació para rescatar prendas queridas y darles otra historia en cada costura. Hoy atiende a
                sus clientas en ajustes del diario, transformaciones y ropa hecha a la medida.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <dl className="mt-10 grid max-w-[34rem] grid-cols-2 gap-6 border-y border-dashed border-brand-primary/50 py-7">
                <div className="flex flex-col-reverse gap-2">
                  <dt className="text-brand-muted">prendas restauradas</dt>
                  <dd className="font-display text-[clamp(2.5rem,5vw,3.75rem)] leading-none text-brand-heading">
                    {FACTS.garments}
                  </dd>
                </div>
                <div className="flex flex-col-reverse gap-2">
                  <dt className="text-brand-muted">años cuidando prendas</dt>
                  <dd className="font-display text-[clamp(2.5rem,5vw,3.75rem)] leading-none text-brand-heading">
                    {FACTS.years}
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.12}>
              <ul className="mt-8 max-w-[38rem] divide-y divide-dashed divide-brand-primary/40">
                {steps.map((step) => (
                  <li key={step.title} className="py-5">
                    <h3 className="font-display text-[1.3rem] leading-tight">{step.title}</h3>
                    <p className="mt-1.5 text-brand-text">{step.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 lg:mt-28">
          <Reveal>
            <h3 className="h-sub">Así se trabaja una prenda</h3>
          </Reveal>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-6">
            {gallery.map((item, i) => (
              <li key={item.src}>
                <Reveal delay={i * 0.07}>
                  <figure>
                    <div className="photo" style={{ aspectRatio: "4 / 5" }}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 17rem, 45vw"
                        style={{ objectFit: "cover", objectPosition: item.position }}
                      />
                    </div>
                    <figcaption className="mt-3 font-display text-[1.1rem] text-brand-heading">{item.caption}</figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
