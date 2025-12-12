"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";

export default function NavbarTransparent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detectar scroll para cambiar el color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-900/90 backdrop-blur-md py-4 shadow-lg" // Estado Scroll (Oscuro y sólido)
          : "bg-transparent py-6" // Estado Inicial (Transparente)
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO: Siempre blanco en modo Dark Luxury */}
        <Link href="/" className="text-2xl font-serif font-bold text-white tracking-wide z-50">
          Andina<span className="text-amber-500">.</span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center space-x-8">
          {['Destinos', 'Experiencias', 'Charters', 'Nosotros'].map((item) => (
            <Link 
              key={item}
              href={`/${item.toLowerCase()}`} 
              className="text-sm font-medium text-white/80 hover:text-white hover:underline decoration-amber-500 underline-offset-4 transition-all uppercase tracking-widest"
            >
              {item}
            </Link>
          ))}
          
          <button className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
             isScrolled 
               ? "bg-amber-500 text-black hover:bg-white" 
               : "bg-white text-black hover:bg-amber-500 hover:text-white"
          }`}>
            Reservar
          </button>
        </div>

        {/* MENU MOBILE TOGGLE */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white z-50 p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* MOBILE MENU FULLSCREEN OVERLAY */}
        <div className={`fixed inset-0 bg-slate-950 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <Link href="/destinos" className="text-3xl font-serif text-white hover:text-amber-500">Destinos</Link>
            <Link href="/charters" className="text-3xl font-serif text-white hover:text-amber-500">Charters</Link>
            <Link href="/contacto" className="text-3xl font-serif text-white hover:text-amber-500">Contacto</Link>
        </div>

      </div>
    </nav>
  );
}