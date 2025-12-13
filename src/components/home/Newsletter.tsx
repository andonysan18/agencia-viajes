"use client";
import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          ¿No encuentras lo que buscas?
        </h2>
        <p className="text-slate-300 mb-8 text-lg">
          Suscríbete a nuestro club de viajeros. Recibe ofertas de <b>Charters</b> de último minuto y descuentos exclusivos directamente en tu mail.
        </p>

        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="flex-1 px-6 py-4 rounded-full outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
          />
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
            <span>Suscribirme</span>
            <Send size={18} />
          </button>
        </form>
        
        <p className="text-xs text-slate-500 mt-4">
          Sin spam. Puedes darte de baja cuando quieras.
        </p>
      </div>
    </section>
  );
}