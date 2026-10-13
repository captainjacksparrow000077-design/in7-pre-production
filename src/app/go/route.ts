import { NextResponse } from 'next/server';
import { AFFILIATE_URL } from '@/lib/constants';

export async function GET() {
  return NextResponse.redirect(AFFILIATE_URL, { status: 301 });
}
