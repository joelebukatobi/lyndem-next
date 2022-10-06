// React
import { useState } from 'react';
// Next JS
import Link from 'next/link';
import { useRouter } from 'next/router';
// Components
import Button from '@/components/elements/Button';
import Container from '@/components/Container';

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <nav className={open ? 'h-[100vh]' : 'navbar'}>
      <Container className={'relative flex md:items-center md:justify-between h-full'}>
        <div
          className={
            open
              ? `flex w-full md:w-[unset] justify-between items-center h-[8rem] border-b-[.18rem]`
              : `flex w-full md:w-[unset] justify-between items-center h-[8rem] `
          }
        >
          <a href="/">
            <svg className="navbar__logo">
              <use href="/assets/svg/sprite.svg#logo-color" />
            </svg>
          </a>
          <div onClick={toggle} className="flex items-center cursor-pointer md:hidden">
            <p className={open ? 'hidden' : `font-semibold text-[1.8rem] font-Nunito mr-[.8rem] md:hidden`}>Menu</p>
            <svg className="h-[2.4rem] w-[2.4rem] ">
              <use href={open ? `/assets/svg/sprite.svg#icon-close` : `/assets/svg/sprite.svg#icon-menu`} />
            </svg>
          </div>
        </div>

        <ul className={open ? 'navbar__list__open' : 'navbar__list'}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/games">Games</Link>
          </li>
        </ul>

        <Button className={'navbar__btn'} onClick={(e) => (e.preventDefault(), router.push('/contact'))}>
          Contact Us
        </Button>
      </Container>
    </nav>
  );
}
