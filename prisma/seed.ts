import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Helper para fijar fechas al MEDIODÍA (12:00) y evitar problemas de zona horaria
const dateFix = (dateString: string) => new Date(`${dateString}T12:00:00Z`)

// ---------------------------------------------------------------------
// --- DATOS ADICIONALES PARA EL TOUR DE EUROPA (ITINERARIO COMPLETO) ---
// ---------------------------------------------------------------------

const EUROPE_ITINERARY_FULL = [
    { day: 1, title: "AMÉRICA - PARÍS", desc: "Vuelo con destino la ciudad de París. Noche a bordo." },
    { day: 2, title: "PARÍS", desc: "Llegada al aeropuerto de París. Traslado al hotel. Día libre. Alojamiento." },
    { day: 3, title: "PARÍS", desc: "Desayuno. Día libre para actividades personales o para realizar alguna excursión." },
    { day: 4, title: "PARÍS (Versalles y Visita Panorámica)", desc: "Traslado al Palacio de Versalles (entrada no incluida). Visita al barrio bohemio de Montmartre. Visita panorámica de París con guía local." },
    { day: 5, title: "PARÍS", desc: "Desayuno. Día libre para actividades personales o para realizar alguna excursión." },
    { day: 6, title: "PARIS - BLOIS - TOURS - VILLANDRY - AMBOISE", desc: "Parada en Blois. Paseo en Tours. Entrada incluida a los jardines del Palacio de Villandry. Llegada a Amboise. Cena incluida y alojamiento." },
    { day: 7, title: "AMBOISE - CHENONCEAUX - CHAMBORD – LIMOGES", desc: "Día de Castillos. Entrada incluida al Castillo de Chenonceau y entrada al parque del Castillo de Chambord. Viaje a Limoges." },
    { day: 8, title: "LIMOGES - SARLAT - BEYNAC ET CAZENAC – ROCAMADOUR", desc: "Entrada al museo y réplica de las cuevas de Lascaux. Visita a Sarlat y entrada al Castillo de Beynac. Llegada a Rocamadour. Cena incluida." },
    { day: 9, title: "ROCAMADOUR - PADIRAC - COLLONGES LA ROUGE - SAINT EMILION - BURDEOS", desc: "Visita a las Cuevas de Padirac (entradas incluidas con paseo en barco). Parada en Collonges la Rouge. Viaje a Burdeos." },
    { day: 10, title: "BURDEOS - LOURDES", desc: "Visita panorámica de Burdeos. Tras el almuerzo continuamos nuestra ruta hacia Lourdes. Cena incluida." },
    { day: 11, title: "LOURDES - CARCASONA - NARBONA - MARSELLA", desc: "Viaje por el sur de Francia. Parada en Carcasona (murallas medievales) y tiempo libre en Narbona. Llegada a Marsella." },
    { day: 12, title: "MARSELLA - AIX EN PROVENCE - AVIGNON - PUENTE DEL GARD – BARCELONA", desc: "Descubrimos la Provenza. Paseo por Aix en Provence. Tiempo en Avignon. Entrada incluida al Acueducto Pont du Gard. Llegada a Barcelona." },
    { day: 13, title: "BARCELONA", desc: "Visita panorámica de la ciudad condal. Traslado nocturno al Maremagnum." },
    { day: 14, title: "BARCELONA - VALENCIA – MADRID", desc: "Parada en Peñiscola y visita a Valencia. Breve parada en la Ciudad de las Artes y las Ciencias. Llegada a Madrid. Traslado a Plaza Mayor." },
    { day: 15, title: "MADRID", desc: "Visita panorámica de la ciudad. Tarde libre (opcional a Toledo o espectáculo flamenco)." },
    { day: 16, title: "MADRID", desc: "Desayuno. Día libre para actividades personales. Alojamiento." },
    { day: 17, title: "MADRID - FIN DEL VIAJE", desc: "Tras el desayuno, concluyen nuestros servicios." },
];

