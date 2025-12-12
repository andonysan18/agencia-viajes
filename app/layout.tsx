import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andina Travel",
  description: "Agencia de viajes experta en charters y turismo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar /> {/* <--- NAVBAR AQUI ARRIBA */}
        <main>{children}</main>
      </body>
    </html>
  );
}