import HeroMain from "@/src/components/home/HeroMain";
import FeaturedCarousel from "@/src/components/home/FeaturedCarousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* SECCIÓN 1: PORTADA IMPACTANTE */}
      <HeroMain />
      
      {/* SECCIÓN 2: CARRUSEL DE LUGARES IMPORTANTES */}
      <FeaturedCarousel />

      {/* Espacio extra (Footer vendrá después) */}
      <section className="py-20 text-center text-slate-400">
        <p>Próximamente: Sección de Charters y Footer...</p>
      </section>

    </div>
  );
}