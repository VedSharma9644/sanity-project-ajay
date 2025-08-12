import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');

  if (!secret) {
    return new Response('No secret provided', { status: 401 });
  }

  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response('Invalid secret', { status: 401 });
  }

  if (!slug) {
    return new Response('No slug', { status: 401 });
  }

  const redirectUrl = `/${slug}`;
  
  const response = NextResponse.redirect(new URL(redirectUrl, request.url));
  
  response.cookies.set('draft', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 // 24 hours
  });

  return response;
} 