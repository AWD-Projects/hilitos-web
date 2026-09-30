import Reveal, { Seam } from "./Reveal";
import { REVIEWS } from "../data/garments";

export default function Opiniones() {
  return (
    <section id="opiniones" data-spy="nosotros" className="bg-brand-tint">
      <Seam />
      <div className="container-base section-y">
        <Reveal>
          <h2 className="h-section max-w-[40rem]">
            Lo que dicen de Hilitos Lili
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {REVIEWS.map((review, i) => (
            <li key={review.name} className="flex">
              <Reveal delay={i * 0.08} className="flex w-full">
                <figure className="tag flex w-full flex-col justify-between gap-8">
                  <span className="tag-hole" aria-hidden="true" />
                  <blockquote className="font-display text-[1.3rem] leading-[1.35] text-brand-heading">
                    “{review.quote}”
                  </blockquote>
                  <figcaption className="text-[0.95rem] font-semibold text-brand-deep">{review.name}</figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
