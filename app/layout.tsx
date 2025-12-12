import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Importamos Serif y Sans
import "./globals.css";
import Navbar from "@/src/components/shared/Navbar"; // <--- Navbar Global
import Footer from "@/src/components/shared/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "Andina Travel",
  description: "Agencia de viajes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-slate-50 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}