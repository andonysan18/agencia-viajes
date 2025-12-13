"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Plane, Phone, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Detectamos si estamos en el Home para cambiar el comportamiento
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Destinos', href: '/tours' },
    { name: 'Salidas Grupales', href: '/charters' },
    { name: 'Nosotros', href: '/nosotros' },
  ];

  // LÓGICA DE ESTILOS 🎨
  // Si NO es home, o si YA scrolleamos: Fondo oscuro sólido.
  // Si es home Y no scrolleamos: Transparente.
  const navBackground = !isHome || isScrolled 
    ? "bg-slate-900 shadow-md border-b border-white/5 py-4" 
    : "bg-transparent py-6";

  const textColor = "text-white"; // Siempre blanco porque el fondo siempre será oscuro (o foto oscura)

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* 1. LOGO + MARCA */}
        <Link href="/" className="flex items-center gap-2 group">
           <div className={`p-2 rounded-lg transition-colors ${!isHome || isScrolled ? "bg-emerald-500/10" : "bg-white/10"}`}>
             <Plane className={`transition-transform duration-500 group-hover:-rotate-12 ${!isHome || isScrolled ? "text-emerald-400" : "text-white"}`} size={24} />
           </div>
           <div className="flex flex-col">
             <span className={`text-xl font-serif font-bold tracking-wide leading-none ${textColor}`}>
               Andina<span className="text-emerald-400">Travel</span>
             </span>
             {/* Slogan pequeñito que aparece cuando el navbar es sólido */}
             {(!isHome || isScrolled) && (
               <span className="text-[10px] text-slate-400 tracking-widest uppercase hidden md:block">
                 Viajes & Turismo
               </span>
             )}
           </div>
        </Link>

        {/* 2. MENU DESKTOP */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`
                  px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all
                  ${isActive 
                    ? "text-emerald-400 bg-white/5" 
                    : "text-slate-300 hover:text-white hover:bg-white/5"}
                `}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* 3. BOTÓN DE ACCIÓN (WhatsApp) */}
        <div className="hidden md:flex items-center gap-4">
           {/* Teléfono visible solo en navbar sólido para generar confianza rápida */}
           {(!isHome || isScrolled) && (
             <div className="text-right hidden lg:block">
               <span className="block text-[10px] text-slate-500 uppercase font-bold">Ayuda 24/7</span>
               <span className="block text-xs text-white font-medium flex items-center gap-1">
                 <Phone size={10} className="text-emerald-500"/> +54 9 11 6639-9990
               </span>
             </div>
           )}

           <button 
             onClick={() => window.open("https://wa.me/5491166399990", "_blank")}
             className="bg-emerald-500 hover:bg-emerald-600 text-white pl-5 pr-4 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 group"
           >
             Cotizar
             <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
           </button>
        </div>

        {/* MENU MOBILE BOTÓN */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-1">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU (Full Screen Overlay) */}
      <div className={`fixed inset-0 bg-slate-900/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
         {navLinks.map((item) => (
           <Link 
             key={item.name} 
             href={item.href} 
             onClick={() => setIsOpen(false)}
             className={`text-3xl font-serif font-bold ${pathname === item.href ? "text-emerald-400" : "text-white"}`}
           >
             {item.name}
           </Link>
         ))}
         
         <div className="w-16 h-1 bg-emerald-500 rounded-full my-4"></div>

         <button 
            onClick={() => { setIsOpen(false); window.open("https://wa.me/5491166399990", "_blank"); }}
            className="text-white flex items-center gap-2 text-lg font-medium"
         >
            <Phone size={20} className="text-emerald-400" />
            +54 9 11 6639-9990
         </button>
      </div>
    </nav>
  );
}