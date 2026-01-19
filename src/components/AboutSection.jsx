import SectionHeading from "./SectionHeading";
import { Heart, Sparkles, ShieldCheck } from "lucide-react";

const values = [
  {
    title: "Detallismo",
    description:
      "Cada puntada respeta la estructura original de la prenda y su comodidad.",
    icon: Sparkles,
  },
  {
    title: "Cercanía",
    description:
      "Te escuchamos para entender tu estilo y proponer la mejor solución.",
    icon: Heart,
  },
  {
    title: "Calidad",
    description:
      "Acabados limpios y resistentes para que cada prenda viva más tiempo.",
    icon: ShieldCheck,
  },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="section-pad ambient-bg">
      <div className="container-base split">
        <div className="stack-lg">
          <SectionHeading
            title="Hilitos Lili es un espacio"
            highlight="de confianza"
            description="Somos una modistería especializada en compostura y confección de prendas femeninas en CDMX. Buscamos que cada clienta se sienta cómoda, segura y feliz con el resultado."
          />
          <p className="text-brand-text/80">
            Lilia Ortega fundó Hilitos Lili con la idea de rescatar prendas queridas y
            crear nuevas historias en cada costura. Hoy acompañamos a nuestras clientas
            en ajustes diarios, transformaciones especiales y diseños a medida.
          </p>
          <div className="grid-cards">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-black/5 bg-white/80 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand-secondary">
                  <value.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-brand-text/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="stack-md">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-soft">
            <h3 className="text-2xl font-semibold">Taller especializado</h3>
            <p className="mt-3 text-sm text-brand-text/80">
              Nuestro espacio está diseñado para trabajar con calma y precisión. Cada
              prenda recibe un diagnóstico cuidadoso antes de iniciar cualquier ajuste.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-brand-text/70">
              <li>• Ajustes y entalles con prueba previa.</li>
              <li>• Confección personalizada por cita.</li>
              <li>• Técnicas tradicionales y acabados finos.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
