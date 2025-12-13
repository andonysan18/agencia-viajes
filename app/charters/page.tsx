import { getCharters } from "@/src/actions/get-charters";
import CharterCard from "@/src/components/charters/charter-card";

export default async function ChartersPage() {
  const charters = await getCharters();

  return (
    // 1. Cambiamos 'main' por 'div' (porque ya tienes un main en layout.tsx)
    // 2. Usamos 'style' directo. 150px es espacio de sobra.
    <div 
      className="min-h-screen bg-slate-50 pb-20"
      style={{ paddingTop: '110px' }} 
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="mb-12 text-center animate-fade-in-up">
          <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-3 block">
            Oportunidades Únicas
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Salidas Grupales y <span className="text-emerald-500">Vuelos Exclusivos</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Paquetes con aéreo incluido, fechas fijas y los mejores precios del mercado. 
          </p>
        </div>

        {/* GRILLA */}
        {charters.length > 0 ? (
          <div className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
            ${charters.length <= 2 ? 'max-w-4xl mx-auto justify-center' : ''}
          `}>
            {charters.map((charter) => (
              <CharterCard key={charter.id} data={charter} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100 max-w-2xl mx-auto text-center px-4">
             <p className="text-slate-500 mb-6">
                No hay salidas disponibles por el momento.
             </p>
          </div>
        )}
        
      </div>
    </div>
  );
}