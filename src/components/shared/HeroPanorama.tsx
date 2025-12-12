"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const cards = [
  { id: 1, title: "Roma Antigua", days: "7 Días", price: "$1400", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996" },
  { id: 2, title: "Tokio Moderno", days: "10 Días", price: "$2200", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994" },
  { id: 3, title: "Caribe Maya", days: "5 Días", price: "$900", img: "https://images.unsplash.com/photo-1512753360384-ad15a81d42a2?q=80&w=1974" },
  { id: 4, title: "Alpes Suizos", days: "6 Días", price: "$1800", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070" },
];

export default function HeroPanorama() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Cuánto scrollea
      scrollRef.current.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center bg-slate-50 overflow-hidden pt-20">
      
      {/* TEXTO INTRODUCTORIO ARRIBA */}
      <div className="container mx-auto px-4 mb-8 md:mb-12 flex justify-between items-end">
         <div>
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-2 block">Destinos Destacados</span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-none">
              Elige tu próxima <br/> <span className="text-slate-400">historia.</span>
            </h1>
         </div>
         {/* Botones de navegación (Desktop) */}
         <div className="hidden md:flex gap-4">
            <button onClick={() => scroll('left')} className="p-4 rounded-full border border-slate-300 hover:bg-slate-900 hover:text-white transition"><ChevronLeft/></button>
            <button onClick={() => scroll('right')} className="p-4 rounded-full border border-slate-300 hover:bg-slate-900 hover:text-white transition"><ChevronRight/></button>
         </div>
      </div>

      {/* CARRUSEL DE TARJETAS */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 md:px-20 pb-10 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Ocultar scrollbar
      >
        {cards.map((card) => (
          <div key={card.id} className="relative min-w-[300px] md:min-w-[400px] h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden flex-shrink-0 snap-center group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            
            <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            
            {/* Gradiente oscuro abajo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Info Flotante Arriba */}
            <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-bold border border-white/30 flex items-center gap-1">
               <Star size={14} fill="currentColor" className="text-yellow-400" /> 4.9
            </div>

            {/* Texto Abajo */}
            <div className="absolute bottom-0 left-0 p-8 w-full">
               <p className="text-emerald-400 text-sm font-bold uppercase mb-2">{card.days}</p>
               <div className="flex justify-between items-end">
                  <h3 className="text-3xl font-bold text-white leading-tight">{card.title}</h3>
                  <div className="text-right">
                    <p className="text-gray-300 text-xs uppercase">Desde</p>
                    <p className="text-2xl font-bold text-white">{card.price}</p>
                  </div>
               </div>
            </div>

          </div>
        ))}
        {/* Espacio extra al final para que no se corte */}
        <div className="min-w-[50px]"></div>
      </div>

    </section>
  );
}