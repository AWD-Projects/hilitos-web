import SectionHeading from "./SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "La calidad de las composturas y la atención son excelentes.",
    name: "Justino Reyes",
    role: "Cliente",
  },
  {
    quote:
      "Excelente lugar, encuentras regalos y las composturas son lo mejor. La dueña es muy amable.",
    name: "Carmen C",
    role: "Cliente",
  },
  {
    quote:
      "Trabajo impecable, atención cálida y ropa bonita con precios excelentes.",
    name: "TV R",
    role: "Cliente",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad ambient-bg">
      <div className="container-base">
        <SectionHeading
          title="Confianza que se"
          highlight="nota"
          description="Cada prenda entregada suma recomendaciones y clientas que regresan."
        />
        <div className="mt-12 grid-cards">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand-secondary">
                <Quote size={18} />
              </div>
              <p className="mt-4 text-sm text-brand-text/80">“{item.quote}”</p>
              <div className="mt-6 flex items-center gap-4">
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-brand-text/60">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
