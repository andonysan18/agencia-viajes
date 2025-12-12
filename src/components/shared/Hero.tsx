import { Search, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

export default function HeroModern() {
  return (
    <section className="relative pt-20 lg:pt-0 min-h-[90vh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
          
          {/* COLUMNA IZQUIERDA: Texto y Buscador */}
          <div className="z-10 py-12 lg:py-0 flex flex-col justify-center">
            <span className="text-orange-700 font-bold tracking-widest uppercase text-xs mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-orange-700"></span>
              Experiencias Premium
            </span>
            
            {/* Uso de la fuente serif para el título principal */}
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8">
              El arte de viajar <br/>
              <span className="text-orange-700 italic">reinventado.</span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-12 max-w-md leading-relaxed">
              Acceso exclusivo a charters privados y destinos exóticos. Curamos cada detalle de tu próxima gran aventura.
            </p>

            {/* EL BUSCADOR MODERNO (Tipo tarjeta flotante) */}
            <div className="bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.07)] border border-gray-100 max-w-lg">
              <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-4 items-center">
                {/* Input Destino */}
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl border-2 border-transparent focus-within:border-orange-200 focus-within:bg-white transition-all">
                  <MapPin className="text-orange-700" size={20} />
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Destino</label>
                    <input type="text" placeholder="¿Dónde sueñas ir?" className="bg-transparent outline-none text-gray-900 placeholder-gray-400 font-medium w-full text-sm" />
                  </div>
                </div>
                 {/* Input Fecha */}
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl border-2 border-transparent focus-within:border-orange-200 focus-within:bg-white transition-all">
                  <Calendar className="text-orange-700" size={20} />
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Cuándo</label>
                    <input type="text" placeholder="Añadir fechas" className="bg-transparent outline-none text-gray-900 placeholder-gray-400 font-medium w-full text-sm" />
                  </div>
                </div>
                {/* Botón Buscar */}
                <button className="bg-gray-900 hover:bg-orange-700 text-white p-5 rounded-xl transition-colors flex items-center justify-center shadow-lg w-full md:w-auto">
                  <Search size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Imagen Gigante */}
          {/* En mobile la ocultamos o la ponemos debajo, en desktop ocupa la mitad derecha */}
          <div className="hidden lg:block absolute right-0 top-0 h-full w-[45%] overflow-hidden rounded-l-[3rem]">
             <Image 
                src="https://images.unsplash.com/photo-1542259009408-8638c28bb50d?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury travel"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                priority
             />
             {/* Un overlay degradado sutil para que no sea tan brillante */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
}