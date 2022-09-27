// Next JS
import Link from 'next/link';
// Components
import Container from '@/components/Container';

export default function Header({ title }) {
  return (
    <div className="relative h-[48rem] w-full flex justify-center items-center">
      <div className="absolute z-[-1] top-0 left-0 bg-black/50 w-full h-full"></div>
      <Container>
        <h4 className="text-center font-BenchNine">{title}</h4>
        <p className="text-center font-Nunito">
          <Link href="/">Home</Link> / <Link href={`/${title.toLowerCase()}`}>{title}</Link>
        </p>
      </Container>
    </div>
  );
}
