import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  
  // 1. Detectar si estamos intentando entrar al panel
  if (req.nextUrl.pathname.startsWith("/admin")) {
    
    // EXCEPCIÓN: Permitir entrar a la página de login sin bloqueo
    if (req.nextUrl.pathname === "/admin/login") {
      return NextResponse.next();
    }

    // 2. Buscamos la cookie "admin_session"
    const session = req.cookies.get("admin_session");

    // 3. Si NO tiene la cookie, lo mandamos a patadas al Login
    if (!session) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};