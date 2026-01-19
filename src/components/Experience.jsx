import Image from "next/image";

export default function Experience() {
  return (
    <section className="section-pad">
      <div className="container-base split-reverse">
        <div>
          <h2 className="section-title">
            Una década cuidando prendas con precisión femenina
          </h2>
          <p className="mt-4 text-brand-text/80">
            Hilitos Lili nació para devolverle vida a tus prendas más queridas. Somos
            un taller donde la confianza se gana con atención personalizada, acabados
            impecables y resultados que hablan por sí solos.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-brand-light p-5">
              <p className="text-2xl font-semibold text-brand-secondary">+1,200</p>
              <p className="text-xs text-brand-text/70">prendas restauradas</p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-brand-light p-5">
              <p className="text-2xl font-semibold text-brand-secondary">100%</p>
              <p className="text-xs text-brand-text/70">atención personalizada</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="image-frame" style={{ height: 520 }}>
            <Image
              src="/images/about.jpg"
              alt="Lilia Ortega en su taller"
              width={520}
              height={640}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
