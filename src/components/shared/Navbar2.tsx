"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

export default function Navbar2() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Destinos', href: '/tours' },
        // Cambiado a 'Salidas Grupales' para ser más comercial
        { name: 'Salidas Grupales', href: '/charters' },
        { name: 'Nosotros', href: '/nosotros' },
    ];

    // DEFINICIÓN DE CLASES DINÁMICAS
    const isSolid = !isHome || isScrolled;
    const navBackground = isSolid 
        ? "bg-slate-900 shadow-md border-b border-white/5 py-3" 
        : "bg-slate-900 shadow-md border-b border-white/5 py-3"; 
    
    // Función para abrir WhatsApp con mensaje
    const openWhatsApp = () => {
        const message = "Hola Andina Travel, quisiera cotizar un viaje.";
        window.open(`https://wa.me/5491166399990?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                
                {/* 1. LOGO */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg">
                        <Image 
                            src="/escudoAndinaTravel.png" 
                            alt="Escudo Andina Travel"
                            fill 
                            className="object-contain"
                            priority 
                        />
                    </div>

                    <div className="flex flex-col justify-center -space-y-1">
                        <span className="font-serif font-bold tracking-wide leading-none text-2xl md:text-3xl">
                            <span 
                                className={`text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-amber-400 to-amber-600 drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)] transition-all ${isSolid ? 'drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]' : 'drop-shadow-[0_2px_4px_rgba(0,0,0,1)]'}`}
                            >
                                ANDINA TRAVEL
                            </span>
                        </span>
                        
                        {/* SUBTÍTULO INSTITUCIONAL: Visible siempre, con color de contraste */}
                        {/* En Home/Transparente: Sombra clara. En Scroll/Fondo Negro: Texto claro. */}
                        <span className={`text-[9px] md:text-[10px] font-bold tracking-widest uppercase ml-1 transition-colors duration-300 ${isSolid ? 'text-slate-300' : 'text-white/80 drop-shadow-md'}`}>
                            de Peruvian Reps Leg 14024 Disp. 644
                        </span>
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
                                        ? "text-amber-400 bg-white/10" 
                                        : "text-white hover:bg-white/10 hover:text-amber-300"}
                                `}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </div>

                {/* 3. BOTÓN DE ACCIÓN (Desktop) */}
                <div className="hidden md:flex items-center gap-4">
                    {/* TELÉFONO VISIBLE SIEMPRE PARA UN CONTACTO RÁPIDO */}
                    <div className="text-right hidden lg:block">
                        <span className="block text-[10px] text-slate-400 uppercase font-bold">Ayuda 24/7</span>
                        <span className="block text-xs text-white font-medium flex items-center gap-1">
                            <Phone size={10} className="text-amber-500"/> +54 9 11 6639-9990
                        </span>
                    </div>

                    <button 
                        onClick={openWhatsApp}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white pl-5 pr-4 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 group border border-white/10"
                    >
                        Cotizar
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                    </button>
                </div>

                {/* MENU MOBILE TOGGLE */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-1 hover:bg-white/10 rounded">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE OVERLAY */}
            <div className={`fixed inset-0 bg-slate-900/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {navLinks.map((item) => (
                    <Link 
                        key={item.name} 
                        href={item.href} 
                        onClick={() => setIsOpen(false)}
                        className={`text-3xl font-serif font-bold ${pathname === item.href ? "text-amber-400" : "text-white"}`}
                    >
                        {item.name}
                    </Link>
                ))}
                
                <div className="w-16 h-1 bg-amber-500 rounded-full my-4"></div>

                <button 
                    onClick={() => { setIsOpen(false); openWhatsApp(); }}
                    className="text-white flex items-center gap-2 text-lg font-medium hover:text-emerald-400 transition-colors"
                >
                    <Phone size={20} className="text-amber-400" />
                    +54 9 11 6639-9990 (Cotizar)
                </button>
            </div>
        </nav>
    );
}