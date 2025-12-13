import prisma from "@/src/lib/prisma";
import TourCard from "@/src/components/tours/TourCard";
import TourSearch from "@/src/components/tours/TourSearch";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Explora nuestros destinos | Andina Travel",
  description: "Encuentra el viaje de tus sueños en nuestro catálogo completo.",
};

const normalizeTour = (tour: any) => ({
  ...tour,
  basePrice: Number(tour.basePrice),
});

export default async function ToursPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || ""; 

  // 1. CONSTRUCCIÓN DE LA CONSULTA FILTRADA A LA BASE DE DATOS 🔍
  const tours = await prisma.tour.findMany({
    where: query ? {
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { location: { contains: query, mode: 'insensitive' } },
        { category: { contains: query, mode: 'insensitive' } },
        { country: { contains: query, mode: 'insensitive' } }, // Campo Country
      ]
    } : {},
    orderBy: {
      createdAt: 'desc',
    },
  });

  const normalizedTours = tours.map(normalizeTour);
  
  const pageTitle = query 
    ? `Explorando ${query.toUpperCase()}` 
    : "Explora el Mundo";
    
  const pageSubtitle = query 
    ? `Encontramos ${tours.length} viajes que coinciden con tu búsqueda.`
    : "Desde playas paradisíacas hasta montañas nevadas. Tu próxima aventura comienza aquí.";


  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* HEADER DINÁMICO */}
      <div className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          {pageTitle}
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          {pageSubtitle}
        </p>
      </div>

      {/* BUSCADOR INTERACTIVO */}
      <TourSearch /> 

      {/* GRILLA DE RESULTADOS - CORRECCIÓN DE ESPACIADO */}
      <div className="max-w-7xl mx-auto px-4 pt-16"> {/* <--- ¡PT-16 AGREGADO AQUÍ! */}
        
        {/* Mostramos el contador si no hay búsqueda activa */}
        {!query && (
          <div className="flex justify-between items-center mb-8"> {/* Removido el pt-8 para evitar doble espaciado */}
            <h2 className="text-xl font-bold text-slate-800">
              Todos los destinos <span className="text-slate-400 font-normal">({tours.length})</span>
            </h2>
          </div>
        )}

        {/* CONTENEDOR DE CARDS CON ALTURA MÍNIMA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-96"> 
          {normalizedTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* Mensaje si no hay resultados */}
        {tours.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm mt-8">
            <p className="text-slate-400 text-lg mb-4">No encontramos viajes para "{query}" 😢</p>
            <a href="/tours" className="text-emerald-600 font-bold hover:underline">
              Ver todos los viajes
            </a>
          </div>
        )}
      </div>
    </div>
  );
}