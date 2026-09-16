import { createServerFn } from '@tanstack/react-start';
import { prisma } from '../lib/prisma';
import bcrypt from 'bcryptjs';
import * as jose from 'jose';
import { getCookie, setCookie, deleteCookie } from '@tanstack/react-start/server';

if (!process.env.JWT_SECRET) {
  console.warn('WARNING: JWT_SECRET environment variable is not set. Auth will fail.');
}
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || '');

export const loginAdmin = createServerFn({ method: 'POST' })
  .validator((data: { email: string; password: string }) => data)
  .handler(async ({ data }) => {
    const { email, password } = data;

    const user = await prisma.adminUser.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error('Invalid email or password');
    }

    const token = await new jose.SignJWT({ id: user.id, email: user.email })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h')
      .sign(JWT_SECRET);

    setCookie('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return { success: true };
  });

export const logoutAdmin = createServerFn({ method: 'POST' })
  .handler(async () => {
    deleteCookie('admin_token');
    return { success: true };
  });

export const getAdminSession = createServerFn({ method: 'GET' })
  .handler(async () => {
    const token = getCookie('admin_token');
    if (!token) return null;

    try {
      const { payload } = await jose.jwtVerify(token, JWT_SECRET);
      return payload as { id: string; email: string };
    } catch (e) {
      return null;
    }
  });

export const requireAdmin = async () => {
  const session = await getAdminSession();
  if (!session) {
    throw new Error('Unauthorized');
  }
  return session;
};
