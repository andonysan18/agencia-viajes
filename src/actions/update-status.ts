"use server";

import prisma from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateBookingStatus(bookingId: string, newStatus: 'CONFIRMED' | 'CANCELLED') {
  try {
    // 1. Actualizamos el estado en la DB
    await prisma.booking.update({
      where: { id: bookingId },
      data: { status: newStatus }
    });

    // 2. Si se CANCELA, devolvemos los asientos al stock (Opcional pero recomendado)
    if (newStatus === 'CANCELLED') {
      // Primero buscamos la reserva para saber cuántos asientos tenía
      const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
        select: { passengers: true, departureId: true }
      });

      if (booking) {
        // Restamos los asientos vendidos (liberamos cupo)
        await prisma.departure.update({
          where: { id: booking.departureId },
          data: { soldSeats: { decrement: booking.passengers } }
        });
      }
    }

    // 3. Recargamos la página para ver el cambio al instante
    revalidatePath("/admin");
    return { success: true };

  } catch (error) {
    console.error("Error actualizando reserva:", error);
    return { success: false, message: "Error al actualizar" };
  }
}