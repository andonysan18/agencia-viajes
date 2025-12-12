import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Definimos los datos crudos aquí para mantener el código ordenado
const TOURS_TO_CREATE = [
  // 1. EUROPA (El que ya tenías)
  {
    title: "Roma, Florencia & Venecia",
    slug: "roma-florencia-venecia",
    description: "Un recorrido inolvidable por el corazón de Italia. Descubre la historia de Roma, el arte de Florencia y los canales de Venecia.",
    basePrice: 1850.00,
    duration: "9 Días / 8 Noches",
    location: "Italia",
    isFeatured: true,
    category: "Europa",
    images: [
      "https://images.unsplash.com/photo-1529260830199-42c42dda5f3d?q=80&w=2070",
      "https://images.unsplash.com/photo-1541359927-4288b399252c?q=80&w=2070"
    ],
    itinerary: [
      { day: 1, title: "Benvenuti a Roma", desc: "Recepción en aeropuerto y traslado al hotel." },
      { day: 2, title: "Roma Imperial", desc: "Visita al Coliseo, Foro Romano y Palatino." },
      { day: 3, title: "Vaticano", desc: "Museos Vaticanos y Capilla Sixtina." },
      { day: 4, title: "Hacia Florencia", desc: "Tren de alta velocidad a la cuna del Renacimiento." }
    ]
  },
  // 2. PLAYA (Caribe)
  {
    title: "Punta Cana All Inclusive",
    slug: "punta-cana-relax",
    description: "Desconecta del mundo en las playas de arena blanca más exclusivas del Caribe. Todo incluido, solo preocúpate por disfrutar.",
    basePrice: 1200.00,
    duration: "7 Días / 6 Noches",
    location: "República Dominicana",
    isFeatured: true, // Saldrá en el carrusel
    category: "Caribe",
    images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049"
    ],
    itinerary: [
      { day: 1, title: "Llegada al Paraíso", desc: "Cóctel de bienvenida y check-in." },
      { day: 2, title: "Día de Playa", desc: "Relax total bajo las palmeras." },
      { day: 3, title: "Excursión Isla Saona", desc: "Navegación en catamarán con barra libre." }
    ]
  },
  // 3. ASIA (Japón)
  {
    title: "Japón Esencial: Tokio & Kioto",
    slug: "japon-tokio-kioto",
    description: "Una mezcla fascinante entre tradición y futuro. Templos milenarios, luces de neón y gastronomía de otro planeta.",
    basePrice: 2400.00,
    duration: "12 Días / 11 Noches",
    location: "Japón",
    isFeatured: true,
    category: "Asia",
    images: [
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070"
    ],
    itinerary: [
      { day: 1, title: "Llegada a Tokio", desc: "Traslado a Shinjuku." },
      { day: 2, title: "Tokio Moderno", desc: "Cruce de Shibuya y Torre de Tokio." },
      { day: 3, title: "Monte Fuji", desc: "Excursión de día completo." },
      { day: 4, title: "Tren Bala a Kioto", desc: "Viaje en Shinkansen." }
    ]
  },
  // 4. PATAGONIA (Naturaleza)
  {
    title: "Patagonia: Glaciares y Montañas",
    slug: "patagonia-argentina",
    description: "La aventura de tu vida al fin del mundo. Camina sobre el Glaciar Perito Moreno y haz trekking en El Chaltén.",
    basePrice: 1500.00,
    duration: "6 Días / 5 Noches",
    location: "Argentina",
    isFeatured: true,
    category: "Sudamérica",
    images: [
      "https://images.unsplash.com/photo-1518182170546-0766aa6f6a56?q=80&w=2070",
      "https://images.unsplash.com/photo-1533052448375-74898246d841?q=80&w=2070"
    ],
    itinerary: [
      { day: 1, title: "Llegada a El Calafate", desc: "Traslado y tarde libre." },
      { day: 2, title: "Perito Moreno", desc: "Navegación y pasarelas frente al glaciar." },
      { day: 3, title: "Ruta a El Chaltén", desc: "Capital nacional del trekking." }
    ]
  }
]

async function main() {
  console.log('🌱 Iniciando la siembra masiva...')

  // 1. Limpieza de tablas (Para no duplicar si corres el comando 2 veces)
  await prisma.booking.deleteMany()
  await prisma.departure.deleteMany()
  await prisma.inclusion.deleteMany()
  await prisma.itinerary.deleteMany()
  await prisma.tour.deleteMany()

  console.log('🧹 Base de datos limpia. Creando tours...')

  // 2. Bucle para crear cada tour
 for (const tourData of TOURS_TO_CREATE) {
    
    await prisma.tour.create({
      data: {
        title: tourData.title,
        slug: tourData.slug,
        description: tourData.description,
        basePrice: tourData.basePrice,
        duration: tourData.duration,
        location: tourData.location,
        isFeatured: tourData.isFeatured,
        category: tourData.category,
        images: tourData.images,
        
        itineraries: {
          create: tourData.itinerary.map(item => ({
            dayNumber: item.day,
            title: item.title,
            description: item.desc
          }))
        },

        // CORRECCIÓN: Fechas en 2026 para asegurar que sean futuras
        departures: {
          create: [
            { 
              startDate: new Date('2026-03-10'), 
              endDate: new Date('2026-03-20'), 
              price: tourData.basePrice, 
              totalSeats: 20, 
              soldSeats: 2 
            },
            { 
              startDate: new Date('2026-05-15'), 
              endDate: new Date('2026-05-25'), 
              price: Number(tourData.basePrice) + 100, 
              totalSeats: 20, 
              soldSeats: 10 
            }
          ]
        }
      }
    })
    console.log(`✅ Tour creado: ${tourData.title}`)
  }

  console.log('🚀 ¡Todo listo! Base de datos poblada.')
}

main()
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1) })