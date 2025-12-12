"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe, User } from "lucide-react";

export default function NavbarFloating() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full px-6 py-3 w-full max-w-5xl flex items-center justify-between transition-all hover:bg-white">
        
        {/* 1. Logo Simple */}
        <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-1 text-slate-800">
          Andina<span className="text-emerald-500">.</span>
        </Link>

        {/* 2. Links Centrales (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/explorar" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition">Explorar</Link>
          <Link href="/vuelos" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition">Vuelos</Link>
          <Link href="/paquetes" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition">Paquetes</Link>
          <Link href="/ofertas" className="text-sm font-bold text-rose-500 bg-rose-50 px-3 py-1 rounded-full">Ofertas 🔥</Link>
        </div>

        {/* 3. Iconos Derecha */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600 hidden sm:block">
            <Globe size={20} />
          </button>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition flex items-center gap-2">
            <User size={16} />
            <span>Login</span>
          </button>
          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-800">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Menú Mobile Desplegable */}
      {isOpen && (
        <div className="absolute top-20 w-[90%] bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-4 border border-slate-100 md:hidden">
            <Link href="/explorar" className="p-2 hover:bg-slate-50 rounded-lg font-medium text-slate-700">Explorar</Link>
            <Link href="/paquetes" className="p-2 hover:bg-slate-50 rounded-lg font-medium text-slate-700">Paquetes</Link>
            <Link href="/ofertas" className="p-2 hover:bg-slate-50 rounded-lg font-medium text-rose-500">Ofertas Especiales</Link>
        </div>
      )}
    </div>
  );
}