import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // 1. Busca en la carpeta APP que está en la RAÍZ
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    
    // 2. Busca en la carpeta SRC (donde tienes components, lib, etc.)
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};
export default config;