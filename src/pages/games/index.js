// Config
import { API_URL } from '@/config/index';

// Components
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function about({ games }) {
  // const
  return (
    <Layout title={'Games'} link={'Games'}>
      <div className="my-[10.4rem] space-y-[2.4rem]">
        <p className="font-Nunito text-justify">
          Why Games? Games are a fun and engaging way to get kids to enjoy their learning experience. They are a fun
          alternative method of presenting knowledge to children whether at home, school or here at the café. They are
          an exciting platform through which kids can gain control of their learning and thus become self-motivated to
          pick up new skills. As a learning tool, games do the following:
        </p>
        <p className="font-Nunito text-justify">
          They are an exciting platform through which kids can gain control of their learning and thus become
          self-motivated to pick up new skills. As a learning tool, games do the following:
        </p>
        <ul className="font-Nunito ml-[2.4rem]">
          <li className="flex items-center gap-x-[.8rem]">
            <div className="flex items-center justify-center h-[1.6rem] w-[1.6rem] bg-green-600 rounded-[100%]">
              <svg className="h-[.8rem] w-[.8rem]">
                <use href="/assets/svg/sprite.svg#icon-check" />
              </svg>
            </div>
            Improve memory and cognitive skills.
          </li>
          <li className="flex items-center gap-x-[.8rem]">
            <div className="flex items-center justify-center h-[1.6rem] w-[1.6rem] bg-green-600 rounded-[100%]">
              <svg className="h-[.8rem] w-[.8rem]">
                <use href="/assets/svg/sprite.svg#icon-check" />
              </svg>
            </div>
            Increase processing speed. Develop logic and reasoning.
          </li>
          <li className="flex items-center gap-x-[.8rem]">
            <div className="flex items-center justify-center h-[1.6rem] w-[1.6rem] bg-green-600 rounded-[100%]">
              <svg className="h-[.8rem] w-[.8rem]">
                <use href="/assets/svg/sprite.svg#icon-check" />
              </svg>
            </div>
            Improve critical thinking.
          </li>
          <li className="flex items-center gap-x-[.8rem]">
            <div className="flex items-center justify-center h-[1.6rem] w-[1.6rem] bg-green-600 rounded-[100%]">
              <svg className="h-[.8rem] w-[.8rem]">
                <use href="/assets/svg/sprite.svg#icon-check" />
              </svg>
            </div>
            Boost spatial reasoning.{' '}
          </li>
          <li className="flex items-center gap-x-[.8rem]">
            <div className="flex items-center justify-center h-[1.6rem] w-[1.6rem] bg-green-600 rounded-[100%]">
              <svg className="h-[.8rem] w-[.8rem]">
                <use href="/assets/svg/sprite.svg#icon-check" />
              </svg>
            </div>
            Improve verbal and communication skills.
          </li>
          <li className="flex items-center gap-x-[.8rem]">
            <div className="flex items-center justify-center h-[1.6rem] w-[1.6rem] bg-green-600 rounded-[100%]">
              <svg className="h-[.8rem] w-[.8rem]">
                <use href="/assets/svg/sprite.svg#icon-check" />
              </svg>
            </div>
            Increase attention and concentration.
          </li>
          <li className="flex items-center gap-x-[.8rem]">
            <div className="flex items-center justify-center h-[1.6rem] w-[1.6rem] bg-green-600 rounded-[100%]">
              <svg className="h-[.8rem] w-[.8rem]">
                <use href="/assets/svg/sprite.svg#icon-check" />
              </svg>
            </div>
            Teach problem-solving Develop confidence.
          </li>
          <li className="flex items-center gap-x-[.8rem]">
            <div className="flex items-center justify-center h-[1.6rem] w-[1.6rem] bg-green-600 rounded-[100%]">
              <svg className="h-[.8rem] w-[.8rem]">
                <use href="/assets/svg/sprite.svg#icon-check" />
              </svg>
            </div>
            Improve decision-making.
          </li>
        </ul>
        <p className="font-Nunito text-justify">
          Wouldn’t you want your child to experience all the above? Why not bring your kids over to the café and afford
          them the opportunity to play their way to knowledge.
        </p>
      </div>
      {/* What We Do */}
      <div className="my-[10.4rem]">
        <div className="flex flex-col items-center justify-center mb-[2.4rem]">
          <h2 className="font-BenchNine">Games </h2>
          <hr className="w-[8%] bg-[#ff6300]" />
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row gap-x-[4rem] ">
          {games.data.map((game) => {
            return (
              <Link href={`/games/${game.id}`}>
                <div className="card cursor-pointer" key={game.id}>
                  <div className="h-[32rem] overflow-hidden p-[1.6rem]">
                    <img className="h-full md:h-[auto] lg:h-full" src="/assets/images/wordjumble-header.jpeg" alt="" />
                  </div>
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
