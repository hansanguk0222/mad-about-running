import { getAccessToken } from '@/service/getAccessToken';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export const middleware = async (request: NextRequest) => {
  await getAccessToken();
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/calendar',
};
