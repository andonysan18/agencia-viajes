import Link from "next/link";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      
      {/* 1. IMAGEN DE FONDO (Con overlay oscuro) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Capa oscura para leer el texto */}
      </div>

      {/* 2. CONTENIDO */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
        <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
          Descubre el mundo con nosotros
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Tu próxima aventura <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            comienza aquí
          </span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Expertos en charters, paquetes a medida y experiencias inolvidables. 
          Preocúpate solo por hacer la maleta.
        </p>

        {/* 3. BARRA DE BÚSQUEDA VISUAL (Simulada por ahora) */}
        <div className="bg-white p-2 rounded-full shadow-2xl max-w-2xl mx-auto flex items-center">
          <div className="flex-1 px-6 border-r border-gray-200 hidden md:block">
            <span className="block text-xs text-gray-400 font-bold uppercase">Destino</span>
            <span className="text-gray-800 font-medium">¿A dónde quieres ir?</span>
          </div>
          <div className="flex-1 px-6 hidden md:block">
            <span className="block text-xs text-gray-400 font-bold uppercase">Fecha</span>
            <span className="text-gray-800 font-medium">Cualquier fecha</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-colors flex items-center gap-2 mx-auto md:mx-0 w-full md:w-auto justify-center">
            <Search size={20} />
            <span className="md:hidden">Buscar viaje</span>
          </button>
        </div>
      </div>
    </div>
  );
}