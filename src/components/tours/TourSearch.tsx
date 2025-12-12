"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

export default function TourSearch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Inicializamos con lo que ya esté en la URL (por si recargas la página)
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Actualizamos la URL sin recargar la página
    if (searchTerm.trim()) {
      router.push(`/tours?q=${encodeURIComponent(searchTerm)}`);
    } else {
      router.push("/tours"); // Si borra todo, volvemos a mostrar todo
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10 mb-12">
      <form 
        onSubmit={handleSearch}
        className="bg-white p-4 rounded-2xl shadow-xl flex gap-4 items-center border border-slate-100"
      >
         <Search className="text-slate-400 ml-2" />
         <input 
           type="text" 
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
           placeholder="¿A dónde quieres ir? (Ej: Europa, Japón...)" 
           className="w-full outline-none text-slate-700 font-medium placeholder:text-slate-400"
         />
         <button 
           type="submit"
           className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition"
         >
           Buscar
         </button>
      </form>
    </div>
  );
}