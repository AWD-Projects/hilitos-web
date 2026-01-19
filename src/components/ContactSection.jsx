import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  return (
    <section id="contacto" className="section-pad">
      <div className="container-base split">
        <div className="space-y-6">
          <SectionHeading
            title="Conversemos sobre"
            highlight="tu prenda"
            description="Cuéntanos qué necesitas y preparamos una propuesta con tiempos y detalles claros."
          />
          <div className="space-y-4 rounded-2xl border border-black/5 bg-brand-light p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
                Ubicación
              </p>
              <p className="mt-2 text-sm text-brand-text/80">
                Cerro de la Estrella 289 Local B, Campestre Churubusco, CDMX
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
                Teléfono / WhatsApp
              </p>
              <p className="mt-2 text-sm text-brand-text/80">+52 55 4107 2124</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
                Horario
              </p>
              <div className="mt-2 text-sm text-brand-text/80">
                <p>Lunes a sábado: 11:30 a 19:00</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
        <form
          name="contacto"
          method="POST"
          data-netlify="true"
          className="rounded-2xl border border-black/5 bg-white p-8 shadow-soft"
        >
          <input type="hidden" name="form-name" value="contacto" />
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
              className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
            />
            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              required
              className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono / WhatsApp"
              className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
            />
            <input
              type="text"
              name="servicio"
              placeholder="Servicio de interés"
              className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
            />
          </div>
          <textarea
            name="mensaje"
            placeholder="Cuéntanos qué necesitas"
            rows={5}
            required
            className="mt-4 w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
          ></textarea>
          <button type="submit" className="button-primary mt-6">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
