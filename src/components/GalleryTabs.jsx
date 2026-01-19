"use client";

import { useState } from "react";
import { Shirt, Scissors, Sparkles } from "lucide-react";

const categories = [
  {
    id: "pantalones",
    label: "Pantalones",
    icon: Scissors,
    items: ["Dobladillos", "Ajuste de cintura", "Cambio de cierre"],
  },
  {
    id: "faldas",
    label: "Faldas",
    icon: Shirt,
    items: ["Ajustes laterales", "Cambio de forro", "Zurcidos"],
  },
  {
    id: "vestidos",
    label: "Vestidos",
    icon: Sparkles,
    items: ["Entalle", "Bordados", "Transformaciones"],
  },
  {
    id: "blusas",
    label: "Blusas",
    icon: Shirt,
    items: ["Ajustes", "Cambios de botones", "Transformación"],
  },
  {
    id: "camisas",
    label: "Camisas",
    icon: Scissors,
    items: ["Dobladillos", "Entalle", "Cambio de puños"],
  },
  {
    id: "chamarras",
    label: "Chamarras",
    icon: Shirt,
    items: ["Cierres", "Resortes", "Forros"],
  },
  {
    id: "cojines",
    label: "Cojines",
    icon: Sparkles,
    items: ["Fundas", "Relleno", "Renovación"],
  },
  {
    id: "combinaciones",
    label: "Combinaciones",
    icon: Scissors,
    items: ["Ajustes especiales", "Diseño a medida", "Detalles únicos"],
  },
];

export default function GalleryTabs() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const activeCategory = categories.find((item) => item.id === activeId);

  return (
    <section className="section-pad ambient-bg">
      <div className="container-base">
        <div className="section-header">
          <div>
            <h2 className="section-title">Trabajos que hablan por sí solos</h2>
            <p className="mt-4 section-subtitle">
              Selecciona la prenda que quieres transformar y descubre las opciones de
              compostura, ajuste o confección disponibles.
            </p>
          </div>
        </div>
        <div className="mt-10 tab-grid">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveId(category.id)}
              className={`tab-button ${activeId === category.id ? "is-active" : ""}`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light">
                <category.icon size={22} className="text-brand-secondary" />
              </span>
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          ))}
        </div>
        {activeCategory && (
          <div className="mt-12">
            <div className="panel-card">
              <h3 className="mt-3 text-2xl font-semibold">
                Transformaciones suaves y precisas
              </h3>
              <p className="mt-4 text-sm text-brand-text/80">
                Elegimos el mejor método según la tela y el uso. Así logramos
                composturas discretas, ajustes cómodos y diseños que elevan tu estilo.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-brand-text/70">
                {activeCategory.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
