// React
import { useRef } from 'react';
// Components
import Container from '@/components/Container';
// External Libraries
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default () => {
  const swiperRef = useRef();
  return (
    <Container>
      <div className="flex flex-col items-center justify-between gap-x-[4rem] my-[10.4rem]">
        <div className="flex flex-col items-center justify-center mb-[2.4rem]">
          <h2 className="font-BenchNine">Our Gallery</h2>
          <hr className="w-[15%] bg-[#ff6300]" />
          <p className="font-Nunito text-center">Take a tour of some of our JPEGs from our previous events</p>
        </div>
        <div className="w-full flex items-center">
          <button onClick={() => swiperRef.current.slidePrev()}>
            <svg className="h-[6.4rem] w-[6.4rem] hidden md:block">
              <use href="/images/sprite.svg#icon-chevron-left" />
            </svg>
          </button>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView="auto"
            navigation={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <div className="border-2 border-black/50 h-[32rem] w-full bg-black/50"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-black/50 h-[32rem] w-full bg-black/50"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-black/50 h-[32rem] w-full bg-black/50"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-black/50 h-[32rem] w-full bg-black/50"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-black/50 h-[32rem] w-full bg-black/50"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-2 border-black/50 h-[32rem] w-full bg-black/50"></div>
            </SwiperSlide>
          </Swiper>
          <button onClick={() => swiperRef.current.slideNext()}>
            <svg className="h-[6.4rem] w-[6.4rem] hidden md:block">
              <use href="/images/sprite.svg#icon-chevron-right" />
            </svg>
          </button>
        </div>
      </div>
    </Container>
  );
};