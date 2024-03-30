import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnNewUserPage = nextUrl.pathname === '/newUser';
      if (isOnNewUserPage) {
        if (isLoggedIn) {
          // Redirect logged-in users attempting to access newUser page to the dashboard (or any other page you see fit)
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
        // Allow not logged-in users to stay on the /newUser page
        return true;
      }
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
