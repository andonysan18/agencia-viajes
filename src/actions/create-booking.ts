"use server"; // <--- Esto indica que este código NUNCA llega al navegador del cliente

import prisma from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createBooking(formData: FormData) {
  // 1. Extraer datos del formulario
  const departureId = formData.get("departureId") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const passengers = Number(formData.get("passengers"));
  const totalPrice = Number(formData.get("totalPrice")); // En una app real, esto se recalcula en el server por seguridad

  // 2. Validación básica
  if (!departureId || !name || !email || !phone) {
    return { success: false, message: "Faltan datos obligatorios" };
  }

  try {
    // 3. Guardar en Base de Datos
    const newBooking = await prisma.booking.create({
      data: {
        departureId,
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        passengers,
        totalPrice,
        status: "PENDING" // Por defecto entra como pendiente
      }
    });

    // 4. Actualizar el contador de asientos (Opcional pero recomendado)
    // Buscamos la salida y sumamos los asientos vendidos
    await prisma.departure.update({
      where: { id: departureId },
      data: {
        soldSeats: { increment: passengers }
      }
    });

    // 5. Refrescar la página para que se actualicen los cupos visualmente
    revalidatePath("/tours/[slug]");

    return { success: true, bookingId: newBooking.id };

  } catch (error) {
    console.error("Error al reservar:", error);
    return { success: false, message: "Hubo un error al procesar tu solicitud." };
  }
}