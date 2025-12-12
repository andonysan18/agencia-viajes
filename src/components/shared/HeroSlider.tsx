"use client";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Datos de los slides
const slides = [
  {
    id: 1,
    title: "Patagonia Salvaje",
    subtitle: "Argentina & Chile",
    image: "https://images.unsplash.com/photo-1518182170546-0766aa6f6a56?q=80&w=2070",
    color: "bg-blue-600"
  },
  {
    id: 2,
    title: "Caribe Relax",
    subtitle: "Punta Cana",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2064",
    color: "bg-teal-500"
  },
  {
    id: 3,
    title: "Tokio Neón",
    subtitle: "Japón",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974",
    color: "bg-fuchsia-600"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-play (opcional)
  useEffect(() => {
    const timer = setInterval(() => {
        nextSlide();
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* 1. IMAGENES DE FONDO (Renderizamos todas pero ocultamos con opacidad para transición suave) */}
      {slides.map((slide, index) => (
        <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay oscuro */}
            <Image 
                src={slide.image} 
                alt={slide.title} 
                fill 
                className="object-cover"
                priority={index === 0}
            />
        </div>
      ))}

      {/* 2. CONTENIDO TEXTO */}
      <div className="relative z-20 h-full flex flex-col justify-center px-4 md:px-20 max-w-7xl mx-auto">
        <div className="overflow-hidden">
            <p className="text-white/80 uppercase tracking-[0.3em] text-sm mb-4 animate-fade-in">
                {slides[current].subtitle}
            </p>
            <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 transition-all duration-500 transform translate-y-0">
                {slides[current].title}
            </h1>
            <button className={`${slides[current].color} text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform`}>
                Ver Paquete <ArrowRight size={20} />
            </button>
        </div>
      </div>

      {/* 3. CONTROLES DE NAVEGACIÓN */}
      <div className="absolute bottom-10 right-10 z-30 flex gap-4">
        <button onClick={prevSlide} className="bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-black p-4 rounded-full border border-white/30 transition-all">
            <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-black p-4 rounded-full border border-white/30 transition-all">
            <ChevronRight size={24} />
        </button>
      </div>

      {/* 4. INDICADORES (PUNTITOS) */}
      <div className="absolute bottom-10 left-10 z-30 flex gap-3">
        {slides.map((_, idx) => (
            <div 
                key={idx} 
                className={`h-1 rounded-full transition-all duration-300 ${idx === current ? 'w-12 bg-white' : 'w-4 bg-white/40'}`}
            />
        ))}
      </div>

    </section>
  );
}