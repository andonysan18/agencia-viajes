import { Search, MapPin, Calendar, Users } from "lucide-react";

export default function HeroSearch() {
  return (
    <section className="bg-white min-h-[90vh] flex flex-col justify-center items-center px-4 relative overflow-hidden">
      
      {/* Fondo sutil (Patrón de mapa o puntos) */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
          ¿A dónde te llevarán <br/> tus pies hoy?
        </h1>
        <p className="text-slate-500 text-xl">
          Precios honestos. Sin comisiones ocultas. Solo viajes reales.
        </p>
      </div>

      {/* LA BARRA DE BÚSQUEDA GIGANTE */}
      <div className="bg-white p-4 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 w-full max-w-5xl relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            {/* Input 1 */}
            <div className="px-4 py-2 hover:bg-slate-50 rounded-xl transition cursor-pointer group">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1 group-hover:text-blue-600">Destino</label>
                <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-slate-400" />
                    <input type="text" placeholder="Explorar destinos" className="w-full outline-none bg-transparent font-medium text-slate-900" />
                </div>
            </div>

            {/* Input 2 */}
            <div className="px-4 py-2 hover:bg-slate-50 rounded-xl transition cursor-pointer group">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1 group-hover:text-blue-600">Entrada</label>
                <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-slate-400" />
                    <input type="text" placeholder="Añadir fecha" className="w-full outline-none bg-transparent font-medium text-slate-900" />
                </div>
            </div>

            {/* Input 3 */}
            <div className="px-4 py-2 hover:bg-slate-50 rounded-xl transition cursor-pointer group">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1 group-hover:text-blue-600">Viajeros</label>
                <div className="flex items-center gap-2">
                    <Users size={18} className="text-slate-400" />
                    <input type="text" placeholder="¿Cuántos van?" className="w-full outline-none bg-transparent font-medium text-slate-900" />
                </div>
            </div>

            {/* Botón */}
            <div className="pl-4 flex items-center justify-center">
                <button className="w-full h-full min-h-[60px] bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2">
                    <Search size={22} /> Buscar
                </button>
            </div>
        </div>
      </div>

      {/* Pill de Ofertas debajo */}
      <div className="mt-8 flex gap-4 overflow-x-auto max-w-full pb-4">
        {['Vuelos Baratos', 'Hoteles 5 Estrellas', 'Escapadas Fin de Semana', 'Disney'].map((tag) => (
            <span key={tag} className="whitespace-nowrap px-4 py-2 rounded-full border border-slate-200 text-slate-600 text-sm font-medium hover:border-blue-600 hover:text-blue-600 cursor-pointer transition">
                {tag}
            </span>
        ))}
      </div>

    </section>
  );
}