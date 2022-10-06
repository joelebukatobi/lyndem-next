// Components
import Layout from '@/components/layout/Layout';
import Section from '@/components/Section';

export default function about() {
  return (
    <Layout title={'Services'} link={'Services '}>
      {/* About Us */}
      <Section>
        <div className="md:hidden w-full flex flex-col items-center">
          <h2 className="w-full border-2 border-[#ff6300] py-[1.6rem] mb-[2.4rem] font-BenchNine text-center">
            Edugaming Cafe
          </h2>
        </div>
        <div className=" w-1/2 mb-[4rem] md:mb-[0] overflow-hidden">
          <img className="W-full" src="/assets/images/edugaming.jpeg" alt="" />
        </div>
        <div className="w-1/2">
          <div className="hidden md:block">
            <h2 className="font-BenchNine">Edugaming Cafe</h2>
            <hr className="w-1/4 bg-[#ff6300]" />
          </div>
          <p className="font-Nunito ">
            The Educational Games Cafe affords kids the opportunity to interact with board, card, and electronic
            educational games and also like minded peers. At the cafe the kids are guided by facilitators based on their
            interest and intellectual ability.
            <br />
            <br />
            The Cafe is open for school visits from{' '}
            <em>
              <strong>10am to 2pm,</strong>
            </em>{' '}
            Monday to Friday and for walk-in clients from{' '}
            <em>
              <strong>4pm to 6pm</strong>
            </em>{' '}
            on Fridays and Saturdays during the school term.
            <br />
            <br />
            During the holidays, the Cafe runs on weekdays only, from{' '}
            <em>
              <strong>11am to 5pm</strong>
            </em>
            . The hours are divided into 3 slots of 2 hours each. This affords parents the ability to schedule the hours
            that work for them and their kids. Payment per slot is N500 per child.
          </p>
        </div>
      </Section>
      {/* Game Schooling */}
      <Section className={''}>
        <div className="md:hidden flex flex-col items-center">
          <h2 className="w-full border-2 border-[#ff6300] py-[1.6rem] mb-[2.4rem] font-BenchNine text-center">
            Game Schooling
          </h2>
        </div>
        <div className="w-1/2 order-2 md:order-1">
          <div className="hidden md:flex flex-col">
            <h2 className="font-BenchNine">Game Schooling</h2>
            <hr className="w-1/4 bg-[#ff6300]" />
          </div>
          <p className="font-Nunito mb-[4rem] md:mb-0">
            One of our services on offer is Game Schooling which simply put is the incorporation of games into school
            lessons. It is the intentional use of well thought out games to teach specific skills, rather than having
            the kids just play games haphazardly for entertainment.
            <br />
            <br />
            The philosophy behind game schooling is that kids remember what they enjoy learning.
            <br />
            <br />
            At Lyndem Edutainment we are open to partnering with schools and organizations to host game based
            interactive sessions
          </p>
        </div>
        <div className=" w-1/2 mb-[4rem] md:mb-[0] overflow-hidden order-1 md:order-2">
          <img className="W-full" src="/assets/images/game-schooling-image.png" alt="" />
        </div>
      </Section>
      {/* Play Dates */}
      <Section>
        <div className="md:hidden w-full flex flex-col items-center">
          <h2 className="w-full border-2 border-[#ff6300] py-[1.6rem] mb-[2.4rem] font-BenchNine text-center">
            Play Dates
          </h2>
        </div>
        <div className=" w-1/2 mb-[4rem] md:mb-[0] overflow-hidden">
          <img className="W-full" src="/assets/images/image-fifteen.png" alt="" />
        </div>
        <div className="w-1/2">
          <div className="hidden md:block">
            <h2 className="font-BenchNine">Play Dates</h2>
            <hr className="w-1/6 bg-[#ff6300]" />
          </div>
          <p className="font-Nunito ">
            Play Dates are fun interaction opportunities where kids socialize with one another over educational games.
            They include birthdays, kids parties and funfairs
            <br />
            <br />
            Play Dates can be customized and scheduled to suite the clients taste and are not restricted to the cafe
          </p>
        </div>
      </Section>
    </Layout>
  );
}
