import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Europa", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2070", colSpan: "md:col-span-2", href: "/tours?q=europa" },
  { name: "Caribe", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2064", colSpan: "md:col-span-1", href: "/tours?q=caribe" },
  { name: "Perú", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070", colSpan: "md:col-span-1", href: "/tours?q=peru" },
  { name: "Patagonia", image: "https://cdn.pixabay.com/photo/2016/10/14/18/31/glacier-1740890_1280.jpg", colSpan: "md:col-span-2", href: "/tours?q=patagonia" },
];

export default function CategoriesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10 text-center">
          Explora por <span className="text-emerald-500">Regiones</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              href={cat.href}
              className={`relative rounded-2xl overflow-hidden group ${cat.colSpan}`}
            >
              <Image 
                src={cat.image} 
                alt={cat.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold uppercase tracking-widest border-2 border-white/30 px-6 py-2 rounded-full backdrop-blur-sm group-hover:bg-white group-hover:text-slate-900 transition-all">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}