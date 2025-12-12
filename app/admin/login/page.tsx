"use client";

import { useFormState, useFormStatus } from "react-dom";
import { login } from "@/src/actions/login";
import { Plane, Lock, User, Loader2 } from "lucide-react";

const initialState = {
  success: false,
  message: "",
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      disabled={pending}
      // Ajuste visual: Botón un poco más compacto (py-3 en vez de py-4)
      className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-900/20 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 text-sm"
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin" size={18} /> Entrando...
        </>
      ) : (
        "Iniciar Sesión"
      )}
    </button>
  );
}

export default function LoginPage() {
  // @ts-ignore
  const [state, formAction] = useFormState(login, initialState);

  return (
    // CAMBIO 1: Agregamos 'pt-32' para separarlo mucho más del techo (Navbar)
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 pt-30">
      
      {/* CAMBIO 2: 'max-w-sm' lo hace más angosto y 'rounded-2xl' un poco menos redondo */}
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden">
        
        {/* HEADER MÁS COMPACTO */}
        <div className="bg-emerald-600 p-6 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
           <div className="relative z-10 flex flex-col items-center">
             <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md mb-3">
               <Plane className="text-white" size={24} />
             </div>
             <h1 className="text-xl font-bold text-white font-serif">Panel Admin</h1>
           </div>
        </div>

        {/* FORMULARIO MÁS COMPACTO (p-6 en vez de p-8) */}
        <form action={formAction} className="p-6 space-y-5">
          
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide ml-1">Usuario</label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 text-slate-400" size={18} />
              {/* Inputs más delgados (py-2.5) */}
              <input 
                name="user" 
                type="text" 
                required
                placeholder="Usuario"
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm text-slate-900"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide ml-1">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-slate-400" size={18} />
              <input 
                name="password" 
                type="password" 
                required
                placeholder="••••••••"
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm text-slate-900"
              />
            </div>
          </div>

          {state?.message && (
            <div className="bg-red-50 text-red-600 text-xs p-3 rounded-lg flex items-center gap-2 animate-in fade-in">
               <span className="font-bold">Error:</span> {state.message}
            </div>
          )}

          <LoginButton />

          <p className="text-center text-[10px] text-slate-400 mt-2">
            Solo personal autorizado
          </p>
        </form>
      </div>
    </div>
  );
}