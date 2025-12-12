"use client"; // Necesario para el menú móvil interactivo

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Plane } from "lucide-react"; // Iconos

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* 1. LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:bg-blue-700 transition-colors">
              <Plane size={24} />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Andina<span className="text-blue-600">Travel</span>
            </span>
          </Link>

          {/* 2. MENU ESCRITORIO (Hidden en mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/paquetes" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Paquetes
            </Link>
            <Link href="/charters" className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-1">
              Charters
              <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-bold">HOT</span>
            </Link>
            <Link href="/nosotros" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Nosotros
            </Link>
            
            <button className="bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg shadow-gray-900/20">
              <Phone size={18} />
              <span>Contactar</span>
            </button>
          </div>

          {/* 3. BOTON HAMBURGUESA (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. DESPLEGABLE MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/paquetes" className="text-gray-600 font-medium p-2 hover:bg-gray-50 rounded-lg">Paquetes</Link>
            <Link href="/charters" className="text-gray-600 font-medium p-2 hover:bg-gray-50 rounded-lg">Charters</Link>
            <Link href="/nosotros" className="text-gray-600 font-medium p-2 hover:bg-gray-50 rounded-lg">Nosotros</Link>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
              WhatsApp Directo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}