import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin } from "lucide-react";

interface TourCardProps {
  tour: {
    slug: string;
    images: string[];
    title: string;
    duration: string;
    location: string;
    basePrice: number;
    category: string;
  };
}

const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function TourCard({ tour }: TourCardProps) {
  return (
    <Link 
      href={`/tours/${tour.slug}`} 
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      {/* IMAGEN */}
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={tour.images[0]} 
          alt={tour.title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Categoría Flotante */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wide">
          {tour.category}
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Ubicación y Duración */}
        <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">
           <span className="flex items-center gap-1"><MapPin size={14} className="text-emerald-500"/> {tour.location}</span>
           <span className="flex items-center gap-1"><Clock size={14} className="text-emerald-500"/> {tour.duration}</span>
        </div>

        {/* Título */}
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
          {tour.title}
        </h3>

        {/* Separador flexible para empujar el precio al fondo */}
        <div className="flex-grow"></div>

        <div className="border-t border-slate-100 pt-4 mt-4 flex justify-between items-end">
          <div>
            <p className="text-xs text-slate-400 font-medium">Precio por persona</p>
            <span className="text-2xl font-bold text-slate-900">{formatPrice(tour.basePrice)}</span>
          </div>
          <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            Ver Detalle
          </span>
        </div>
      </div>
    </Link>
  );
}