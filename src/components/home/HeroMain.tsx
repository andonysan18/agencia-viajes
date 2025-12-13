"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Calendar as CalendarIcon, MapPin } from "lucide-react";
import Image from "next/image";

export default function HeroMain() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destination) params.set("q", destination);
    if (date) params.set("date", date);
    router.push(`/tours?${params.toString()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

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
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 2. CONTENIDO CENTRADO */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10 w-full"> {/* Agregué w-full */}
        
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 font-bold tracking-widest uppercase text-xs mb-6 animate-fade-in">
          Agencia Oficial
        </span>
        
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
          No sueñes tu vida, <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-400">
            vive tu sueño.
          </span>
        </h1>
        
        <p className="text-gray-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
          Especialistas en charters privados, lunas de miel y destinos exóticos.
        </p>

        {/* 3. BUSCADOR INTEGRADO (CORREGIDO) */}
        <div className="
            bg-white 
            p-4 md:p-2               /* Más padding interno en móvil */
            rounded-3xl md:rounded-full /* ✨ CLAVE: Rectángulo redondeado en móvil, Píldora en PC */
            shadow-2xl 
            max-w-3xl mx-auto 
            flex flex-col md:flex-row /* Columna en móvil, Fila en PC */
            items-center 
            gap-4 md:gap-0           /* Espacio entre inputs en móvil */
            transform hover:scale-[1.01] transition-transform duration-300
        ">
          
          {/* INPUT DESTINO */}
          <div className="flex-1 w-full px-4 md:px-6 border-b md:border-b-0 md:border-r border-gray-100 pb-2 md:pb-0 text-left relative">
            <div className="flex items-center gap-2 mb-1">
                <MapPin size={14} className="text-emerald-500" />
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">¿A dónde?</span>
            </div>
            <input 
                type="text" 
                placeholder="Europa, Caribe..." 
                className="w-full outline-none text-slate-900 font-medium placeholder-slate-300 bg-transparent text-sm md:text-base"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                onKeyDown={handleKeyDown}
            />
          </div>

          {/* INPUT FECHA */}
          <div className="flex-1 w-full px-4 md:px-6 text-left relative">
              <div className="flex items-center gap-2 mb-1">
                <CalendarIcon size={14} className="text-emerald-500" />
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Fecha</span>
              </div>
              <input 
                type="text" 
                placeholder="Elegir fechas" 
                className="w-full outline-none text-slate-900 font-medium placeholder-slate-300 bg-transparent text-sm md:text-base"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={(e) => setDate(e.target.value)}
              />
          </div>

          {/* BOTÓN BUSCAR */}
          <button 
            onClick={handleSearch}
            className="bg-slate-900 hover:bg-emerald-600 text-white px-8 py-3 md:py-4 rounded-xl md:rounded-full font-bold transition-all duration-300 flex items-center gap-2 w-full md:w-auto justify-center shadow-lg hover:shadow-emerald-500/20"
          >
            <Search size={20} />
            <span className="md:hidden">Buscar Viaje</span>
          </button>
        </div>
      </div>
    </section>
  );
}