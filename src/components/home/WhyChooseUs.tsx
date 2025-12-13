import { ShieldCheck, MapPin, CreditCard, Headset } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={40} className="text-emerald-500" />,
    title: "Agencia Oficial IATA",
    desc: "Seguridad garantizada. Operamos bajo todas las normativas de turismo internacional."
  },
  {
    icon: <MapPin size={40} className="text-emerald-500" />,
    title: "Presencia Binacional",
    desc: "Oficinas físicas en Buenos Aires y Lima para asistirte antes y durante tu viaje."
  },
  {
    icon: <CreditCard size={40} className="text-emerald-500" />,
    title: "Pagos Flexibles",
    desc: "Financiación a tu medida. Aceptamos tarjetas, transferencias y pagos en dólares."
  },
  {
    icon: <Headset size={40} className="text-emerald-500" />,
    title: "Soporte 24/7",
    desc: "No eres un número. Te acompañamos vía WhatsApp o teléfono ante cualquier imprevisto."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100">
              <div className="mb-4 bg-emerald-50 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}