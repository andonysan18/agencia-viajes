import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, MapPin, CheckCircle, Phone, AlertCircle } from "lucide-react";
import prisma from "@/src/lib/prisma"; // <--- Importamos nuestra conexión
import TourClientWrapper from "@/src/components/tours/TourClientWrapper";

// Función para formatear precio (de Decimal a moneda bonita)
const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

// Función para formatear fechas (ej: 10 Oct 2025)
const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
};

export default async function TourDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // 1. BUSCAR EN BASE DE DATOS REAL 🔍
  const tour = await prisma.tour.findUnique({
    where: {
      slug: slug
    },
    include: {
      itineraries: {
        orderBy: { dayNumber: 'asc' } // Ordenamos días 1, 2, 3...
      },
      departures: {
        where: {
          startDate: { gte: new Date() } // Solo salidas futuras
        },
        orderBy: { startDate: 'asc' }
      },
      inclusions: true
    }
  });

  // 2. SI NO EXISTE, ERROR 404 🚫
  if (!tour) {
    notFound();
  }

  // Calculamos si hay lugares disponibles en general
  const hasDepartures = tour.departures.length > 0;

  return (
    <div className="min-h-screen bg-slate-50 pb-20">

      {/* HERO HEADER */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={tour.images[0]} // Usamos la primera imagen real
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-slate-900 to-transparent">
          <div className="max-w-7xl mx-auto">
            {tour.isFeatured && (
              <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                Destacado
              </span>
            )}
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              {tour.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90 font-medium">
              <span className="flex items-center gap-2"><Clock size={18} /> {tour.duration}</span>
              <span className="flex items-center gap-2"><MapPin size={18} /> {tour.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* COLUMNA IZQUIERDA */}
        <div className="lg:col-span-2 space-y-12">

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Sobre este viaje</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {tour.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Itinerario Día a Día</h2>
            <div className="space-y-6">
              {tour.itineraries.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold border-2 border-emerald-50 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {item.dayNumber}
                    </div>
                    <div className="w-0.5 h-full bg-slate-200 mt-2 group-last:hidden"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                    <p className="text-slate-500 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* INCLUSIONES (Si las hubiera en la DB, si no mostramos genéricas por ahora) */}
          {/* SECCIÓN DINÁMICA DE INCLUSIONES */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">¿Qué incluye?</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tour.inclusions.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  {/* Si está incluido: Check Verde. Si no: X Roja o gris */}
                  <div className={`rounded-full p-1 ${item.isIncluded ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                    {item.isIncluded ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    )}
                  </div>
                  <span className={item.isIncluded ? "text-slate-700 font-medium" : "text-slate-400 line-through"}>
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: BOOKING CARD DINÁMICA */}
        <div className="relative">
          <TourClientWrapper
            departures={tour.departures.map(d => ({
              ...d,
              price: Number(d.price) // Conversión importante para el cliente
            }))}
            basePrice={Number(tour.basePrice)}
            tourTitle={tour.title}
          />
        </div>

      </div>
    </div>
  );
}