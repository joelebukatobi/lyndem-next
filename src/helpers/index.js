import cookie from 'cookie';

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || '' : '');
}

// NEXT_PUBLIC_API_URL = http://localhost:8000
// NEXT_PUBLIC_WEB_URL = http://localhost:3000

// NEXT_PUBLIC_API_URL = http://localhost:5000
// NEXT_PUBLIC_WEB_URL = http://localhost:3000
