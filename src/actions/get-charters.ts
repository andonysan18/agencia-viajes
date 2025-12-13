"use server"; // Importante para que corra en el servidor
import prisma from "@/src/lib/prisma"; 

export async function getCharters() {
  try {
    const charters = await prisma.tour.findMany({
      where: {
        category: "CHARTER", // Asegúrate de guardar tus charters con esta categoría
        departures: {
          some: {
            startDate: { gte: new Date() }, // Solo fechas futuras
          },
        },
      },
      include: {
        departures: {
          where: { startDate: { gte: new Date() } },
          orderBy: { startDate: "asc" },
        },
      },
    });
    return charters;
  } catch (error) {
    console.error("Error al obtener charters:", error);
    return [];
  }
}