import Link from "next/link";
import { Plane, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* COLUMNA 1: MARCA */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 group">
             <div className="bg-emerald-500 p-2 rounded-lg text-white">
               <Plane size={20} />
             </div>
             <span className="text-2xl font-serif font-bold text-white">
               Andina<span className="text-emerald-500">.</span>
             </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Expertos en crear recuerdos inolvidables. Charters exclusivos, atención personalizada y los mejores destinos del mundo a tu alcance.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="hover:text-emerald-400 transition"><Instagram size={20}/></a>
            <a href="#" className="hover:text-emerald-400 transition"><Facebook size={20}/></a>
            <a href="#" className="hover:text-emerald-400 transition"><Twitter size={20}/></a>
          </div>
        </div>

        {/* COLUMNA 2: EXPLORAR */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Explorar</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/tours" className="hover:text-emerald-400 transition">Todos los Destinos</Link></li>
            <li><Link href="/charters" className="hover:text-emerald-400 transition">Charters & Ofertas</Link></li>
            <li><Link href="/nosotros" className="hover:text-emerald-400 transition">Sobre Nosotros</Link></li>
            <li><Link href="/blog" className="hover:text-emerald-400 transition">Blog de Viajes</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3: LEGAL */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Legales</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/terminos" className="hover:text-emerald-400 transition">Términos y Condiciones</Link></li>
            <li><Link href="/privacidad" className="hover:text-emerald-400 transition">Política de Privacidad</Link></li>
            <li><Link href="/seguros" className="hover:text-emerald-400 transition">Seguros de Viaje</Link></li>
            <li><Link href="/cancelaciones" className="hover:text-emerald-400 transition">Política de Cancelación</Link></li>
          </ul>
        </div>

        {/* COLUMNA 4: CONTACTO */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Contacto</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-emerald-500 mt-1" size={18} />
              <span>Av. Corrientes 1234, Piso 5<br/>Buenos Aires, Argentina</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-emerald-500" size={18} />
              <span>+54 11 1234-5678</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-emerald-500" size={18} />
              <span>reservas@andinatravel.com</span>
            </li>
          </ul>
        </div>

      </div>
      
      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Andina Travel EVT. Todos los derechos reservados.
      </div>
    </footer>
  );
}