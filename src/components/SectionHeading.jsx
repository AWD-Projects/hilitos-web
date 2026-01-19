export default function SectionHeading({ kicker, title, highlight, description }) {
  return (
    <div className="max-w-2xl">
      <h2 className="mt-4 section-title">
        {title} <span className="text-brand-secondary">{highlight}</span>
      </h2>
      {description && (
        <p className="mt-4 section-subtitle">{description}</p>
      )}
    </div>
  );
}
