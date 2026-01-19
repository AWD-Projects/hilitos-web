import SectionHeading from "./SectionHeading";

const values = [
  {
    title: "Escucha activa",
    description:
      "Nos tomamos el tiempo de entender tu prenda y cómo quieres sentirla al usarla.",
    number: "01",
  },
  {
    title: "Técnica cuidadosa",
    description:
      "Ajustes y composturas que respetan la silueta, la caída y la textura original.",
    number: "02",
  },
  {
    title: "Belleza funcional",
    description:
      "Diseños personalizados que combinan estética, comodidad y durabilidad.",
    number: "03",
  },
];

export default function ValueProps() {
  return (
    <section className="section-pad">
      <div className="container-base">
        <SectionHeading
          title="Sutileza, técnica"
          highlight="y cercanía"
          description="Trabajamos con calma y precisión para que cada prenda conserve su esencia y se adapte a ti."
        />
        <div className="mt-12 grid-cards">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-black/5 bg-brand-light p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
                {value.number}
              </p>
              <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm text-brand-text/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
