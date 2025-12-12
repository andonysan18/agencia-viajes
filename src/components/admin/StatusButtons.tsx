"use client";

import { updateBookingStatus } from "@/src/actions/update-status";
import { Check, X, Loader2 } from "lucide-react";
import { useState } from "react";

export default function StatusButtons({ bookingId, currentStatus }: { bookingId: string, currentStatus: string }) {
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (status: 'CONFIRMED' | 'CANCELLED') => {
    if (confirm(`¿Estás seguro de cambiar el estado a ${status}?`)) {
      setLoading(true);
      await updateBookingStatus(bookingId, status);
      setLoading(false);
    }
  };

  if (loading) return <Loader2 className="animate-spin text-slate-400" size={18} />;

  // Si ya está cancelada o confirmada, no mostramos botones (o podrías dejar que se cambie igual)
  if (currentStatus !== 'PENDING') return null;

  return (
    <div className="flex gap-2 justify-end">
      {/* Botón APROBAR */}
      <button 
        onClick={() => handleUpdate('CONFIRMED')}
        className="p-1.5 bg-emerald-50 text-emerald-600 rounded hover:bg-emerald-600 hover:text-white transition shadow-sm"
        title="Confirmar Reserva"
      >
        <Check size={16} />
      </button>

      {/* Botón CANCELAR */}
      <button 
        onClick={() => handleUpdate('CANCELLED')}
        className="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-600 hover:text-white transition shadow-sm"
        title="Cancelar Reserva"
      >
        <X size={16} />
      </button>
    </div>
  );
}