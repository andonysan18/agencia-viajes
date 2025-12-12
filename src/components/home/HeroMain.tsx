import { Search } from "lucide-react";
import Image from "next/image";

export default function HeroMain() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
          alt="Travel Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Oscurecer para leer texto */}
      </div>

      {/* 2. CONTENIDO CENTRADO */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 font-bold tracking-widest uppercase text-xs mb-6 animate-fade-in">
          Agencia Oficial IATA
        </span>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
          No sueñes tu vida, <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-400">
            vive tu sueño.
          </span>
        </h1>
        
        <p className="text-gray-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
          Especialistas en charters privados, lunas de miel y destinos exóticos.
        </p>

        {/* 3. BUSCADOR INTEGRADO */}
        <div className="bg-white p-2 rounded-full shadow-2xl max-w-2xl mx-auto flex items-center transform hover:scale-105 transition-transform duration-300">
          <div className="flex-1 px-6 border-r border-gray-200 hidden md:block text-left">
            <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">¿A dónde?</span>
            <input type="text" placeholder="Europa, Caribe..." className="w-full outline-none text-slate-900 font-medium placeholder-slate-300" />
          </div>
          <div className="flex-1 px-6 hidden md:block text-left">
             <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Fecha</span>
             <input type="text" placeholder="Elegir fechas" className="w-full outline-none text-slate-900 font-medium placeholder-slate-300" />
          </div>
          <button className="bg-slate-900 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2 w-full md:w-auto justify-center">
            <Search size={20} />
            <span className="md:hidden">Buscar Viaje</span>
          </button>
        </div>
      </div>
    </section>
  );
}