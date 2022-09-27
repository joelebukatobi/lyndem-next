import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Welcome({ className }) {
  const pathname = useRouter().pathname;
  return (
    <div className={`h-[12rem] bg-white rounded-[1rem] px-[2.4rem] flex flex-col justify-center ${className}`}>
      <h2>Good Afternoon Bassey,👋🏽</h2>
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
    </div>
  );
}
