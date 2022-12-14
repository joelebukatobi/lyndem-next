import Container from './Container';

export default function Video() {
  return (
    <div className="relative flex items-center justify-between gap-x-[4rem] py-[5.6rem] md:py-[0] mt-[0] mb-[4rem] lg:mb-[16rem] md:h-[64rem] lg:h-[104rem] overflow-hidden">
      <div className="video absolute z-[-1] top-0 left-0 w-full">
        <video src="/assets/video/video-two.mp4" autoPlay muted loop className="w-full lg:mt-[-10.4rem]"></video>
      </div>

      <Container>
        <h1 className="font-BenchNine text-white text-[3.2rem] md:text-[6.4rem] xl:text-[9] font-bold">
          Games make learning a necessity to have fun. So there’s no better motivation for kids to learn than to teach
          the concept with a game
        </h1>
        <hr className="my-[.8rem] md:my-[3.2rem] bg-white md:h-[.8rem]" />
        <div className="text-white">
          <h3 className="font-BenchNine">Kara Carrero</h3>
          <p className="font-Nunito">Host & Owner - Extremely Good Parenting</p>
        </div>
      </Container>
    </div>
  );
}
