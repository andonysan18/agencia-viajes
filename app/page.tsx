
import Hero from "@/src/components/shared/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Sección temporal para hacer scroll y ver el efecto sticky del navbar */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Destinos Populares</h2>
        <p className="text-gray-600">Aquí cargaremos los paquetes desde la base de datos pronto...</p>
        <div className="h-[800px]"></div> {/* Espacio vacío para probar scroll */}
      </section>
    </div>
  );
}