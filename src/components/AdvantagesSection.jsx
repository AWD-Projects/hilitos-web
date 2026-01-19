import SectionHeading from "./SectionHeading";
import { Award, HeartHandshake, ShieldCheck } from "lucide-react";

const advantages = [
  {
    title: "Calidad",
    description:
      "Trabajo de excelencia con acabados duraderos, discretos y cuidados al detalle.",
    icon: Award,
  },
  {
    title: "Servicio",
    description:
      "Atención cálida y entregas puntuales, respetando el valor emocional de tus prendas.",
    icon: HeartHandshake,
  },
  {
    title: "Confianza",
    description:
      "Profesionales capacitados que cuidan cada prenda como si fuera propia.",
    icon: ShieldCheck,
  },
];

export default function AdvantagesSection() {
  return (
    <section className="section-pad bg-brand-light">
      <div className="container-base">
        <SectionHeading
          title="El valor de"
          highlight="Hilitos Lili"
          description="Combinamos técnica, sensibilidad y experiencia para que cada prenda cobre nueva vida."
        />
        <div className="mt-12 grid-cards">
          {advantages.map((item) => (
            <div key={item.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand-secondary">
                <item.icon size={26} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-text/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
