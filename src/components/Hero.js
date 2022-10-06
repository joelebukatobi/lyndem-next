// Components
import Container from '@/components/Container';

export default function Hero() {
  return (
    <>
      <header className="relative mt-[1.6rem]">
        <div className="w-full md:h-[80rem] overflow-hidden">
          <img
            className="max-w-[300%] md:w-full ml-[-70%] md:ml-[0] md:mt-[-16rem]"
            src="/assets/images/header-image.jpg"
            alt=""
          />
        </div>
        <Container>
          <figcaption className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[40rem] h-[40rem] md:w-[48rem] md:h-[48rem] p-[1.6rem] rounded-[100%] border-2 border-white/50">
            <div className="h-full w-full flex flex-col items-center justify-center p-[3.2rem] bg-white/80 rounded-[100%]">
              <h1 className="font-BenchNine">Lyndem Edutainment</h1>
              <hr className="bg-[#ff6300] w-1/2 mb-[.8rem]" />
              <h4 className="font-normal text-Nunito text-center md:text-[2.4rem]">
                is an educational service provider that engenders learning through the art of interactive play using
                educational games and activities
              </h4>
            </div>
          </figcaption>
        </Container>
      </header>
    </>
  );
}
