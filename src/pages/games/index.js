// Config
import { API_URL } from '@/config/index';

// Components
import Layout from '@/components/layout/Layout';
import Section from '@/components/Section';
import Link from 'next/link';

export default function about({ games }) {
  // const
  return (
    <Layout title={'Games'} link={'Games'}>
      <div className="my-[10.4rem]">
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
      {/* What We Do */}
      <div className="my-[10.4rem]">
        <div className="flex flex-col items-center justify-center mb-[2.4rem]">
          <h2 className="font-BenchNine">Games </h2>
          <hr className="w-[8%] bg-[#ff6300]" />
        </div>
        <div className="flex flex-col md:flex-row gap-x-[4rem] ">
          {games.data.map((game) => {
            return (
              <Link href={`/games/${game.id}`}>
                <div className="card cursor-pointer" key={game.id}>
                  <div className="bg-black/50 h-[32rem]"></div>
                  <div className="p-[1.6rem]">
                    <h3 className="font-BenchNine capitalize">{game.name}</h3>
                    <hr className="bg-black/10 mt-[.8rem] mb-[1.6rem]" />
                    <p>{game.description}</p>
                    <p className="text-[#0202cb] hover:text-[#ff6300]">
                      <Link href={`/games/${game.id}`}>View</Link>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await Promise.all([
    fetch(`${API_URL}/backend/api/v1/games`),
    fetch(`${API_URL}/backend/api/v1/questions`),
  ]);

  const info = await Promise.all(res.map((res) => res.json()));

  return {
    props: {
      games: info[0],
    },
  };
}
