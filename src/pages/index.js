// Components
import Container from '@/components/Container';
import Gallery from '@/components/Gallery';
import Section from '@/components/Section';
import Layout from '@/components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      {/* About Us */}
      <Section>
        <div className="lg:hidden w-full flex flex-col items-center">
          <h2 className="w-full border-2 border-[#ff6300] py-[1.6rem] mb-[2.4rem] font-BenchNine text-center">
            About Us
          </h2>
          <hr className="hidden md:block w-1/6 bg-[#ff6300]" />
        </div>
        <div className=" w-1/2 mb-[4rem] lg:mb-[0] overflow-hidden">
          <img
            className="w
          -full"
            src="/assets/images/about-image.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <div className="hidden lg:block">
            <h2 className="font-BenchNine">About Us</h2>
            <hr className="w-1/6 bg-[#ff6300]" />
          </div>
          <p className="font-Nunito ">
            Lyndem Edutainment is an interactive educational establishment where learning is engendered through the art
            of play. We stimulate children to discover their intellectual abilities by exposing them to educational
            table top games of different sorts. We take advantage of their innate desire to learn to stir up interests
            in a variety of topics.
          </p>
          <div className="flex flex-wrap mt-[2.4rem] gap-x-[2.4rem]">
            <div className="w-full lg:w-[unset] flex items-center lg:justify-center p-[1.6rem] shadow-[0_2px_4px_rgba(0,0,0,0.25)]  gap-x-[1.6rem] mb-[2.4rem]">
              <div className="flex items-center justify-center h-[4rem] w-[4rem] bg-[#ff6300] rounded-[100%]">
                <svg className="h-[2.4rem] w-[2.4rem]">
                  <use href="/assets/svg/sprite.svg#icon-check" />
                </svg>
              </div>
              <h4 className="font-BenchNine">EduGaming Cafe</h4>
            </div>
            <div className="w-full md:w-[unset] flex items-center md:justify-center p-[1.6rem] shadow-[0_2px_4px_rgba(0,0,0,0.25)] gap-x-[1.6rem] mb-[2.4rem]">
              <div className="flex items-center justify-center h-[4rem] w-[4rem] bg-[#0202cb] rounded-[100%]">
                <svg className="h-[2.4rem] w-[2.4rem]">
                  <use href="/assets/svg/sprite.svg#icon-check" />
                </svg>
              </div>
              <h4 className="font-BenchNine">Game Schooling (School Visits)</h4>
            </div>
            <div className="w-full md:w-[unset] flex items-center md:justify-center p-[1.6rem] shadow-[0_2px_4px_rgba(0,0,0,0.25)] gap-x-[1.6rem] mb-[2.4rem]">
              <div className="flex items-center justify-center h-[4rem] w-[4rem] bg-[#b806cc] rounded-[100%]">
                <svg className="h-[2.4rem] w-[2.4rem]">
                  <use href="/assets/svg/sprite.svg#icon-check" />
                </svg>
              </div>
              <h4 className="font-BenchNine">Play Dates</h4>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Mission */}
      <Section>
        <div className="lg:hidden w-full flex flex-col items-center">
          <h2 className="w-full border-2 border-[#ff6300] py-[1.6rem] mb-[2.4rem] font-BenchNine text-center">
            Our Mission
          </h2>
          <hr className="hidden lg:block w-1/5 bg-[#ff6300]" />
        </div>
        <div className="w-1/2 order-3 lg:order-2">
          <div className="hidden lg:block">
            <h2 className="font-BenchNine">Our Mission</h2>
            <hr className="w-1/5 bg-[#ff6300]" />
          </div>
          <p className="font-Nunito  md:w-[100%] mb-[4rem] lg3:mb-[0]">
            Edutainment is the synthesis of learning and fun. Our main purpose therefore is to infuse fun into the
            learning process, thus making it an enjoyable experience for kids so they become eager learners hence our
            motto{' '}
            <em>
              <strong>"Learning Made Fun"</strong>
            </em>
          </p>
        </div>
        <div className="w-1/2 overflow-hidden order-2 md:order-3 mb-[2.4rem] md:mb-[unset]">
          <img className="w-full" src="/assets/images/mission-one.jpg" alt="" />
        </div>
      </Section>

      {/* What We Do */}
      <div className="my-[16rem]">
        <div className="flex flex-col items-center justify-center mb-[2.4rem]">
          <h2 className="w-full md:w-3/4 border-2 border-[#ff6300] lg:border-none py-[1.6rem] mb-[2.4rem] md:mb-[unset] font-BenchNine text-center">
            What We Do
          </h2>
          <hr className="hidden lg:block w-[10%] bg-[#ff6300]" />
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-x-[4rem] ">
          <div className="card">
            <div className="h-[32rem] overflow-hidden p-[1.6rem]">
              <img className="w-full" src="/assets/images/image-thirteen.jpg" alt="" />
            </div>
            <div className="p-[1.6rem]">
              <h4>Edugaming Cafe</h4>
              <hr className="bg-black/10 mt-[.8rem] mb-[1.6rem]" />
              <p>
                The Educational Games Cafe affords kids the opportunity to interact with board, card, and electronic
                educational games and also like minded peers.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="h-[32rem] overflow-hidden p-[1.6rem]">
              <img className="w-full" src="/assets/images/image-fourteen.jpeg" alt="" />
            </div>
            <div className="p-[1.6rem]">
              <h4>Game Schooling</h4>
              <hr className="bg-black/10 mt-[.8rem] mb-[1.6rem]" />
              <p>
                One of our services on offer is Game Schooling which simply put is the incorporation of games into
                school lessons. At Lyndem we're open to partnering with schools and organizations
              </p>
            </div>
          </div>
          <div className="card">
            <div className="h-[32rem] overflow-hidden p-[1.6rem]">
              <img className="w-full" src="/assets/images/image-eleven.jpg" alt="" />
            </div>
            <div className="p-[1.6rem]">
              <h4>Play Dates</h4>
              <hr className="bg-black/10 mt-[.8rem] mb-[1.6rem]" />
              <p>
                Play Dates are fun interaction opportunities where kids socialize with one another over educational
                games and these can be customized to fit the clients needs e.g. birthdays, kid parties or school
                funfairs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Schooling  */}
      <Section>
        <div className="lg:hidden w-full flex flex-col items-center">
          <h2 className="w-full border-2 border-[#ff6300] py-[1.6rem] mb-[2.4rem] font-BenchNine text-center">
            Game Schooling
          </h2>
        </div>
        <div className="w-1/2 mb-[4rem] lg:mb-[0] overflow-hidden">
          <img src="/assets/images/game-schooling-image.png" alt="" />
        </div>
        <div className="w-1/2">
          <div className="hidden lg:block">
            <h2 className="font-BenchNine">Game Schooling</h2>
            <hr className="w-1/4 bg-[#ff6300]" />
          </div>
          <p className="font-Nunito  ">
            Gameschooling is where intentional and specific games are used to teach specific skills, rather than just
            playing games haphazardly for entertainment. <br />
            <br />
            The philosophy behind gameschooling is that kids remember best what they enjoy learning. <br />
            <br />
            At Lyndem Edutainment we use games to teach educational and life skills.
          </p>
        </div>
      </Section>
    </Layout>
  );
}
