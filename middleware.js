import { NextResponse } from 'next/server';
// import { verify } from 'jsonwebtoken';
// TODO: Verificar el token con el metodo verify

export default async function middleware(req) {
  const auth = req.cookies.get('auth') && JSON.parse(req.cookies.get('auth')?.value);
  const url = req.nextUrl;
  const authRoutes = ['/dashboard', '/dashboard/api-key', '/account'];
  const publicRoutes = ['/login', '/signup', '/recover-password', '/new-password'];

  const redirect = () => {
    const urlPathname = !auth?.token ? '/login' : '/dashboard';
    if (!auth?.token) {
      const currentPath = authRoutes.find((route) => route === url.pathname);
      if (currentPath) {
        url.pathname = urlPathname;
        return NextResponse.redirect(url);
      }
    }
    if (auth?.token) {
      const currentPath = publicRoutes.find((route) => route === url.pathname);
      if (currentPath) {
        url.pathname = urlPathname;
        return NextResponse.redirect(url);
      }
    }
    if (auth?.rol === 'ROLE_ADMIN') {
      if (auth?.token) {
        const currentPath = publicRoutes.find((route) => route === url.pathname);
        const currentPathAuth = authRoutes.find((route) => route === url.pathname);
        if (currentPath || currentPathAuth) {
          url.pathname = '/admin/dashboard';
          return NextResponse.redirect(url);
        }
      }
    }
    return NextResponse.next();
  };
  return redirect();
}

export const config = {
  matcher: ['/login', '/signup', '/recover-password', '/dashboard', '/dashboard/api-key', '/account'],
};
