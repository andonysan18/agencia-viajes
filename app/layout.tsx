import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/src/components/shared/Navbar";
import Footer from "@/src/components/shared/Footer";
import FloatingWhatsApp from "@/src/components/ui/FloatingWhatsApp";
import Navbar2 from "@/src/components/shared/Navbar2";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "Andina Travel | Viajes & Turismo",
  description: "Especialistas en turismo receptivo y emisivo en Argentina y Perú.",
  icons: {
    icon: "/escudoAndinaTravel.png", 
    apple: "/escudoAndinaTravel.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      {/* CORRECCIÓN: Usamos backticks (``) aquí, no comillas dobles ("") */}
      <body className={`${inter.className} font-sans bg-slate-50 antialiased`}>
        <Navbar />
        <main>{children}</main>
        <FloatingWhatsApp />
        <Footer/>
      </body>
    </html>
  );
}