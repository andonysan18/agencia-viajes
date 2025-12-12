"use client";

import { useState } from "react";
import { Calendar, Phone, AlertCircle } from "lucide-react";
import BookingModal from "./BookingModal";

// Definimos los tipos para que TypeScript no se queje
interface Departure {
    id: string;
    startDate: Date;
    endDate: Date;
    price: number;
    totalSeats: number;
    soldSeats: number;
}

interface WrapperProps {
    departures: Departure[];
    basePrice: number;
    tourTitle: string;
}

const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);
};

const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "short", year: "numeric" }).format(new Date(date));
};

export default function TourClientWrapper({ departures, basePrice, tourTitle }: WrapperProps) {
    const [selectedDeparture, setSelectedDeparture] = useState<Departure | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Si no hay salida seleccionada, elegimos la primera disponible por defecto
    const activeDeparture = selectedDeparture || (departures.length > 0 ? departures[0] : null);

    const handleBookClick = () => {
        if (activeDeparture) {
            setIsModalOpen(true);
        } else {
            alert("Selecciona una fecha disponible.");
        }
    };

    const hasDepartures = departures.length > 0;

    return (
        <>
            <div className="sticky top-24 bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
                <div className="mb-6">
                    <p className="text-slate-400 text-sm font-bold uppercase">Precio desde</p>
                    <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold text-slate-900">
                            {formatPrice(Number(activeDeparture ? activeDeparture.price : basePrice))}
                        </span>
                    </div>
                </div>

                <div className="space-y-3 mb-8">
                    <label className="text-sm font-bold text-slate-700">Selecciona Fecha:</label>

                    {hasDepartures ? (
                        departures.map((dep) => {
                            // ... dentro del map((dep) => { ...

                            const availableSeats = dep.totalSeats - dep.soldSeats;
                            const isSoldOut = availableSeats <= 0;
                            const isLowStock = availableSeats <= 5; // <--- UMBRAL DE DESPEGAR
                            const isSelected = activeDeparture?.id === dep.id;

                            return (
                                <div
                                    key={dep.id}
                                    onClick={() => !isSoldOut && setSelectedDeparture(dep)}
                                    className={`p-3 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${isSoldOut
                                            ? 'bg-slate-50 border-slate-200 opacity-60 cursor-not-allowed'
                                            : isSelected
                                                ? 'bg-emerald-50 border-emerald-500 ring-1 ring-emerald-500'
                                                : 'bg-white border-slate-200 hover:border-emerald-300'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Calendar size={18} className={isSelected ? "text-emerald-600" : "text-slate-400"} />
                                        <div className="flex flex-col">
                                            <span className={`font-medium text-sm ${isSelected ? "text-emerald-900" : "text-slate-700"}`}>
                                                {formatDate(dep.startDate)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* LÓGICA VISUAL TIPO DESPEGAR */}
                                    {isSoldOut ? (
                                        <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded">
                                            AGOTADO
                                        </span>
                                    ) : isLowStock ? (
                                        <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded flex items-center gap-1">
                                            🔥 ¡Últimos {availableSeats}!
                                        </span>
                                    ) : (
                                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                                            Disponible
                                        </span>
                                    )}
                                </div>
                            );
                            // ...
                        })
                    ) : (
                        <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl text-slate-500 text-sm">
                            <AlertCircle size={16} />
                            <span>No hay salidas programadas.</span>
                        </div>
                    )}
                </div>

                <button
                    onClick={handleBookClick}
                    disabled={!hasDepartures}
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-colors mb-4 shadow-lg shadow-slate-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Solicitar Reserva
                </button>

                <button className="w-full bg-white text-slate-700 border border-slate-300 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                    <Phone size={18} /> Consultar por WhatsApp
                </button>
            </div>

            {/* EL MODAL ESTÁ AQUÍ, OCULTO HASTA QUE SE LLAME */}
            {activeDeparture && (
                <BookingModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    tourTitle={tourTitle}
                    departure={{
                        id: activeDeparture.id,
                        date: formatDate(activeDeparture.startDate),
                        price: Number(activeDeparture.price)
                    }}
                />
            )}
        </>
    );
}