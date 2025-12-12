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
  },
  // NUEVO TOUR: LIMA - MADRID - PARIS
  {
    title: "Gran Tour Europa: Francia & España",
    slug: "europa-francia-espana-17-dias",
    description: "Un viaje soñado de 17 días recorriendo lo mejor de Francia y España. \n\nINCLUYE: Vuelos con Air Europa, Alojamiento categoría TS, Traslados, Visitas panorámicas en Barcelona, Madrid y París, Excursión a Versalles, Barco en cuevas de Padirac, y recorrido por los Castillos del Loira. \n\n¡La experiencia definitiva para conocer el viejo continente!",
    basePrice: 3825.00,
    duration: "17 Días / 16 Noches",
    location: "Francia & España",
    isFeatured: true, // Lo ponemos destacado para que salga en la Home
    category: "Europa",
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073", // Paris
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2027", // Madrid
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070"  // Barcelona
    ],
    itinerary: [
      { day: 1, title: "Vuelo a Europa", desc: "Salida en vuelo con destino a París. Noche a bordo." },
      { day: 2, title: "Llegada a París", desc: "Recepción en aeropuerto y traslado al hotel. Resto del día libre." },
      { day: 3, title: "París Libre", desc: "Día libre para disfrutar la ciudad de la luz a tu ritmo." },
      { day: 4, title: "Versalles y Montmartre", desc: "Traslado al Palacio de Versalles, barrio bohemio de Montmartre y visita panorámica de la ciudad." },
      { day: 5, title: "París a tu aire", desc: "Día libre para compras o museos." },
      { day: 6, title: "Valle del Loira", desc: "Visita a Blois, Tours y los jardines del Palacio de Villandry. Cena en Amboise." },
      { day: 7, title: "Castillos de Ensueño", desc: "Castillo de Chenonceau y Chambord. Llegada a Limoges." },
      { day: 8, title: "Pueblos Medievales", desc: "Cuevas de Lascaux, Sarlat, Beynac y el santuario de Rocamadour." },
      { day: 9, title: "Cuevas y Vino", desc: "Barco en cuevas de Padirac, Collonges la Rouge y viñedos de Saint Emilion. Llegada a Burdeos." },
      { day: 10, title: "Burdeos a Lourdes", desc: "Paseo por Burdeos y viaje a los Pirineos. Visita al santuario de Lourdes." },
      { day: 11, title: "Carcasona y Costa Azul", desc: "Murallas de Carcasona, Narbona y llegada a Marsella (Puerto antiguo)." },
      { day: 12, title: "Provenza y Romanos", desc: "Aix en Provence, Palacio Papal de Avignon y Acueducto Pont du Gard. Llegada a Barcelona." },
      { day: 13, title: "Barcelona", desc: "Visita panorámica: Sagrada Familia, Ramblas y cena en Maremagnum." },
      { day: 14, title: "Ruta Mediterránea", desc: "Peñíscola, paella en Valencia y llegada a Madrid con visita a Plaza Mayor." },
      { day: 15, title: "Madrid Histórico", desc: "Visita panorámica de los monumentos más representativos. Tarde libre." },
      { day: 16, title: "Madrid Libre", desc: "Día para compras por Gran Vía o museos." },
      { day: 17, title: "Despedida", desc: "Traslado al aeropuerto y fin de los servicios." }
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
        // DENTRO DEL BUCLE for...
        
        departures: {
          create: tourData.slug === "europa-francia-espana-17-dias" 
          ? [
              // FECHAS REALES DEL FOLLETO PARA ESTE TOUR
              { 
                startDate: new Date('2026-02-08'), 
                endDate: new Date('2026-02-24'), 
                price: tourData.basePrice, 
                totalSeats: 30, 
                soldSeats: 5 
              },
              { 
                startDate: new Date('2026-02-09'), 
                endDate: new Date('2026-02-25'), 
                price: tourData.basePrice, 
                totalSeats: 30, 
                soldSeats: 8 
              },
              { 
                startDate: new Date('2026-02-24'), 
                endDate: new Date('2026-03-12'), 
                price: tourData.basePrice, 
                totalSeats: 30, 
                soldSeats: 0 
              }
            ]
          : [
              // FECHAS GENÉRICAS PARA LOS OTROS TOURS (LO QUE YA TENÍAS)
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