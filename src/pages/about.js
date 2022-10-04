// Components
import Layout from '@/components/layout/Layout';
import Section from '@/components/Section';

export default function about() {
  return (
    <Layout title={'About '} link={'About'}>
      <div className="my-[10.4rem]">
        <header>
          <h2 className="font-BenchNine">About Us</h2>
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
          <h2 className="font-BenchNine">About Us</h2>
          <hr className="w-1/4 bg-[#ff6300]" />
        </div>
        <div className="bg-black/50 w-1/2 h-[48rem] mb-[4rem] md:mb-[0]"></div>
        <div className="w-1/2">
          <div className="hidden md:block">
            <h2 className="font-BenchNine">About Us</h2>
            <hr className="w-1/4 bg-[#ff6300]" />
          </div>
          <p className="font-Nunito ">
            Lyndem Edutainment is an interactive educational establishment where learning is engendered through the art
            of play. We stimulate children to discover their intellectual abilities by exposing them to educational
            table top games of different sorts. We take advantage of their innate desire to learn to stir up interests
            in a variety of topics.
          </p>
          <div className="flex flex-wrap mt-[2.4rem] gap-x-[2.4rem]">
            <div className="flex items-center justify-center p-[1.6rem] shadow-[0_2px_4px_rgba(0,0,0,0.25)]  gap-x-[1.6rem] mb-[2.4rem]">
              <div className="flex items-center justify-center h-[4rem] w-[4rem] bg-[#ff6300] rounded-[100%]">
                <svg className="h-[2.4rem] w-[2.4rem]">
                  <use href="/images/sprite.svg#icon-check" />
                </svg>
              </div>
              <h4 className="font-BenchNine">EduGaming Cafe</h4>
            </div>
            <div className="flex items-center justify-center p-[1.6rem] shadow-[0_2px_4px_rgba(0,0,0,0.25)] gap-x-[1.6rem] mb-[2.4rem]">
              <div className="flex items-center justify-center h-[4rem] w-[4rem] bg-[#0202cb] rounded-[100%]">
                <svg className="h-[2.4rem] w-[2.4rem]">
                  <use href="/images/sprite.svg#icon-check" />
                </svg>
              </div>
              <h4 className="font-BenchNine">Game Schooling (School Visits)</h4>
            </div>
            <div className="flex items-center justify-center p-[1.6rem] shadow-[0_2px_4px_rgba(0,0,0,0.25)] gap-x-[1.6rem] mb-[2.4rem]">
              <div className="flex items-center justify-center h-[4rem] w-[4rem] bg-[#b806cc] rounded-[100%]">
                <svg className="h-[2.4rem] w-[2.4rem]">
                  <use href="/images/sprite.svg#icon-check" />
                </svg>
              </div>
              <h4 className="font-BenchNine">Play Dates</h4>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Mission */}
      <Section>
        <div className="md:hidden w-full flex flex-col items-center">
          <h2 className="font-BenchNine">Our Mission</h2>
          <hr className="w-1/4 bg-[#ff6300]" />
        </div>
        <div className="w-1/2">
          <div className="hidden md:block">
            <h2 className="font-BenchNine">Our Mission</h2>
            <hr className="w-1/4 bg-[#ff6300]" />
          </div>
          <p className="font-Nunito  md:w-[70%] mb-[4rem] md:mb-[0]">
            Edutainment is the synthesis of learning and fun. Our main purpose therefore is to infuse fun into the
            learning process, thus making it an enjoyable experience for kids so they become eager learners hence our
            motto{' '}
            <em>
              <strong>"Learning Made Fun"</strong>
            </em>
          </p>
        </div>
        <div className="bg-black/50 w-1/2 h-[48rem]"></div>
      </Section>
    </Layout>
  );
}
