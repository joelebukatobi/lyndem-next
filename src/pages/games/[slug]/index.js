// Next JS
import Link from 'next/link';
import { useRouter } from 'next/router';

// Config
import { API_URL } from '@/config/index';

// Components
import Layout from '@/components/layout/Layout';
import Section from '@/components/Section';
import Header from '@/components/Header';

// External Libraries
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function about() {
  const router = useRouter();
  const slug = router.query.slug;
  return (
    <Layout title={'Games'}>
      <Header title={'Word Jumble'} link={'Games'} image={'/images/wordjumble-header.jpeg'} />

      <div className="my-[10.4rem]">
        <header>
          <h2 className="font-BenchNine">Game Description</h2>
          <hr className=" bg-[#ff6300]" />
        </header>
        <p className="font-Nunito text-justify ">
          Lyndem Educational Games Cafe is a child-centred Cafe that engenders learning through the art of play. It is
          the brainchild of Mrs. Bassey Onwuanaku who wandered into and discovered the joy of board gaming in her search
          for ways to help her first child nurture her kinesthetic approach to learning.
          <br />
          <br />
          The cafe was birthed in September 2013 as a result of her love for children and her desire to share her
          passion of fun learning with kids in her locality. It started off small with the games accumulated from her
          personal work with her first child, games being her go-to tool for learning The cafe employs the use of table
          top games to introduce children to the world of fun-learning and gaming hence its motto 'learning made fun'.
          <br />
          <br />
          The cafe was initially patronised by only friends and family but has gradually grown to become a fun learning
          games cafe for kids in Abuja, Nigeria where its based as it is the first of its kind, specifically geared to
          the interest of children. The cafe caters to kids between the ages of 4 and 16. The lockdown in 2020 yielded
          an opportunity for growth as the owner became one of the recipients of the Indie Game Developers Network
          (IGDN) Sponsorship which brought her in connection with fellow gamers internationally. This connection brought
          a boost to the cafe as a wide collection of games were individually and collectively donated to foster the
          edugaming culture in Nigeria. The cafe is located at Suite A6, Kabom Court, Plot 104 Gado Nasko Road, Kubwa,
          Abuja.
        </p>
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
                <img className="h-[48rem]" src="/images/card-deck.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="h-[48rem]" src="/images/card-deck-two.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="h-[48rem]" src="/images/card-five.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="h-[48rem]" src="/images/card-one.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="h-[48rem]" src="/images/card-two.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="h-[48rem]" src="/images/card-three.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img className="h-[48rem]" src="/images/card-four.png" alt="" />
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
                  <use href="/images/sprite.svg#icon-check" />
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
                  <use href="/images/sprite.svg#icon-check" />
                </svg>
              </div>
              <h4 className="font-BenchNine">
                <Link href={`/games/${slug}/answersheet`}>Answer Sheet</Link>
              </h4>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

// export async function getServerSideProps() {
// const res = await Promise.all([fetch(`${API_URL}/backend/api/v1/games/${slug}`), fetch(`${API_URL}/backend/api/v1/questions`)]);
// const info = await Promise.all(res.map((res) => res.json()));
// console.log(info[0]);
// return {
//   props: {
//     games: info[0],
//   },
// };
// }
