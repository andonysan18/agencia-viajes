import Image from "next/image";
import { CheckCircle, Map, Users, Heart } from "lucide-react";

export const metadata = {
  title: "Sobre Nosotros | Andina Travel",
  description: "Conoce al equipo detrás de tus próximas aventuras.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION (Encabezado) */}
      <div className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            {/* Usamos una imagen de fondo sutil (puedes cambiar la URL) */}
            <Image 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021" 
              alt="Background" 
              fill 
              className="object-cover"
            />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">Nuestra Historia</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Viajamos para vivir,<br/>Vivimos para viajar.
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            En Andina Travel creemos que un viaje no es solo moverse de un lugar a otro, 
            sino transformar la forma en que ves el mundo.
          </p>
        </div>
      </div>

      {/* 2. HISTORIA Y MISIÓN */}
      <section className="py-20 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
           <Image 
             src="https://images.unsplash.com/photo-1526772662000-3f88f107f5d8?q=80&w=1973" 
             alt="Equipo Andina" 
             fill 
             className="object-cover"
           />
        </div>
        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 font-serif">Más que una agencia, somos viajeros como tú.</h2>
          <p className="text-slate-600 leading-relaxed">
            Fundada en 2015, Andina Travel nació con una misión simple: eliminar el estrés de planificar 
            y devolverle la magia a la experiencia de viajar.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Lo que empezó como un pequeño blog de recomendaciones, hoy es una comunidad de miles de aventureros 
            que confían en nosotros para diseñar sus momentos más inolvidables.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
             {[
               "Atención 24/7",
               "Guías Locales Expertos",
               "Precios Transparentes",
               "Seguro de Viaje Incluido"
             ].map((item) => (
               <div key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                 <CheckCircle className="text-emerald-500" size={20} />
                 {item}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. POR QUÉ ELEGIRNOS (Features) */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 font-serif mb-4">¿Por qué viajar con Andina?</h2>
            <p className="text-slate-500">Nuestros pilares fundamentales para garantizar tu felicidad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition text-center">
               <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Map size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">Destinos Exclusivos</h3>
               <p className="text-slate-500 text-sm leading-relaxed">
                 Accedemos a lugares que no salen en las guías turísticas tradicionales. Experiencias auténticas garantizadas.
               </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition text-center">
               <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Users size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">Grupos Reducidos</h3>
               <p className="text-slate-500 text-sm leading-relaxed">
                 Viaja con comodidad y haz nuevos amigos. Mantenemos los grupos pequeños para una atención personalizada.
               </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition text-center">
               <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Heart size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">Pasión por el Detalle</h3>
               <p className="text-slate-500 text-sm leading-relaxed">
                 Desde la bienvenida en el aeropuerto hasta la cena de despedida, cuidamos cada segundo de tu viaje.
               </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}