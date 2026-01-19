export default function MapSection() {
  return (
    <section className="section-pad" id="mapa">
      <div className="container-base">
        <div className="overflow-hidden rounded-2xl border border-black/5 shadow-soft">
          <iframe
            title="Mapa Hilitos Lili"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.570319340257!2d-99.13592262397351!3d19.3444428434887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffce81510f1d%3A0x5e82a634ad9a7a5e!2sHilitos%20Lili!5e0!3m2!1ses!2smx!4v1686955972403!5m2!1ses!2smx"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
