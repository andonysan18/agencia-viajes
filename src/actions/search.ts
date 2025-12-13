// src/actions/search.ts
"use server";

import prisma from "@/src/lib/prisma";

// Definimos la estructura básica del tour que necesitamos en el cliente
type SearchTourResult = {
    id: string;
    title: string;
    location: string;
    images: string[];
    basePrice: number;
    duration: string;
};

// Función de utilidad para convertir el precio a número (como en ToursPage)
const normalizeTour = (tour: any) => ({
    ...tour,
    basePrice: Number(tour.basePrice),
});


/**
 * Busca tours completos para el filtro en vivo.
 * @param term El texto ingresado por el usuario.
 * @returns Un array de tours completos.
 */
export async function searchToursLive(term: string): Promise<SearchTourResult[]> {
    if (!term || term.length < 3) {
        return []; 
    }

    try {
        const tours = await prisma.tour.findMany({
            where: {
                OR: [
                    { title: { contains: term, mode: 'insensitive' } },
                    { location: { contains: term, mode: 'insensitive' } },
                    { country: { contains: term, mode: 'insensitive' } },
                ]
            },
            // Seleccionamos todos los campos que TourCard necesita
            select: {
                id: true,
                title: true,
                location: true,
                images: true,
                basePrice: true,
                duration: true,
                slug: true, // Asegúrate de tener el slug
            },
            take: 10, // Limitamos los resultados a 10 tours
            orderBy: {
                title: 'asc', 
            }
        });

        // Devolvemos los tours normalizados
        return tours.map(normalizeTour) as SearchTourResult[];
        
    } catch (error) {
        console.error("Error en la búsqueda en vivo:", error);
        return [];
    }
}
// También puedes mantener la función getSearchSuggestions si quieres el menú desplegable.
// Si no quieres el menú desplegable, puedes eliminar el código de suggestions y solo usar esta función.