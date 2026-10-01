import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Nosotros from "../components/Nosotros";
import Opiniones from "../components/Opiniones";
import Contacto from "../components/Contacto";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Servicios />
      <Nosotros />
      <Opiniones />
      <Contacto />
    </>
  );
}
