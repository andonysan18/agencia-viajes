import Link from "next/link";
import Image from "next/image"; 
import { Mail, Phone, MapPin, Facebook, Instagram, ChevronRight } from "lucide-react"; 

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 text-sm border-t border-slate-800 relative overflow-hidden text-center lg:text-left">
      
      {/* Decoración sutil de fondo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* COLUMNA 1: MARCA + REDES SOCIALES */}
        <div className="flex flex-col items-center lg:items-start">
          <Link href="/" className="flex items-center gap-3 mb-6 group justify-center lg:justify-start">
             <div className="relative w-10 h-10 shrink-0 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg">
               <Image 
                 src="/escudoAndinaTravel.png" 
                 alt="Escudo Andina"
                 fill 
                 className="object-contain"
               />
             </div>
             <div className="flex flex-col justify-center -space-y-0.5 text-left"> 
               <span className="font-serif font-bold tracking-wide leading-none text-xl">
                 <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 via-emerald-400 to-emerald-600 drop-shadow-md filter">
                   ANDINA TRAVEL
                 </span>
               </span>
               <span className="text-[7px] text-slate-500 uppercase tracking-widest mt-0.5 font-bold">
                 de Peruvian Reps Leg 14024 Disp. 644
               </span>
             </div>
          </Link>

          <p className="mb-8 text-slate-400 leading-relaxed max-w-xs mx-auto lg:mx-0">
            Conectamos culturas a través de experiencias inolvidables. Especialistas en turismo receptivo y emisivo.
          </p>

          {/* REDES SOCIALES (Movidas aquí para equilibrar) */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a 
              href="https://www.facebook.com/AndinaTravel1?locale=es_LA" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white transition-all text-emerald-500 border border-slate-700 hover:border-emerald-500 shadow-md group"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://www.instagram.com/andina.travel.argentina/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white transition-all text-emerald-500 border border-slate-700 hover:border-emerald-500 shadow-md group"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* COLUMNA 2: NAVEGACIÓN (NUEVA SECCIÓN) */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-white font-bold uppercase tracking-wider mb-6 flex items-center gap-2 justify-center lg:justify-start w-full">
            <span className="w-8 h-[2px] bg-emerald-500 inline-block"></span>
            Explora
          </h3>
          <ul className="space-y-3 w-full max-w-xs lg:max-w-none">
            {[
              { name: "Inicio", href: "/" },
              { name: "Destinos", href: "/tours" }, // Ajusta la ruta si es distinta
              { name: "Salidas Grupales", href: "/charters" }, // Ajusta la ruta
              { name: "Sobre Nosotros", href: "/nosotros" },
              { name: "Contacto", href: "/nosotros/#contacto" }, // O link a pagina de contacto
            ].map((link) => (
              <li key={link.name} className="flex justify-center lg:justify-start">
                <Link 
                  href={link.href} 
                  className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  <ChevronRight size={14} className="text-slate-600 group-hover:text-emerald-500 transition-colors" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMNA 3: OFICINA BUENOS AIRES */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-white font-bold uppercase tracking-wider mb-6 flex items-center gap-2 justify-center lg:justify-start w-full">
            <span className="w-8 h-[2px] bg-emerald-500 inline-block"></span>
            Argentina 🇦🇷
          </h3>
          <ul className="space-y-4 w-full">
            <li className="flex items-start gap-3 group justify-center lg:justify-start">
              <MapPin size={18} className="text-emerald-500 shrink-0 mt-0.5 group-hover:text-white transition-colors" />
              <span className="group-hover:text-white transition-colors">
                Junín 347 Piso 4 "A" <br/> 
                <span className="text-xs text-slate-500">Buenos Aires</span>
              </span>
            </li>
            <li className="flex items-center gap-3 group justify-center lg:justify-start">
              <Phone size={18} className="text-emerald-500 shrink-0 group-hover:text-white transition-colors" />
              <span className="group-hover:text-white transition-colors">+54 9 11 6639-9990</span>
            </li>
            <li className="flex items-center gap-3 group justify-center lg:justify-start">
              <Mail size={18} className="text-emerald-500 shrink-0 group-hover:text-white transition-colors" />
              <a href="mailto:reservas@andinatravel.tur.ar" className="hover:text-white transition-colors">
                reservas@andinatravel.tur.ar
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMNA 4: OFICINA LIMA */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-white font-bold uppercase tracking-wider mb-6 flex items-center gap-2 justify-center lg:justify-start w-full">
            <span className="w-8 h-[2px] bg-emerald-500 inline-block"></span>
            Perú 🇵🇪
          </h3>
          <ul className="space-y-4 w-full">
            <li className="flex items-start gap-3 group justify-center lg:justify-start">
              <MapPin size={18} className="text-emerald-500 shrink-0 mt-0.5 group-hover:text-white transition-colors" />
              <span className="group-hover:text-white transition-colors">
                Avenida Arenales 656 <br/> 
                <span className="text-xs text-slate-500">Lima</span>
              </span>
            </li>
            <li className="flex items-center gap-3 group justify-center lg:justify-start">
              <Phone size={18} className="text-emerald-500 shrink-0 group-hover:text-white transition-colors" />
              <span className="group-hover:text-white transition-colors">+51 957 107 035</span>
            </li>
          </ul>
        </div>

      </div>
      
      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} Andina Travel. Todos los derechos reservados.
        </p>
        {/* <div className="flex gap-6 text-xs text-slate-600 font-medium">
           <Link href="#" className="hover:text-emerald-500 transition-colors">Términos y Condiciones</Link>
           <Link href="#" className="hover:text-emerald-500 transition-colors">Política de Privacidad</Link>
        </div> */}
      </div>
    </footer>
  );
}