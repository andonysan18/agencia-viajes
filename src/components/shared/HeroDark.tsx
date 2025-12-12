import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function HeroDark() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">
      
      {/* Elemento Decorativo de Fondo (Mancha de luz) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* TEXTO IZQUIERDA */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Star size={12} fill="currentColor" /> Premium Collection
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-serif text-white leading-tight mb-8">
            El lujo de <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">
              perderse.
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10">
            Accede a villas privadas, vuelos charter y experiencias culinarias que no aparecen en los mapas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-amber-50 transition flex items-center justify-center gap-2">
              Planear Viaje <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition">
              Ver Catálogo 2025
            </button>
          </div>
        </div>

        {/* IMAGEN DERECHA (Con efecto de marco elegante) */}
        <div className="relative h-[600px] w-full">
           {/* Marco decorativo detrás */}
           <div className="absolute inset-0 border border-white/10 rounded-[2rem] rotate-6 scale-95 transform transition-transform duration-1000"></div>
           
           <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-amber-900/20">
             <Image 
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Desert" 
                fill 
                className="object-cover"
             />
             {/* Overlay degradado sutil */}
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
             
             <div className="absolute bottom-8 left-8">
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">Destino del mes</p>
                <h3 className="text-3xl font-serif text-white">Sahara, Marruecos</h3>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}