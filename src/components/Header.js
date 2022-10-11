// Next JS
import Link from 'next/link';

export default function Header({ link, title }) {
  return (
    <div className="header">
      <div className="header__image">
        <img
          className="max-w-[270%] md:max-w-[unset] md:w-full ml-[-100%] md:ml-[unset]"
          src={'/assets/images/page-banner.png'}
          alt="page-banner"
        />
      </div>
      <div className="absolute z-10">
        <h2 className="text-center font-BenchNine text-white">{title}</h2>
        <h4 className="text-center font-Nunito text-white">
          <span className="hover:text-[#ff6300]">
            <Link href="/">Home</Link>
          </span>{' '}
          ~{' '}
          <span className="hover:text-[#ff6300]">
            <Link href={`/${link.toLowerCase()}`}>{link}</Link>
          </span>
        </h4>
      </div>
    </div>
  );
}
