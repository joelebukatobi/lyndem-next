// Next JS
import Link from 'next/link';
import { useRouter } from 'next/router';

// Config
import { API_URL } from '@/config/index';

// Components
import Layout from '@/components/layout/Layout';
import Section from '@/components/Section';

// External Libraries
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function about({ game }) {
  const router = useRouter();
  const id = router.query.id;
  return (
    <Layout title={game.name} link={'Games'}>
      <div className="my-[10.4rem]">
        {/* <header>
          <h2 className="font-BenchNine">{game.name}</h2>
          <hr className=" bg-[#ff6300]" />
        </header> */}
        <p className="font-Nunito text-justify ">{game.description}</p>
      </div>

      {/* About Us */}
      <Section>
        <div className="md:hidden w-full flex flex-col items-center">
          <h2 className="font-BenchNine">Game Components</h2>
        </div>
        <div className="w-[50%] h-[48rem] mb-[4rem] md:mb-[0]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView="auto"
            navigation={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
          >
            <SwiperSlide>
              <div>
                <img className="h-[48rem]" src="/assets/images/card-deck.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="h-[48rem]" src="/assets/images/card-deck-two.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="h-[48rem]" src="/assets/images/card-five.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="h-[48rem]" src="/assets/images/card-one.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="h-[48rem]" src="/assets/images/card-two.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="h-[48rem]" src="/assets/images/card-three.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="h-[48rem]" src="/assets/images/card-four.png" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[50%]">
          <div className="hidden md:block">
            <h2 className="font-BenchNine">Game Components</h2>
            <hr className="w-1/4 bg-[#ff6300]" />
          </div>
          <p className="font-Nunito ">
            Game components include 2 decks of 50 cards each, consisting of either random words or synonyms. They carry
            a definition and 4 possible answers with the letters scrambled. Also the game comes with 156 letter tiles
            covering 6 sets of the alphabets, four sets in different colours with 2 more in black. Lastly the game has
            four player identification cards in corresponding colors.
          </p>
          <div className="w-full flex mt-[2.4rem] gap-x-[2.4rem]">
            <div className="flex items-center w-1/2 justify-center p-[1.6rem] shadow-[0_2px_4px_rgba(0,0,0,0.25)]  gap-x-[1.6rem] mb-[2.4rem]">
              <div className="flex items-center justify-center h-[4rem] w-[4rem] bg-[#0202cb] rounded-[100%]">
                <svg className="h-[2.4rem] w-[2.4rem]">
                  <use href="/assets/svg/sprite.svg#icon-check" />
                </svg>
              </div>
              <h4 className="font-BenchNine">
                <a href="/documents/wordjumble-answer-sheet.pdf" target="_blank">
                  Rule Sheet
                </a>
              </h4>
            </div>
            <div className="flex items-center w-1/2 justify-center p-[1.6rem] shadow-[0_2px_4px_rgba(0,0,0,0.25)] gap-x-[1.6rem] mb-[2.4rem]">
              <div className="flex items-center justify-center h-[4rem] w-[4rem] bg-[#0202cb] rounded-[100%]">
                <svg className="h-[2.4rem] w-[2.4rem]">
                  <use href="/assets/svg/sprite.svg#icon-check" />
                </svg>
              </div>
              <h4 className="font-BenchNine">
                <Link href={`/games/${id}/answersheet`}>Answer Sheet</Link>
              </h4>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const url = req.url;
  console.log(url);
  const res = await Promise.all([fetch(`${API_URL}/backend/api/v1${url}`)]);
  const info = await Promise.all(res.map((res) => res.json()));
  return {
    props: {
      game: info[0].data,
    },
  };
}
