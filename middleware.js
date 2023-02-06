import { NextResponse } from 'next/server';

export default async function middleware(req) {
  const auth = req.cookies.get('auth') && JSON.parse(req.cookies.get('auth')?.value);
  const url = req.nextUrl;
  const authRoutes = ['/admin/dashboard', '/dashboard', '/dashboard/api-key', '/account', '/balance'];
  const publicRoutes = ['/login', '/signup', '/recover-password', '/new-password'];

  const redirect = () => {
    // const urlPathname = !auth?.token ? '/login' : '/dashboard';
    if (!auth?.token) {
      const currentPath = authRoutes.find((route) => route === url.pathname);
      if (currentPath) {
        url.pathname = '/login';
        return NextResponse.redirect(url);
      }
    }
    if (auth?.token) {
      const currentPath = publicRoutes.find((route) => route === url.pathname);
      const currentPathAuth = authRoutes.find((route) => route === url.pathname);
      if (auth?.rol === 'ROLE_ADMIN' && (currentPath || (currentPathAuth && currentPathAuth !== '/admin/dashboard'))) {
        url.pathname = '/admin/dashboard';
        return NextResponse.redirect(url);
      }
      if (auth?.rol === 'ROLE_CUSTOMER' && (url.pathname === '/admin/dashboard' || currentPath)) {
        url.pathname = '/dashboard';
        return NextResponse.redirect(url);
      }
    }
    return NextResponse.next();
  };
  return redirect();
}

export const config = {
  matcher: [
    '/login',
    '/signup',
    '/recover-password',
    '/admin/dashboard',
    '/dashboard',
    '/dashboard/api-key',
    '/account',
    '/balance',
  ],
};
