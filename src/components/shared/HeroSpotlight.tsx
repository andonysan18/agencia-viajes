"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Machu Picchu",
    location: "Cusco, Perú",
    description: "Descubre la ciudad perdida de los Incas en una experiencia mística.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076",
  },
  {
    id: 2,
    name: "Islas Maldivas",
    location: "Océano Índico",
    description: "Bungalows sobre el agua y playas de arena blanca infinita.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065",
  },
  {
    id: 3,
    name: "Santorini",
    location: "Grecia",
    description: "Atardeceres inolvidables entre cúpulas azules y mar Egeo.",
    image: "https://images.unsplash.com/photo-1613395877344-13d4c2ce5d5d?q=80&w=2070",
  },
  {
    id: 4,
    name: "Torres del Paine",
    location: "Chile",
    description: "La octava maravilla del mundo para los amantes del trekking.",
    image: "https://images.unsplash.com/photo-1533052448375-74898246d841?q=80&w=2070",
  }
];

export default function HeroSpotlight() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
      
      {/* 1. FONDO QUE CAMBIA */}
      {destinations.map((dest, idx) => (
        <div 
          key={dest.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        >
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
           <Image src={dest.image} alt={dest.name} fill className="object-cover" priority={idx === 0} />
        </div>
      ))}

      {/* 2. CONTENIDO PRINCIPAL (IZQUIERDA) */}
      <div className="absolute inset-0 z-20 container mx-auto px-4 flex flex-col justify-center h-full max-w-7xl">
        <div className="max-w-2xl animate-fade-in-up">
           <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest mb-4">
              <MapPin size={18} />
              {destinations[active].location}
           </div>
           <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
             {destinations[active].name}
           </h1>
           <p className="text-gray-300 text-xl max-w-lg mb-8 leading-relaxed">
             {destinations[active].description}
           </p>
           <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-emerald-400 hover:text-white transition-all group">
             Ver Itinerario <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
           </button>
        </div>
      </div>

      {/* 3. SELECTOR DE MINIATURAS (DERECHA/ABAJO) */}
      <div className="absolute bottom-10 right-4 md:right-10 z-30 flex md:flex-col gap-4 overflow-x-auto md:overflow-visible max-w-full px-4 md:px-0">
        {destinations.map((dest, idx) => (
          <button 
            key={dest.id}
            onClick={() => setActive(idx)}
            className={`relative w-32 h-20 md:w-48 md:h-28 rounded-xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
              idx === active ? 'border-emerald-400 scale-105 shadow-xl' : 'border-white/20 opacity-70 hover:opacity-100'
            }`}
          >
             <Image src={dest.image} alt={dest.name} fill className="object-cover" />
             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
               <span className="text-white font-bold text-sm text-shadow">{dest.name}</span>
             </div>
          </button>
        ))}
      </div>

    </section>
  );
}