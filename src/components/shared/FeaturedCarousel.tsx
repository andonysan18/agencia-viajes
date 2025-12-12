"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Clock } from "lucide-react";

// Estos datos luego vendrán de tu Prisma DB
const featuredTrips = [
  { id: 1, title: "Roma & Venecia", days: "9 Días", price: "$1,850", rating: "4.9", img: "https://images.unsplash.com/photo-1529260830199-42c42dda5f3d?q=80&w=2070" },
  { id: 2, title: "Playa del Carmen", days: "7 Días", price: "$1,200", rating: "5.0", img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068" },
  { id: 3, title: "Tokio Esencial", days: "12 Días", price: "$2,400", rating: "4.8", img: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070" },
  { id: 4, title: "Machu Picchu", days: "5 Días", price: "$980", rating: "4.9", img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070" },
];

export default function FeaturedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* CABECERA DE SECCIÓN */}
        <div className="flex justify-between items-end mb-10">
           <div>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">Destinos Destacados</h2>
             <p className="text-slate-500">Los paquetes más elegidos por nuestros viajeros este mes.</p>
           </div>
           {/* Botones Navegación */}
           <div className="flex gap-2">
             <button onClick={() => scroll('left')} className="p-3 rounded-full border border-slate-200 hover:bg-slate-900 hover:text-white transition"><ChevronLeft size={20}/></button>
             <button onClick={() => scroll('right')} className="p-3 rounded-full border border-slate-200 hover:bg-slate-900 hover:text-white transition"><ChevronRight size={20}/></button>
           </div>
        </div>

        {/* CARRUSEL */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredTrips.map((trip) => (
            <div key={trip.id} className="min-w-[300px] md:min-w-[350px] h-[450px] relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer snap-center">
               
               {/* Imagen */}
               <Image 
                 src={trip.img} 
                 alt={trip.title} 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-110" 
               />
               
               {/* Overlay degradado */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

               {/* Etiquetas flotantes */}
               <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                 <Star size={12} className="text-yellow-500 fill-yellow-500"/> {trip.rating}
               </div>

               {/* Info Abajo */}
               <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                 <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
                   <Clock size={14} /> {trip.days}
                 </div>
                 <h3 className="text-2xl font-bold mb-2">{trip.title}</h3>
                 <div className="flex justify-between items-center border-t border-white/20 pt-4 mt-2">
                   <span className="text-sm text-gray-300">Precio final</span>
                   <span className="text-xl font-bold">{trip.price}</span>
                 </div>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}