// React JS
import { useContext } from 'react';

// Next JS
import Link from 'next/link';
import { useRouter } from 'next/router';

// Context
import AuthContext from '@/context/AuthContext';
export default function Welcome({ className }) {
  const pathname = useRouter().pathname;
  const { user } = useContext(AuthContext);
  return (
    <div className={`h-[12rem] bg-white rounded-[1rem] px-[2.4rem] flex flex-col justify-center ${className}`}>
      {user && <h2>Good Afternoon, {user.name.substring(0, user.name.indexOf(' '))} 👋🏽</h2>}
      {pathname === '/admin' && (
        <h5>
          Welcome to your{' '}
          <Link href="/admin">
            <span className="text-black font-bold italic">Dashboard</span>
          </Link>
        </h5>
      )}

      {pathname === '/admin/games' && (
        <h5>
          <Link href="/admin">
            <span className="text-black font-bold italic cursor-pointer">Dashboard</span>
          </Link>{' '}
          /{' '}
          <Link href="/admin/games">
            <span className="text-black/50 font-bold italic cursor-pointer">Games</span>
          </Link>
        </h5>
      )}

      {pathname === '/admin/questions' && (
        <h5>
          <Link href="/admin">
            <span className="text-black font-bold italic cursor-pointer">Dashboard</span>
          </Link>{' '}
          /{' '}
          <Link href="/admin/questions">
            <span className="text-black/50 font-bold italic cursor-pointer">Question</span>
          </Link>
        </h5>
      )}

      {pathname === '/admin/profile' && <h5>Welcome to your profile</h5>}
    </div>
  );
}
