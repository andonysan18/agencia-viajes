"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(prevState: any, formData: FormData) {
  const user = formData.get("user") as string;
  const password = formData.get("password") as string;

  // Verificamos contra las variables de entorno
  if (
    user === process.env.ADMIN_USER && 
    password === process.env.ADMIN_PASSWORD
  ) {
    // Si es correcto, creamos una cookie llamada "admin_session"
    cookies().set("admin_session", "true", {
      httpOnly: true, // No accesible por JS (más seguro)
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // Dura 1 semana
      path: "/",
    });

    // Redirigimos al panel
    redirect("/admin");
  } else {
    // Si falla, devolvemos error
    return { success: false, message: "Usuario o contraseña incorrectos" };
  }
}

export async function logout() {
  cookies().delete("admin_session");
  redirect("/");
}