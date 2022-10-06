import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext('');

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  // Register user
  const register = async ({ name, email, role, password }) => {
    const res = await fetch(`/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ name, email, password, role }),
    });

    const data = await res.json();
    if (res.ok) {
      setUser(data);
      setTimeout(() => {
        router.push('/admin/login');
      }, 5000);
    } else {
      setError(data);
      // setError(null);
    }
  };

  // Login user
  const login = async ({ email, password }) => {
    const res = await fetch(`/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    // console.log(data);
    if (res.ok) {
      checkUserLoggedIn();
      router.push('/admin/');
    } else {
      setError(data);
      // setError(null);
    }
  };

  // Logout user
  const logout = async () => {
    const res = await fetch(`/api/logout`, {
      method: 'POST',
    });

    if (res.ok) {
      setUser(null);
      router.push('/');
    }
  };

  // Check if user is logged in
  const checkUserLoggedIn = async () => {
    const res = await fetch(`/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user.data);
    } else {
      setUser(null);
      // router.push('/login');
    }
  };

  return <AuthContext.Provider value={{ user, error, register, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
