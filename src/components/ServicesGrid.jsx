import Link from "next/link";
import SectionHeading from "./SectionHeading";
import {
  Ruler,
  Scissors,
  Shirt,
  Sparkles,
  RulerDimensionLine,
  RotateCcw,
  Spool,
  Wand2,
} from "lucide-react";

const services = [
  {
    title: "Toma de medidas",
    description: "Diseñamos y confeccionamos blusas, pantalones, vestidos y más.",
    icon: Ruler,
  },
  {
    title: "Composturas finas",
    description: "Recupera el encanto de tus prendas favoritas con ajustes precisos.",
    icon: Scissors,
  },
  {
    title: "Venta de ropa",
    description: "Piezas seleccionadas para renovar tu estilo con elegancia.",
    icon: Shirt,
  },
  {
    title: "Ajustes y entalles",
    description: "Luce tu ropa en su mejor versión gracias a un entalle perfecto.",
    icon: Sparkles,
  },
  {
    title: "Dobladillos",
    description: "Termina cada prenda con un acabado limpio y profesional.",
    icon: RulerDimensionLine,
  },
  {
    title: "Renovación de detalles",
    description: "Cambio de cierres, botones, resortes y refuerzos duraderos.",
    icon: RotateCcw,
  },
  {
    title: "Zurcido artístico",
    description: "Repara tejidos con discretos acabados que respetan la textura.",
    icon: Spool,
  },
  {
    title: "Confección y bordados",
    description: "Personalización artesanal para prendas, cojines y fundas.",
    icon: Wand2,
  },
];

export default function ServicesGrid({ withHeading = true, embedded = false, id }) {
  const Wrapper = embedded ? "div" : "section";
  const wrapperProps = embedded ? {} : { className: "section-pad", id };

  return (
    <Wrapper {...wrapperProps}>
      <div className={embedded ? "" : "container-base"}>
        {withHeading && (
          <div className="section-header">
            <SectionHeading
              title="Servicios diseñados"
              highlight="para tu estilo"
              description="Atendemos composturas, ajustes y confección de prendas femeninas con acabados sutiles y duraderos."
            />
          </div>
        )}
        <div className="mt-12 grid-services">
          {services.map((service) => (
            <article
              key={service.title}
              className="service-card"
            >
              <div className="service-body">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand-secondary">
                  <service.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-brand-text/75">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
