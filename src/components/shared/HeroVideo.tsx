import { Search, ChevronDown } from "lucide-react";

export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* 1. EL VIDEO DE FONDO */}
      {/* Nota: Para probarlo, descarga un video corto de Pexels.com y ponlo en public/hero.mp4 */}
      {/* Si no tienes video, usa esta imagen de placeholder mientras */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-black/40 z-10" /> {/* Filtro oscuro vital para leer texto */}
         <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            // src="/hero.mp4" <--- Descomenta esto cuando tengas tu video
            poster="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop" // Imagen de carga
         >
             {/* Fallback por si no tienes video aun, borra esto cuando pongas el src arriba */}
             <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4" type="video/mp4" />
         </video>
      </div>

      {/* 2. EL CONTENIDO CENTRAL */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-[-50px]">
        <h2 className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-6 animate-fade-in-up">
          Explora lo inexplorado
        </h2>
        
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
          Tu Mundo, <br/>
          <span className="italic font-serif">Sin Fronteras.</span>
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Creamos itinerarios artesanales para viajeros que buscan más que un destino.
        </p>

        {/* 3. BUSCADOR GLASSMORPHISM (Vidrio Esmerilado) */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full max-w-3xl mx-auto flex items-center shadow-2xl">
          <div className="flex-1 px-6 border-r border-white/20 hidden md:block text-left">
            <span className="block text-[10px] text-gray-300 font-bold uppercase tracking-wider">Destino</span>
            <input type="text" placeholder="¿Europa, Asia...?" className="bg-transparent outline-none text-white placeholder-gray-400 w-full" />
          </div>
          <div className="flex-1 px-6 hidden md:block text-left">
            <span className="block text-[10px] text-gray-300 font-bold uppercase tracking-wider">Fechas</span>
            <input type="text" placeholder="¿Cuándo viajas?" className="bg-transparent outline-none text-white placeholder-gray-400 w-full" />
          </div>
          <button className="bg-white text-black hover:bg-emerald-400 transition-colors px-8 py-4 rounded-full font-bold flex items-center gap-2">
            <Search size={18} />
            <span>Buscar</span>
          </button>
        </div>
      </div>

      {/* 4. INDICADOR DE SCROLL */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce flex flex-col items-center gap-2 opacity-70">
        <span className="text-xs uppercase tracking-widest">Descubre más</span>
        <ChevronDown size={24} />
      </div>

    </section>
  );
}