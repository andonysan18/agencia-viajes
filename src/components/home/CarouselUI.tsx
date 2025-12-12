"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Clock } from "lucide-react";

interface TourProps {
  id: string;
  slug: string;
  images: string[];
  title: string;
  duration: string;
  basePrice: number;
}

const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function CarouselUI({ tours }: { tours: TourProps[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- LÓGICA DE FLECHAS (Suave como la seda) ---
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = 'smooth';
      const { current } = scrollRef;
      const scrollAmount = 370; 
      
      if (direction === 'left') {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  // --- LÓGICA DE ARRASTRAR (Respuesta inmediata) ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    scrollRef.current.style.scrollBehavior = 'auto';
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
        scrollRef.current.style.scrollBehavior = 'smooth';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* CABECERA */}
        <div className="flex justify-between items-end mb-10">
           <div>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">Destinos Destacados</h2>
             <p className="text-slate-500">Selección exclusiva de nuestras mejores experiencias.</p>
           </div>
           
           {/* BOTONES */}
           <div className="flex gap-2">
             <button 
                onClick={() => scroll('left')} 
                className="p-3 rounded-full border border-slate-200 hover:bg-slate-900 hover:text-white transition shadow-sm bg-white active:scale-95 duration-200"
             >
                <ChevronLeft size={20}/>
             </button>
             <button 
                onClick={() => scroll('right')} 
                className="p-3 rounded-full border border-slate-200 hover:bg-slate-900 hover:text-white transition shadow-sm bg-white active:scale-95 duration-200"
             >
                <ChevronRight size={20}/>
             </button>
           </div>
        </div>

        {/* CARRUSEL */}
        <div 
          ref={scrollRef}
          className={`flex gap-6 overflow-x-auto pb-12 pt-4 px-2 scrollbar-hide 
            ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} 
            snap-x snap-mandatory`} 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {tours.map((trip) => (
            <Link 
                href={`/tours/${trip.slug}`} 
                key={trip.id} 
                onClick={(e) => { if (isDragging) e.preventDefault(); }}
                draggable={false} 
                // CORRECCIÓN: Agregué [mask-image:linear-gradient(white,white)]
                // Esto fuerza al navegador a respetar el rounded-3xl durante la animación
                className="min-w-[300px] md:min-w-[350px] h-[450px] relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group snap-center block select-none transform hover:-translate-y-2 [mask-image:linear-gradient(white,white)]"
            >
               <Image 
                 src={trip.images[0]} 
                 alt={trip.title} 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none" 
               />
               
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

               <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                 <Star size={12} className="text-yellow-500 fill-yellow-500"/> 5.0
               </div>

               <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                 <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
                   <Clock size={14} /> {trip.duration}
                 </div>
                 <h3 className="text-2xl font-bold mb-2 leading-tight">{trip.title}</h3>
                 <div className="flex justify-between items-center border-t border-white/20 pt-4 mt-2">
                   <span className="text-sm text-gray-300">Precio final</span>
                   <span className="text-xl font-bold">{formatPrice(trip.basePrice)}</span>
                 </div>
               </div>
            </Link>
          ))}
          
          <div className="min-w-[20px]"></div> 
        </div>

      </div>
    </section>
  );
}