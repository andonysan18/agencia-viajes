import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Helper para fijar fechas al MEDIODÍA (12:00) y evitar problemas de zona horaria
const dateFix = (dateString: string) => new Date(`${dateString}T12:00:00Z`)

const TOURS_TO_CREATE = [
  // ✈️ 1. CHARTER BUE-LIMA (Salida 19 Dic) - MANTENIDO
  {
    title: "Vuelo Exclusivo a Lima (Dic 19)",
    slug: "vuelo-bue-lima-19-dic",
    description: "Cupo aéreo confirmado. Salida especial diciembre. Solo equipaje de cabina.",
    basePrice: 300.00,
    duration: "Solo Ida",
    location: "Buenos Aires > Lima",
    isFeatured: true,
    category: "CHARTER", 
    images: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074"
    ],
    itinerary: [
      { day: 1, title: "Vuelo Directo", desc: "Salida EZE 19/12. Llegada LIM." }
    ],
    departures: [
       { startDate: dateFix('2025-12-19'), endDate: dateFix('2025-12-19'), price: 300.00, totalSeats: 25, soldSeats: 5 }
    ],
    inclusions: [
      { description: "Ticket Aéreo Ida", isIncluded: true },
      { description: "Mochila de mano / Cabina", isIncluded: true },
      { description: "Equipaje en Bodega", isIncluded: false },
      { description: "Hotel / Alojamiento", isIncluded: false },
      { description: "Traslados", isIncluded: false }
    ]
  },

  // ✈️ 2. CHARTER BUE-LIMA (Salida 22 Dic) - MANTENIDO
  {
    title: "Vuelo Exclusivo a Lima (Dic 22)", 
    slug: "vuelo-bue-lima-22-dic",
    description: "Aprovecha esta tarifa promocional antes de Navidad. Vuelo directo.",
    basePrice: 300.00,
    duration: "Solo Ida",
    location: "Buenos Aires > Lima",
    isFeatured: true,
    category: "CHARTER",
    images: [
      "https://images.unsplash.com/photo-1531968455001-5c5272a41129?q=80&w=2000"
    ],
    itinerary: [
      { day: 1, title: "Vuelo Directo", desc: "Salida EZE 22/12. Llegada LIM." }
    ],
    departures: [
       { startDate: dateFix('2025-12-22'), endDate: dateFix('2025-12-22'), price: 300.00, totalSeats: 25, soldSeats: 2 }
    ],
    inclusions: [
      { description: "Ticket Aéreo Ida", isIncluded: true },
      { description: "Mochila de mano / Cabina", isIncluded: true },
      { description: "Equipaje en Bodega", isIncluded: false },
      { description: "Hotel / Alojamiento", isIncluded: false }
    ]
  },

  // 🌍 3. GRAN TOUR EUROPA: FRANCIA & ESPAÑA (17 Días) - DETALLADO AL MÁXIMO
  {
    title: "Lima, Madrid & París: Gran Tour 17 Días",
    slug: "europa-francia-espana-17-dias",
    description: "La experiencia definitiva en Europa. Recorre París, el Valle del Loira, Burdeos, Lourdes, la Costa Azul y finaliza en España (Barcelona y Madrid). \n\nINCLUYE: Vuelos Air Europa, Hoteles Categoría TS, Traslados, Guía acompañante y Excursiones exclusivas (Versalles, Castillos del Loira, Cuevas de Padirac).",
    basePrice: 3825.00,
    duration: "17 Días / 16 Noches",
    location: "Francia & España",
    isFeatured: true, // Saldrá destacado
    category: "Europa",
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073", // Paris / Torre Eiffel
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070", // Madrid / Gran Via
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070", // Barcelona / Sagrada Familia
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2027"  // Castillos Loira
    ],
    // FECHAS REALES DEL FOLLETO
    departures: [
      { startDate: dateFix('2026-02-08'), endDate: dateFix('2026-02-24'), price: 3825.00, totalSeats: 30, soldSeats: 5 }
    ],
    // SERVICIOS INCLUIDOS SEGÚN FOLLETO
    inclusions: [
      { description: "Aéreo Lima–Madrid–París / Madrid–Lima (Air Europa)", isIncluded: true },
      { description: "Alojamiento Hoteles Cat. TS con Desayuno", isIncluded: true },
      { description: "Traslados Aeropuerto-Hotel-Aeropuerto", isIncluded: true },
      { description: "Autocar turístico y Guía acompañante", isIncluded: true },
      { description: "3 Cenas (Amboise, Lourdes, Rocamadour)", isIncluded: true },
      { description: "Visitas panorámicas: París, Barcelona, Madrid", isIncluded: true },
      { description: "Entradas: Versalles (Jardines), Castillos Loira, Cuevas Padirac", isIncluded: true },
      { description: "Tarjeta SIM de datos ilimitada", isIncluded: true }, //
      { description: "Seguro de Asistencia (hasta 70 años)", isIncluded: true }
    ],
    // ITINERARIO DÍA A DÍA
    itinerary: [
      { day: 1, title: "América - París", desc: "Salida en vuelo Air Europa con destino a París (vía Madrid). Noche a bordo." },
      { day: 2, title: "Llegada a París", desc: "Recepción y traslado al hotel. Resto del día libre." },
      { day: 3, title: "París Libre", desc: "Día libre para actividades personales o excursiones opcionales." },
      { day: 4, title: "Versalles y Montmartre", desc: "Traslado al Palacio de Versalles (jardines incluidos). Visita al barrio bohemio de Montmartre. Visita panorámica de la ciudad." },
      { day: 5, title: "París Libre", desc: "Día libre para disfrutar la ciudad de la luz." },
      { day: 6, title: "Valle del Loira", desc: "Visita a Blois y Tours. Entrada a jardines de Villandry. Cena incluida en Amboise." },
      { day: 7, title: "Castillos de Ensueño", desc: "Entrada al Castillo de Chenonceau y Parque de Chambord. Llegada a Limoges." },
      { day: 8, title: "Pueblos Medievales", desc: "Museo cuevas de Lascaux, Sarlat y Castillo de Beynac. Cena en Rocamadour." },
      { day: 9, title: "Cuevas y Vino", desc: "Paseo en barco en cuevas de Padirac. Visita a Saint Emilion y llegada a Burdeos." },
      { day: 10, title: "Burdeos a Lourdes", desc: "Paseo por Burdeos. Viaje a los Pirineos. Visita al Santuario de Lourdes y Procesión de Velas. Cena incluida." },
      { day: 11, title: "Carcasona y Costa Azul", desc: "Murallas de Carcasona, parada en Narbona y llegada a Marsella (Puerto antiguo)." },
      { day: 12, title: "Provenza y Romanos", desc: "Aix en Provence, Palacio Papal de Avignon y Acueducto Pont du Gard (entrada). Llegada a Barcelona." },
      { day: 13, title: "Barcelona", desc: "Visita panorámica: Sagrada Familia, Ramblas. Noche: Traslado a Maremagnum." },
      { day: 14, title: "Ruta Mediterránea", desc: "Peñíscola y Valencia (Ciudad de las Artes). Llegada a Madrid. Traslado nocturno a Plaza Mayor." },
      { day: 15, title: "Madrid Histórico", desc: "Visita panorámica de la ciudad. Tarde libre (Opcional Toledo)." },
      { day: 16, title: "Madrid Libre", desc: "Día para compras o museos." },
      { day: 17, title: "Regreso", desc: "Traslado al aeropuerto para vuelo de regreso." }
    ]
  }
]

async function main() {
  console.log('🌱 Reiniciando base de datos...')
  
  // Limpieza de tablas
  try {
    await prisma.booking.deleteMany()
    await prisma.departure.deleteMany()
    await prisma.inclusion.deleteMany()
    await prisma.itinerary.deleteMany()
    await prisma.tour.deleteMany()
  } catch (e) {
    console.log('Tablas ya vacías o error leve.')
  }

  // Creación de Tours
  for (const tour of TOURS_TO_CREATE) {
    await prisma.tour.create({
      data: {
        title: tour.title,
        slug: tour.slug,
        description: tour.description,
        basePrice: tour.basePrice,
        duration: tour.duration,
        location: tour.location,
        isFeatured: tour.isFeatured,
        category: tour.category,
        images: tour.images,
        itineraries: { create: tour.itinerary.map(i => ({ dayNumber: i.day, title: i.title, description: i.desc })) },
        departures: { create: tour.departures },
        inclusions: { create: tour.inclusions }
      }
    })
    console.log(`✅ Creado: ${tour.title}`)
  }
  console.log('🚀 Base de datos actualizada con éxito.')
}

main()
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1) })