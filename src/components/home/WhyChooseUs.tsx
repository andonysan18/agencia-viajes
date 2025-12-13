import { MapPin, CreditCard, Headset } from "lucide-react";

const features = [
  {
    icon: <MapPin size={32} className="text-emerald-600" />,
    title: "Presencia Binacional",
    desc: "Oficinas físicas en Buenos Aires y Lima para asistirte antes y durante tu viaje."
  },
  {
    icon: <CreditCard size={32} className="text-emerald-600" />,
    title: "Pagos Flexibles",
    desc: "Financiación a tu medida. Aceptamos tarjetas, transferencias y pagos en dólares."
  },
  {
    icon: <Headset size={32} className="text-emerald-600" />,
    title: "Soporte 24/7",
    desc: "No eres un número. Te acompañamos vía WhatsApp o teléfono ante cualquier imprevisto."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* (Opcional) Un fondo decorativo muy sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.png')] opacity-[0.03]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Título de la sección (Opcional, pero queda bien) */}
        <div className="text-center mb-12">
          <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-2 block">
            Tu tranquilidad es primero
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            ¿Por qué viajar con <span className="text-emerald-500">nosotros?</span>
          </h2>
        </div>

        {/* GRILLA CORREGIDA PARA 3 ELEMENTOS:
           - grid-cols-1: En celular (1 columna)
           - md:grid-cols-3: En tablet y PC (3 columnas exactas)
           - gap-8: Espacio entre tarjetas
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-100 transform hover:-translate-y-1 flex flex-col items-center text-center"
            >
              {/* Círculo del Ícono con efecto */}
              <div className="mb-6 w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                {/* El ícono cambia a blanco al pasar el mouse */}
                <div className="text-emerald-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}