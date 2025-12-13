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
      colors: {
        // PALETA DORADA PREMIUM (emerald personalizado)
        emerald: {
          50: '#fdfce8',
          100: '#fcf9c3',
          200: '#fae98a',
          300: '#f7d346',
          400: '#eab308',
          500: '#D4AF37', // Dorado Clásico Principal
          600: '#b38b22',
          700: '#8f6818',
          800: '#76531a',
          900: '#634518',
          950: '#3a260b',
        },
        andina: {
          50: '#ecfdf5',  // Fondos muy claritos
          100: '#d1fae5', // Fondos suaves
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // El color principal vibrante
          600: '#059669', // Para hover y textos
          700: '#047857',
          800: '#065f46', // Textos oscuros
          900: '#064e3b', // Fondos muy oscuros
          950: '#022c22',
        },
        // IMPORTANTE: Esto EXTIENDE slate, no lo reemplaza
        slate: {
          // Mantiene todos los colores originales de slate (50-700)
          // Solo agregamos/sobrescribimos estos:
          800: '#1e293b',
          900: '#0F172A', // Azul Marino Profundo
        },
      },
      fontFamily: {
        serif: ['var(--font-merriweather)', 'serif'],
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(212, 175, 55, 0.39)',
      },
      // Agregamos screens personalizados si los necesitás
      screens: {
        'xs': '475px',
        // Los demás (sm, md, lg, xl, 2xl) ya existen por defecto
      },
    },
  },
  plugins: [],
};

export default config;