const EUROPE_INCLUSIONS_FULL = [
    { description: "Aéreo Lima–Madrid–París / Madrid–Lima (Air Europa)", isIncluded: true },
    { description: "Alojamiento Hoteles Cat. TS con Desayuno", isIncluded: true },
    { description: "Traslados Aeropuerto-Hotel-Aeropuerto", isIncluded: true },
    { description: "Autocar turístico y Guía acompañante", isIncluded: true },
    { description: "3 Cenas (Amboise, Lourdes, Rocamadour)", isIncluded: true },
    { description: "Visitas panorámicas: París, Barcelona, Madrid", isIncluded: true },
    { description: "Entradas: Versalles (Jardines), Castillos Loira, Cuevas Padirac", isIncluded: true },
    { description: "Tarjeta SIM de datos ilimitada", isIncluded: true },
    { description: "Seguro de Asistencia (hasta 70 años)", isIncluded: true },
    { description: "Equipaje en Bodega", isIncluded: true },
    { description: "Visado o tasas de entrada", isIncluded: false },
    { description: "Propinas", isIncluded: false },
];


// ---------------------------------------------------------------------
// --- ARRAY FINAL CON TODOS LOS TOURS A CREAR ---
// ---------------------------------------------------------------------
const TOURS_TO_CREATE = [
    // ✈️ 1. CHARTER BUE-LIMA (Salida 19 Dic) - MANTENIDO
    {
        title: "Vuelo Exclusivo a Lima (Dic 19)",
        slug: "vuelo-bue-lima-19-dic",
        description: "Cupo aéreo confirmado. Salida especial diciembre. Solo equipaje de cabina.",
        basePrice: 300.00,
        duration: "Solo Ida",
        location: "Buenos Aires > Lima",
        country: "Peru", 
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
        country: "Peru", 
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

    // 🌍 3. GRAN TOUR EUROPA - CORREGIDO CON ITINERARIO COMPLETO
    {
        title: "Lima, Madrid & París: Gran Tour 17 Días",
        slug: "europa-francia-espana-17-dias",
        description: "La experiencia definitiva en Europa. Recorre París, el Valle del Loira, Carcasona y Barcelona. Incluye vuelos directos Lima-Europa con Air Europa.",
        basePrice: 3825.00,
        duration: "17 Días / 16 Noches",
        location: "Francia & España",
        country: "Europa", 
        isFeatured: true,
        category: "Europa",
        images: [
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073",
            "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070",
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2027"
        ],
        // ASIGNAMOS EL ITINERARIO COMPLETO DE 17 DÍAS
        itinerary: EUROPE_ITINERARY_FULL, 
        departures: [
            { startDate: dateFix('2026-02-08'), endDate: dateFix('2026-02-24'), price: 3825.00, totalSeats: 30, soldSeats: 5 }
        ],
        // ASIGNAMOS LAS INCLUSIONES COMPLETAS
        inclusions: EUROPE_INCLUSIONS_FULL
    }
]

async function main() {
    console.log('🌱 Reiniciando base de datos...')
    
    // Limpieza de tablas (CRUCIAL para evitar duplicados)
    try {
        await prisma.booking.deleteMany()
        await prisma.departure.deleteMany()
        await prisma.inclusion.deleteMany()
        await prisma.itinerary.deleteMany()
        await prisma.tour.deleteMany()
    } catch (e) {
        console.log('Tablas ya vacías o error leve durante la limpieza.')
    }

    // Creación de Tours
    for (const tour of TOURS_TO_CREATE) {
        // Mapeo del itinerario para asegurar que el campo dayNumber se pase correctamente
        const itineraryData = tour.itinerary.map(i => ({ dayNumber: i.day, title: i.title, description: i.desc }));

        await prisma.tour.create({
            data: {
                title: tour.title,
                slug: tour.slug,
                description: tour.description,
                basePrice: tour.basePrice,
                duration: tour.duration,
                location: tour.location,
                country: tour.country, 
                isFeatured: tour.isFeatured,
                category: tour.category,
                images: tour.images,
                itineraries: { create: itineraryData }, // Usamos el itinerario completo
                departures: { create: tour.departures },
                inclusions: { create: tour.inclusions }
            }
        })
        console.log(`✅ Creado: ${tour.title} (País: ${tour.country})`)
    }
    console.log('🚀 Base de datos actualizada con éxito.')
}

main()
    .then(async () => { await prisma.$disconnect() })
    .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1) })