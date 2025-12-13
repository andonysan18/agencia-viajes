"use client";

import { useState } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { createBooking } from "@/src/actions/create-booking";
import React from "react"; // Asegúrate de importar React si no lo está haciendo automáticamente

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    departure: {
        id: string;
        date: string;
        price: number;
    };
    tourTitle: string;
}

export default function BookingModal({ isOpen, onClose, departure, tourTitle }: BookingModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [passengers, setPassengers] = useState(1);

    if (!isOpen) return null;

    // *****************************************************************
    // CORRECCIÓN APLICADA AQUÍ: Se cambió FormFormEvent por FormEvent
    // *****************************************************************
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.currentTarget);
        // Agregamos datos ocultos que no llenó el usuario
        formData.append("departureId", departure.id);
        formData.append("totalPrice", (departure.price * passengers).toString());

        const result = await createBooking(formData);

        setIsSubmitting(false);

        if (result.success) {
            setIsSuccess(true);
        } else {
            alert("Error: " + result.message);
        }
    }

    // Estilo para el input base (corregido)
    const inputClasses = "w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition text-slate-900"; 
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative">
                
                {/* Botón cerrar */}
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
                    <X size={24} />
                </button>

                {isSuccess ? (
                    // VISTA DE ÉXITO
                    <div className="p-12 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Solicitud Enviada!</h3>
                        <p className="text-slate-600 mb-8">
                            Hemos recibido tu solicitud para <strong>{tourTitle}</strong>. Un agente te contactará pronto al WhatsApp para finalizar el pago.
                        </p>
                        <button 
                            onClick={onClose}
                            className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition"
                        >
                            Entendido
                        </button>
                    </div>
                ) : (
                    // VISTA DE FORMULARIO
                    <div className="p-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">Confirmar Reserva</h3>
                        <p className="text-sm text-slate-500 mb-6">
                            Salida: {departure.date} • USD {departure.price} x persona
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Nombre Completo</label>
                                <input 
                                    required 
                                    name="name" 
                                    type="text" 
                                    placeholder="Ej: Juan Pérez" 
                                    className={inputClasses} 
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                                <input 
                                    required 
                                    name="email" 
                                    type="email" 
                                    placeholder="juan@gmail.com" 
                                    className={inputClasses} 
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Teléfono / WhatsApp</label>
                                <input 
                                    required 
                                    name="phone" 
                                    type="tel" 
                                    placeholder="+54 11 ..." 
                                    className={inputClasses} 
                                />
                            </div>

                            <div className="flex gap-4">
                                <div className="w-1/3">
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Pasajeros</label>
                                    <input 
                                        required 
                                        name="passengers" 
                                        type="number" 
                                        min="1" 
                                        max="10" 
                                        value={passengers}
                                        onChange={(e) => setPassengers(Number(e.target.value))}
                                        className={inputClasses} 
                                    />
                                </div>
                                <div className="w-2/3">
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Total Estimado</label>
                                    <div className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-bold">
                                        USD {(departure.price * passengers).toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition flex items-center justify-center gap-2 mt-4"
                            >
                                {isSubmitting ? (
                                    <> <Loader2 className="animate-spin" /> Procesando... </>
                                ) : (
                                    "Enviar Solicitud"
                                )}
                            </button>

                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}