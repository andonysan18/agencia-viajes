import prisma from "@/src/lib/prisma";
import { logout } from "@/src/actions/login"; // <--- Importamos la acción logout
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CheckCircle, Clock, XCircle, Users, DollarSign, LogOut } from "lucide-react";
import StatusButtons from "@/src/components/admin/StatusButtons"; // <--- Importamos nuestros botones nuevos

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const bookings = await prisma.booking.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      departure: { include: { tour: true } }
    }
  });

  // Filtramos solo las confirmadas para calcular el dinero real (opcional)
  const totalRevenue = bookings
    .filter(b => b.status !== 'CANCELLED')
    .reduce((acc, booking) => acc + Number(booking.totalPrice), 0);

  return (
    <div className="min-h-screen bg-slate-100 p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER CON LOGOUT */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Panel de Control</h1>
            <p className="text-slate-500">Bienvenido de nuevo, Administrador.</p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Tarjeta de dinero */}
            <div className="bg-white px-5 py-2 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
               <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                 <DollarSign size={20} />
               </div>
               <div>
                 <p className="text-[10px] text-slate-400 font-bold uppercase">Ventas Netas</p>
                 <p className="text-xl font-bold text-slate-900">USD {totalRevenue.toLocaleString()}</p>
               </div>
            </div>

            {/* BOTÓN DE LOGOUT */}
            <form action={logout}>
              <button className="bg-slate-900 text-white p-3 rounded-xl hover:bg-red-600 transition shadow-lg shadow-slate-900/20 flex items-center gap-2 text-sm font-bold">
                <LogOut size={18} /> Salir
              </button>
            </form>
          </div>
        </div>

        {/* TABLA DE RESERVAS */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase font-bold text-slate-400">
                <tr>
                  <th className="px-6 py-4">Cliente</th>
                  <th className="px-6 py-4">Tour</th>
                  <th className="px-6 py-4">Pax</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4 text-right">Gestionar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-900">{booking.customerName}</p>
                      <p className="text-xs text-emerald-600 font-medium">{booking.customerPhone}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-800">{booking.departure.tour.title}</p>
                      <p className="text-xs text-slate-400">
                        {format(new Date(booking.departure.startDate), "dd MMM", { locale: es })}
                      </p>
                    </td>
                    <td className="px-6 py-4"><Users size={16} className="inline mr-1 text-slate-400"/>{booking.passengers}</td>
                    <td className="px-6 py-4 font-bold text-slate-900">${Number(booking.totalPrice).toLocaleString()}</td>
                    
                    {/* ESTADO VISUAL */}
                    <td className="px-6 py-4">
                      {booking.status === 'PENDING' && (
                        <span className="inline-flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded-md text-xs font-bold border border-yellow-100">
                          <Clock size={12}/> Pendiente
                        </span>
                      )}
                      {booking.status === 'CONFIRMED' && (
                        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-xs font-bold border border-emerald-100">
                          <CheckCircle size={12}/> Confirmada
                        </span>
                      )}
                      {booking.status === 'CANCELLED' && (
                        <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 px-2 py-1 rounded-md text-xs font-bold border border-red-100">
                          <XCircle size={12}/> Cancelada
                        </span>
                      )}
                    </td>

                    {/* BOTONES DE ACCIÓN */}
                    <td className="px-6 py-4">
                       <StatusButtons bookingId={booking.id} currentStatus={booking.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}