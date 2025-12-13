import { getCharters } from "@/src/actions/get-charters"; // Importamos la lógica del paso 1
import CharterCard from "@/src/components/charters/charter-card"; // Importamos el componente del paso 2

// Esto es un Server Component (por defecto en App Router)
export default async function ChartersPage() {
  const charters = await getCharters();

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* ENCABEZADO */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">
            Salidas <span className="text-emerald-500">Grupales</span> y Charters
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Paquetes con aéreo incluido, fechas fijas y los mejores precios del mercado. 
            ¡Reserva tu lugar antes de que se agoten!
          </p>
        </div>

        {/* GRILLA DE CHARTERS */}
        {charters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {charters.map((charter) => (
              <CharterCard key={charter.id} data={charter} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-slate-500">No hay salidas programadas por el momento.</p>
          </div>
        )}
        
      </div>
    </main>
  );
}