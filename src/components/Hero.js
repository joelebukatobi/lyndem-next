// Components
import Container from '@/components/Container';

export default function Hero() {
  return (
    <>
      <header className="relative">
        <div className="bg-black/50 w-full h-[64rem]"></div>
        <Container>
          <figcaption className="absolute left-[5%] md:left-[unset] bottom-[9.6rem]  w-[90%] md:w-[30%] bg-white p-[2.4rem] rounded-[1rem]">
            <h1 className="font-BenchNine">Lyndem Edutainment</h1>
            <h4 className="font-normal text-Nunito">
              is an educational service provider that engenders learning through the art of interactive play using
              educational games and activities
            </h4>
          </figcaption>
        </Container>
      </header>
    </>
  );
}
