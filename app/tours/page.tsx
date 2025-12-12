import prisma from "@/src/lib/prisma";
import TourCard from "@/src/components/tours/TourCard";
import TourSearch from "@/src/components/tours/TourSearch"; // <--- Importamos el nuevo componente

export const metadata = {
  title: "Explora nuestros destinos | Andina Travel",
  description: "Encuentra el viaje de tus sueños en nuestro catálogo completo.",
};

const normalizeTour = (tour: any) => ({
  ...tour,
  basePrice: Number(tour.basePrice),
});

// Next.js nos pasa los parámetros de búsqueda (query params) automáticamente aquí
export default async function ToursPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || ""; // Obtenemos el texto de búsqueda o vacío

  // 1. CONSULTA FILTRADA A LA BASE DE DATOS 🔍
  const tours = await prisma.tour.findMany({
    where: query ? {
      OR: [
        // Busca si el texto está en el Título...
        { title: { contains: query, mode: 'insensitive' } },
        // ... o en la Ubicación ...
        { location: { contains: query, mode: 'insensitive' } },
        // ... o en la Categoría.
        { category: { contains: query, mode: 'insensitive' } },
      ]
    } : {}, // Si no hay búsqueda, trae todo ({})
    orderBy: {
      createdAt: 'desc',
    },
  });

  const normalizedTours = tours.map(normalizeTour);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* HEADER */}
      <div className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          {query ? `Resultados para "${query}"` : "Explora el Mundo"}
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          {query 
            ? `Encontramos ${tours.length} viajes que coinciden con tu búsqueda.`
            : "Desde playas paradisíacas hasta montañas nevadas. Tu próxima aventura comienza aquí."}
        </p>
      </div>

      {/* BUSCADOR INTERACTIVO */}
      <TourSearch />

      {/* GRILLA DE RESULTADOS */}
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Mostramos el contador solo si no estamos buscando (o si quieres siempre) */}
        {!query && (
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-slate-800">
              Todos los destinos <span className="text-slate-400 font-normal">({tours.length})</span>
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {normalizedTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* Mensaje si no hay resultados */}
        {tours.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
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