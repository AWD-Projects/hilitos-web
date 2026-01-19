import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="ambient-bg hero-section">
      <div className="container-base split">
        <div className="stack-lg">
          <div className="stack-md">
            <h1 className="hero-title">
              Prendas femeninas con{" "}
              <span className="text-brand-secondary">alma artesanal</span> y
              acabados precisos.
            </h1>
            <p className="hero-lead">
              Hilitos Lili transforma, ajusta y diseña piezas que abrazan tu estilo.
              Nuestro taller cuida cada detalle para que tu ropa vuelva a sentirse
              impecable y cómoda.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/servicios" className="button-primary">
              Conoce nuestros servicios
            </Link>
            <Link href="/contacto" className="button-outline">
              Agenda una visita
            </Link>
          </div>
          <div className="grid-cards">
            <div className="card-surface p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
                Ajustes finos
              </p>
              <p className="mt-2 text-sm text-brand-text/80">
                Composturas discretas que respetan la caída y el diseño original.
              </p>
            </div>
            <div className="card-surface p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
                Diseños únicos
              </p>
              <p className="mt-2 text-sm text-brand-text/80">
                Confección personalizada para blusas, vestidos y prendas especiales.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="image-frame" style={{ height: 520 }}>
            <Image
              src="/images/bg1.jpg"
              alt="Trabajo de compostura en Hilitos Lili"
              width={900}
              height={1200}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
