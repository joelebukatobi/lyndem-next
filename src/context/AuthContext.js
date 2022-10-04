import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { WEB_URL } from '@/config/index';

const AuthContext = createContext('');

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  console.log(WEB_URL);

  const router = useRouter();

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  // Register user
  const register = async (user) => {
    const res = await fetch(`${WEB_URL}/api/v1/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    console.log(res);
    if (res.ok) {
      setUser(data.user);
      router.push('/');
    } else {
      setError(data.message);
      setError(null);
    }
  };

  // Login user
  const login = async ({ email, password }) => {
    const res = await fetch(`${WEB_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    // console.log(data);
    if (res.ok) {
      setUser(data);
      router.push('/admin');
    } else {
      setError(data);
      // setError(null);
    }
  };

  // Logout user
  const logout = async () => {
    const res = await fetch(`${WEB_URL}/api/logout`, {
      method: 'POST',
    });

    if (res.ok) {
      setUser(null);
      router.push('/');
    }
  };

  // Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    const res = await fetch(`${WEB_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data);
    } else {
      setUser(null);
      // router.push('/login');
    }
  };

  return <AuthContext.Provider value={{ user, error, register, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
