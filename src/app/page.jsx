import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ValueProps from "../components/ValueProps";
import ServicesGrid from "../components/ServicesGrid";
import AdvantagesSection from "../components/AdvantagesSection";
import GalleryTabs from "../components/GalleryTabs";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import Callout from "../components/Callout";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "Inicio",
  description:
    "Hilitos Lili ofrece compostura y confección a tu medida en CDMX. Ajustes, diseños únicos y atención personalizada.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal><AboutSection /></Reveal>
      <Reveal><ValueProps /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><ServicesGrid id="servicios" /></Reveal>
      <Reveal><AdvantagesSection /></Reveal>
      <Reveal><GalleryTabs /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><ContactSection /></Reveal>
      <Reveal><MapSection /></Reveal>
      <Reveal><Callout /></Reveal>
    </>
  );
}
