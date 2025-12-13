"use client";
import Link from "next/link";
import { Plane, Calendar, MapPin } from "lucide-react";
import { Tour, Departure } from "@prisma/client";

type CharterWithDepartures = Tour & {
  departures: Departure[];
};

interface CharterCardProps {
  data: CharterWithDepartures;
}

export default function CharterCard({ data }: CharterCardProps) {
  const nextDeparture = data.departures[0];
  const seatsLeft = nextDeparture ? nextDeparture.totalSeats - nextDeparture.soldSeats : 0;
  const isLowStock = seatsLeft < 5;

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full [mask-image:linear-gradient(white,white)] transform-gpu">
      {/* 👆 CAMBIO CLAVE AQUÍ: 
         1. [mask-image:linear-gradient(white,white)]: Esto fuerza a Safari y Chrome a recortar los bordes SIEMPRE.
         2. transform-gpu: Activa la aceleración de hardware para que sea más suave.
      */}

      {/* IMAGEN + BADGE */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={data.images[0] || "/placeholder.jpg"}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 z-10">
          <Plane size={12} className="text-emerald-400" />
          {/* Aquí puedes cambiar el texto si quieres que diga Vuelo Exclusivo */}
          {data.category === 'CHARTER' ? 'VUELO EXCLUSIVO' : 'AÉREO INCLUIDO'}
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="p-5 flex flex-col flex-grow relative z-20 bg-white">
        {/* z-20 y bg-white aseguran que el contenido siempre tape cualquier desborde extraño */}
        
        <div className="flex items-start justify-between mb-2">
           <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-emerald-600 transition-colors">
            {data.title}
          </h3>
        </div>

        {/* INFO RÁPIDA */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-slate-500 text-sm">
             <MapPin size={16} className="mr-2 text-emerald-500" />
             {data.location}
          </div>
          <div className="flex items-center text-slate-500 text-sm">
             <Calendar size={16} className="mr-2 text-emerald-500" />
             {nextDeparture 
               // Solución rápida para la fecha: Sumarle horas para compensar zona horaria si es necesario, 
               // pero con el seed arreglado ya debería verse bien.
               ? new Date(nextDeparture.startDate).toLocaleDateString('es-AR', {day: 'numeric', month: 'short', year: 'numeric'}) 
               : "Consultar"}
          </div>
        </div>

        {/* BARRA DE CUPOS */}
        {nextDeparture && (
          <div className="mb-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
             <div className="flex justify-between text-xs font-semibold mb-1.5">
                <span className={isLowStock ? "text-red-500" : "text-emerald-600"}>
                  {seatsLeft > 0 ? `¡Quedan ${seatsLeft} lugares!` : "Agotado"}
                </span>
                <span className="text-slate-400">Cupo total: {nextDeparture.totalSeats}</span>
             </div>
             <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden"> 
                {/* Agregué overflow-hidden aquí también por seguridad */}
                <div 
                  className={`h-1.5 rounded-full transition-all duration-500 ${isLowStock ? "bg-red-500" : "bg-emerald-500"}`}
                  style={{ width: `${(nextDeparture.soldSeats / nextDeparture.totalSeats) * 100}%` }}
                ></div>
             </div>
          </div>
        )}

        {/* PRECIO Y BOTÓN */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Precio Final</p>
            <p className="text-xl font-bold text-slate-900">
              U$D {Number(nextDeparture?.price || data.basePrice)}
            </p>
          </div>
          <Link 
            href={`/tours/${data.slug}`}
            className="bg-slate-900 text-white p-2.5 rounded-full hover:bg-emerald-500 transition-colors shadow-lg shadow-slate-200 active:scale-95 duration-200"
          >
             <Plane size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}