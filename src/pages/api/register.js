import cookie from 'cookie';
import { API_URL } from '@/config/index';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    const apiRes = await fetch(`${API_URL}/backend/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await apiRes.json();

    if (apiRes.ok) {
      // Set Cookie
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', data.jwt, {
          httpOnly: true,
          secure: false,
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/',
        })
      );

      res.status(200).json({ user: data });
    } else {
      res.status(data.error.statusCode).json({ message: data.error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
