import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

// Datos falsos para el ejemplo visual
const destinations = [
  { id: 1, title: "Bali, Indonesia", price: "$1,200", rating: "4.9", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4" },
  { id: 2, title: "Santorini, Grecia", price: "$1,800", rating: "5.0", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff" },
  { id: 3, title: "Tulum, México", price: "$950", rating: "4.8", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077" },
];

export default function HeroCards() {
  return (
    <section className="bg-white pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO: Título a la izquierda, botón a la derecha */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">Top Destinos 2025</span>
            <h1 className="text-5xl font-bold text-slate-900 leading-tight">
              Encuentra tu lugar <br /> en el mundo.
            </h1>
          </div>
          <button className="group flex items-center gap-2 text-slate-900 font-semibold border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
            Ver todos los paquetes <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* LAS TARJETAS (CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="group cursor-pointer">
              {/* Contenedor Imagen */}
              <div className="relative h-[400px] rounded-[2rem] overflow-hidden mb-6 shadow-md group-hover:shadow-2xl transition-all duration-500">
                <Image 
                  src={dest.img + "?auto=format&fit=crop&w=800&q=80"} 
                  alt={dest.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 flex items-center gap-1 text-sm font-bold shadow-sm">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  {dest.rating}
                </div>
              </div>
              
              {/* Info Abajo */}
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{dest.title}</h3>
                  <p className="text-slate-500 mt-1">Vuelo + Hotel + Traslados</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-xs font-bold uppercase">Desde</p>
                  <p className="text-xl font-bold text-slate-900">{dest.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}