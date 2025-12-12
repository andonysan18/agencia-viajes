import prisma from "@/src/lib/prisma"; // Asegúrate que esta ruta sea correcta según tu proyecto
import CarouselUI from "./CarouselUI"; // Importamos el componente visual que acabamos de crear

export default async function FeaturedCarousel() {
  // 1. OBTENER DATOS DEL SERVER 🔍
  const rawTrips = await prisma.tour.findMany({
    where: { isFeatured: true },
    take: 6,
  });

  if (rawTrips.length === 0) return null;

  // 2. LIMPIAR DATOS 🧼
  // Convertimos el "Decimal" de la base de datos a "Number" de JavaScript
  // para que el componente Cliente no se queje.
  const featuredTrips = rawTrips.map(trip => ({
    ...trip,
    basePrice: Number(trip.basePrice)
  }));

  // 3. RENDERIZAR EL COMPONENTE CLIENTE 🎨
  return <CarouselUI tours={featuredTrips} />;
}