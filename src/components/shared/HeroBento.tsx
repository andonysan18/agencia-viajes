import { Search, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroBento() {
  return (
    <section className="pt-32 pb-20 px-4 min-h-screen flex items-center bg-slate-50">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* === COLUMNA IZQUIERDA: TEXTO Y BUSCADOR (Ocupa 5 columnas) === */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 w-fit text-xs font-bold uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Nueva temporada 2025
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[0.95] tracking-tight">
            Viaja <br />
            <span className="text-emerald-600">Lejos.</span> <br />
            Vive <span className="text-slate-400">Ahora.</span>
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-md">
            Descubre salidas grupales exclusivas y destinos ocultos. La aventura comienza donde termina tu zona de confort.
          </p>

          {/* Buscador Compacto */}
          <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-100 flex items-center max-w-md transform hover:-translate-y-1 transition-transform duration-300">
            <div className="pl-4 text-slate-400">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Ej: Caribe, Madrid, Patagonia..." 
              className="flex-1 p-3 outline-none bg-transparent text-slate-700 font-medium placeholder:font-normal"
            />
            <button className="bg-emerald-600 text-white p-3 rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-200">
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Social Proof (Pequeñas caras) */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[1,2,3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                   <Image src={`https://images.unsplash.com/photo-${i === 1 ? '1534528741775-53994a69daeb' : i===2 ? '1506794778202-cad84cf45f1d' : '1507003211169-0a1dd7228f2d'}?auto=format&fit=crop&w=100&q=80`} alt="user" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-slate-900 block">4.9/5 Estrellas</span>
              <span className="text-slate-500">Basado en +1200 viajeros</span>
            </div>
          </div>
        </div>

        {/* === COLUMNA DERECHA: EL GRID DE IMÁGENES (Ocupa 7 columnas) === */}
        <div className="lg:col-span-7 h-[500px] lg:h-[600px] grid grid-cols-2 grid-rows-2 gap-4">
          
          {/* Card 1: Principal (Vertical Izquierda) */}
          <div className="row-span-2 relative rounded-3xl overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop" 
              alt="Camping" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block border border-white/30">Aventura</span>
              <h3 className="text-2xl font-bold">Patagonia Camping</h3>
              <p className="text-white/80 text-sm mt-1 flex items-center gap-1"><MapPin size={14}/> Argentina</p>
            </div>
          </div>

          {/* Card 2: Arriba Derecha */}
          <div className="relative rounded-3xl overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop" 
              alt="Resort" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
             <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-bold shadow-lg text-slate-900">
                $1200 / pax
             </div>
          </div>

          {/* Card 3: Abajo Derecha (Con botón de play falso) */}
          <div className="relative rounded-3xl overflow-hidden group bg-slate-900">
             <Image 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
              alt="Traveler" 
              fill 
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition border border-white/50">
                 <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}