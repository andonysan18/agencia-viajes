import Image from "next/image";
import { Target, Eye, Heart, MapPin, Phone, Globe, Shield, Users, FileCheck, Briefcase, Plane } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-19"
      style={{ paddingTop: '80px' }}
    > {/* pt-20 para que no choque con el navbar fijo */}

      {/* 1. HERO SECTION: Identidad */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070"
            alt="Paisaje Andino"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative z-10 text-center px-4  max-w-4xl mx-auto animate-fade-in-up p-2">

          {/* 1. SUBTÍTULO: Más sofisticado que "Nuestra Esencia" */}
          <span className="text-emerald-300 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block mt-10">
            Legado & Vanguardia
          </span>

          {/* 2. TÍTULO: Más poético y menos rígido */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Experiencia que <br />
            <span className="text-white bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Conecta Mundos
            </span>
          </h1>

          {/* 3. BAJADA: Narra una historia en lugar de solo dar datos */}
          <p className="text-slate-100 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed text-shadow-sm">
            La solidez de <strong>Peruvian Tours</strong> evoluciona en <strong>Andina Travel</strong>.
            Desde nuestra casa matriz en Buenos Aires, diseñamos viajes con la seguridad de quien conoce el camino y la pasión de quien ama descubrir.
          </p>

        </div>
      </section>

      {/* 2. HISTORIA Y RESPALDO (Texto Peruvian Tours) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070"
              alt="Machu Picchu - Nuestras Raíces"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-bold text-lg">Experiencia Comprobada</p>
              <p className="text-sm opacity-80">Líderes en turismo receptivo y emisivo.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              ¿Quiénes Somos?
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                <strong>Andina Travel</strong> es la cara moderna de una organización con vasta experiencia: <em>Peruvian Reps S.A.</em>, más conocida en el mercado como <strong>Peruvian Tours</strong>.
              </p>
              <p>
                Somos un grupo de profesionales apasionados por la "amable industria del turismo". Nuestra filosofía es simple: prestar servicios personalizados de alta calidad.
              </p>
              <p>
                Contamos con una <strong>moderna red de comunicaciones</strong> que nos permite estar en contacto permanente con nuestros clientes en el exterior y nuestras sucursales. Supervisamos su viaje desde la llegada hasta el retorno, atentos a resolver cualquier necesidad al instante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISIÓN, VISIÓN Y OBJETIVOS (Cards Modernas) */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Tarjeta Misión */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-emerald-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-emerald-400">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Nuestra Misión</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Ofrecer un servicio de calidad al turista nacional y extranjero con <strong>eficiencia, honestidad, puntualidad y confiabilidad</strong>.
              </p>
            </div>

            {/* Tarjeta Visión */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-blue-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-blue-400">
                <Eye size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Nuestra Visión</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Ser una agencia reconocida mundialmente por la confianza y seguridad que ofrecemos. Innovar constantemente para asegurar la mayor satisfacción de nuestros clientes.
              </p>
            </div>

            {/* Tarjeta Objetivos */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-purple-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-purple-400">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Nuestro Objetivo</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Capacitación constante de nuestro talento humano para brindar una atención personalizada que aumente efectivamente la calidad de cada servicio.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. NUESTROS SERVICIOS (Grilla de Iconos) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">¿Qué Ofrecemos?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Soluciones integrales. Desde un boleto aéreo hasta la logística completa de convenciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Users />}
              title="Guía de Turistas"
              desc="Personal bilingüe profesional. Servicios para excursiones, circuitos, convenciones y viajes de negocios."
            />
            <ServiceCard
              icon={<Shield />}
              title="Seguros de Viaje"
              desc="Tu tranquilidad es primero. Cobertura ante accidentes, pérdida de equipaje y salud. Viaja seguro."
            />
            <ServiceCard
              icon={<FileCheck />}
              title="Visas y Permisos"
              desc="Asesoramiento e información para trámites consulares. Facilitamos tu documentación de ingreso."
            />
            <ServiceCard
              icon={<Globe />}
              title="Paquetes Turísticos"
              desc="Combinaciones inteligentes de traslado + hospedaje + atracciones para optimizar tu presupuesto."
            />
            <ServiceCard
              icon={<Briefcase />}
              title="Excursiones"
              desc="Viajes organizados preestablecidos con recorridos fijos, ideales para conocer múltiples destinos sin estrés."
            />
            <ServiceCard
              icon={<Plane />}
              title="Aéreos y Terrestres"
              desc="Venta de pasajes, traslados privados, giros y encomiendas en Argentina, América y el mundo."
            />
          </div>
        </div>
      </section>

      {/* 5. UBICACIÓN Y CONTACTO (Estilo Original Ordenado) */}
      <section id = "contacto" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Nuestra Casa Matriz</h2>

          {/* CAMBIO 1: Quitamos 'inline-block', ponemos 'block' y 'mx-auto' para que se centre perfecto */}
          <div className="bg-white p-10 rounded-3xl shadow-xl block w-full max-w-4xl relative overflow-hidden mx-auto">

            {/* Decoración (Barra verde) */}
            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>

            {/* CAMBIO 2: Usamos 'justify-center' y un 'gap' específico para que no se vayan a los extremos */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">

              {/* Lado Izquierdo: Dirección */}
              <div className="flex flex-col items-center w-full md:w-auto">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                  <MapPin size={32} />
                </div>
                <h4 className="font-bold text-slate-800 text-lg mb-1">La Oficina</h4>
                <p className="text-slate-600 font-medium">Junín 347, Piso 4 "A"</p>
                <p className="text-slate-500 text-sm mt-1">Ciudad Autónoma de Buenos Aires</p>
                <span className="mt-2 inline-block px-3 py-1 bg-slate-100 text-xs text-slate-500 rounded-full">Centro Comercial</span>
              </div>

              {/* Divisor: Línea vertical en PC, horizontal en móvil */}
              <div className="h-px w-24 bg-slate-200 md:w-px md:h-32"></div>

              {/* Lado Derecho: Contacto */}
              <div className="flex flex-col items-center w-full md:w-auto">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                  <Phone size={32} />
                </div>
                <h4 className="font-bold text-slate-800 text-lg mb-1">Contacto Directo</h4>
                <p className="text-slate-600 font-medium">+54 9 11 6639-9990</p>
                <p className="text-slate-500 text-sm mt-1 mb-3">Atención Personalizada</p>

                {/* CAMBIO 3: Usamos <a> para evitar el error de "exploto" */}
                <a
                  href="https://wa.me/5491166399990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 text-sm font-bold hover:underline cursor-pointer"
                >
                  Contactar por WhatsApp →
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

// Componente pequeño para las tarjetas de servicios (para mantener el código limpio)
function ServiceCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group">
      
      {/* CORRECCIÓN: Quitamos las clases 'transform' de aquí para que no mueva el bloque entero */}
      <div className="text-emerald-500 mb-4">
        
        {/* Y las ponemos AQUÍ, directo en la cajita del icono */}
        <div className="w-10 h-10 flex items-center justify-center bg-emerald-100 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        {desc}
      </p>
    </div>
  )
}