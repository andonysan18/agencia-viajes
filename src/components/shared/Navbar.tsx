"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Plane } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // DEFINIMOS LOS LINKS MANUALMENTE PARA QUE FUNCIONEN 🔗
  const navLinks = [
    { name: 'Destinos', href: '/tours' }, // Ahora lleva al catálogo real
    { name: 'Paquetes', href: '/tours' }, // También lleva al catálogo
    { name: 'Charters', href: '/tours?q=charter' }, // Truquito: busca la palabra "charter"
    { name: 'Nosotros', href: '/nosotros' } // Este dará 404 hasta que lo creemos
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/95 backdrop-blur-sm py-4 shadow-md" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
           <div className="bg-white/10 p-2 rounded-lg backdrop-blur-md group-hover:bg-emerald-500 transition-colors">
             <Plane className="text-white" size={20} />
           </div>
           <span className="text-xl font-serif font-bold text-white tracking-wide">
             Andina<span className="text-emerald-400">Travel</span>
           </span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-white/90 hover:text-emerald-400 transition-colors uppercase tracking-widest">
              {item.name}
            </Link>
          ))}
          <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-emerald-400 hover:text-white transition-all">
            Cotizar Viaje
          </button>
        </div>

        {/* MENU MOBILE (Botón Hamburguesa) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-4 flex flex-col gap-4 shadow-xl">
           {navLinks.map((item) => (
             <Link 
               key={item.name} 
               href={item.href} 
               onClick={() => setIsOpen(false)} // Cerramos menú al hacer clic
               className="text-white text-lg hover:text-emerald-400"
             >
               {item.name}
             </Link>
           ))}
        </div>
      )}
    </nav>
  );
}