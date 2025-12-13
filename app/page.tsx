import Link from "next/link";
// Importamos tus componentes existentes
import HeroMain from "@/src/components/home/HeroMain";
import FeaturedCarousel from "@/src/components/home/FeaturedCarousel";
// Importamos los nuevos componentes (Asegúrate de haberlos creado primero)
import WhyChooseUs from "@/src/components/home/WhyChooseUs";
import CategoriesGrid from "@/src/components/home/CategoriesGrid";
import Newsletter from "@/src/components/home/Newsletter";
import HeroBento from "@/src/components/shared/HeroBento";
import HeroSlider from "@/src/components/shared/HeroSlider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. PORTADA + BUSCADOR (Lo primero que ve el usuario) */}
      <HeroMain />
      
      {/* 2. CONFIANZA (Antes de vender, mostramos que somos seguros: IATA, Oficinas) */}
      <WhyChooseUs />

      {/* 3. PRODUCTO DESTACADO (Tus tours desde la Base de Datos) */}
      {/* Nota: Este componente ya trae su propio título y padding */}
      <FeaturedCarousel />

      {/* 4. BANNER DE CHARTERS (Intermedio visual para romper el ritmo) */}
      {/* Lo ponemos directo aquí para destacar la oferta especial */}
      <section className="bg-emerald-600 py-16 text-white relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
           <div className="text-center md:text-left max-w-2xl">
              <span className="bg-emerald-500 text-emerald-50 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                Cupos Limitados
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                ¿Buscas paquetes con aéreo incluido?
              </h3>
              <p className="text-emerald-50 text-lg">
                Olvídate de buscar vuelos por separado. Tenemos salidas grupales confirmadas a 
                <b> Punta Cana, Brasil y el Caribe</b> con tarifas exclusivas.
              </p>
           </div>
           
           <Link 
             href="/charters" 
             className="bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 hover:scale-105 transition-all shadow-xl whitespace-nowrap"
           >
             Ver Salidas Grupales
           </Link>
        </div>
      </section>

      {/* 5. CATEGORÍAS (Para el que no sabe dónde ir: Europa, Playa, etc.) */}
      <CategoriesGrid />

      {/* 6. NEWSLETTER (Para capturar el contacto antes de que se vayan) */}
      <Newsletter />

      {/* El Footer NO va aquí, va en app/layout.tsx para que salga en todas las páginas */}
    </div>
  );
}