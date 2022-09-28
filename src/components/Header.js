// Next JS
import Link from 'next/link';
// Components
import Container from '@/components/Container';

export default function Header({ link, title, image }) {
  return (
    <div className="header relative h-[48rem] w-full flex justify-center items-center mt-[1.6rem]">
      <div className="header__image absolute z-[-1] top-0 left-0 bg-black/50 w-full h-full overflow-hidden">
        <img src={image} alt="" />
      </div>
      <Container>
        <h4 className="text-center font-BenchNine text-white">{title}</h4>
        <p className="text-center font-Nunito text-white">
          <Link href="/">Home</Link> / <Link href={`/${link.toLowerCase()}`}>{link}</Link>
        </p>
      </Container>
    </div>
  );
}
