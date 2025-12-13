"use client";

import { Search, X } from "lucide-react";
import { useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; 

// Variable global para manejar el tiempo de espera (debounce)
let searchDebounceTimeout: NodeJS.Timeout | null = null; 

export default function TourSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // Leemos la query actual para inicializar el estado
    const initialQuery = searchParams.get('q') || '';
    const [searchTerm, setSearchTerm] = useState(initialQuery);
    
    // Función que dispara la navegación (filtro) después del debounce
    const triggerSearch = useCallback((term: string) => {
        // Limpiamos el timeout anterior
        if (searchDebounceTimeout) {
            clearTimeout(searchDebounceTimeout);
        }

        // Esperamos 400ms antes de cambiar la URL (esto hace el Live Filter)
        searchDebounceTimeout = setTimeout(() => {
            if (term.trim() === initialQuery) return; // Evita navegar si el texto no cambió

            if (term.trim()) {
                // *** CORRECCIÓN CLAVE: { scroll: false } para evitar el salto de página ***
                router.push(`/tours?q=${encodeURIComponent(term.trim())}`, { scroll: false }); 
            } else {
                router.push(`/tours`, { scroll: false });
            }
        }, 400); 
    }, [router, initialQuery]);
    
    // Función que se activa cuando el usuario escribe
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        // Llamamos al triggerSearch en cada cambio
        triggerSearch(term);
    };

    // Manejar el envío (por si presionan Enter)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Disparamos la búsqueda sin esperar el debounce
        router.push(`/tours?q=${encodeURIComponent(searchTerm.trim())}`, { scroll: false });
        if (searchDebounceTimeout) clearTimeout(searchDebounceTimeout);
    };
    
    // Manejar el botón de limpiar
    const handleClear = () => {
        setSearchTerm('');
        router.push('/tours', { scroll: false });
        if (searchDebounceTimeout) clearTimeout(searchDebounceTimeout);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-30">
            <form onSubmit={handleSubmit} className="relative shadow-xl rounded-full bg-white flex items-center p-2 border border-slate-200">
                
                <input
                    type="text"
                    placeholder="Busca un destino o paquete (ej: Perú, Caribe)"
                    value={searchTerm}
                    onChange={handleChange}
                    className="flex-grow p-3 text-lg rounded-full focus:outline-none focus:ring-0 placeholder-slate-400 text-slate-800"
                />
                
                {/* Botón de Limpiar (X) */}
                {searchTerm && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="text-slate-500 p-2 rounded-full hover:bg-slate-100 transition-colors"
                        aria-label="Limpiar búsqueda"
                    >
                        <X size={20} />
                    </button>
                )}

                {/* Ícono de Búsqueda */}
                <button
                    type="submit"
                    className="bg-emerald-500 text-white p-4 rounded-full hover:bg-emerald-600 transition-colors flex items-center justify-center ml-2"
                    aria-label="Buscar"
                >
                    <Search size={24} />
                </button>
            </form>
        </div>
    );
}