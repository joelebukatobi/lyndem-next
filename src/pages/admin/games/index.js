// React JS
import { useState } from 'react';

// Next JS
import { useRouter } from 'next/router';

// Config
import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers/index';

// Component
import Layout from '@/components/layout/Dashboard';
import Welcome from '@/components/dashboard/Welcome';
import Button from '@/components/elements/Button';
import Input from '@/components/elements/Input';
import Textarea from '@/components/elements/Textarea';

// External Libraries
import moment from 'moment/moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//
export default function Games({ token, games }) {
  const router = useRouter();

  const [viewGame, setViewGame] = useState(false);
  const [createGame, setCreateGame] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [gameID, setGameID] = useState('');

  //
  const submitCreateGame = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/api/v1/games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });

    const info = await res.json();

    if (!res.ok) {
      toast.error(info.error.message);
    } else {
      toast.success('Your game has been created');
      router.reload('/admin/games');
    }
  };

  //
  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/api/v1/games/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const info = await res.json();

      if (!res.ok) {
        toast.error(info.error.message);
      } else {
        toast.success(`The Game has been deleted`);
        router.reload('/admin/games');
      }
    }
  };

  //
  const submitEditGame = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/api/v1/games/${gameID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });

    const info = await res.json();

    if (!res.ok) {
      toast.error(info.error.message);
    } else {
      toast.success('Your game has been edited');
      router.reload('/admin/games');
    }
  };

  return (
    <Layout className={viewGame || createGame ? 'blur-sm' : 'blur-none'}>
      <Welcome className={viewGame || createGame ? 'blur-sm' : 'blur-none'} />
      <ToastContainer />
      <div
        className={
          viewGame || createGame
            ? 'blur-sm w-full bg-white mt-[2.4rem] p-[2.4rem] rounded-[1rem]'
            : 'blur-none w-full bg-white mt-[2.4rem] p-[2.4rem] rounded-[1rem]'
        }
      >
        <header className="p-[0] mb-[2.4rem] flex justify-between">
          <div className="">
            <h4>Published Games</h4>
            <h5>Here's a list of your recent games</h5>
          </div>
          <div className="">
            <Button
              className={'bg-green-600 text-white px-[2.4rem] capitalize'}
              onClick={(e) => (e.preventDefault(), setCreateGame(true))}
            >
              Create Game
            </Button>
          </div>
        </header>
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="w-[2.4rem]">ID</th>
              <th>Games</th>
              <th>Questions</th>
              <th>Date</th>
              <th>View</th>
            </tr>
          </thead>

          {games.data.map((data, count = 1) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>{`${count + 1}`}</td>
                    <td className="capitalize">{data.name}</td>
                    <td>{data.questions.length}</td>
                    <td>{moment(data.createdAt).format('L')}</td>
                    <td
                      onClick={(e) => (
                        e.preventDefault,
                        setViewGame(true),
                        setName(data.name),
                        setDescription(data.description),
                        setGameID(data._id)
                      )}
                      className="text-green-600 font-bold cursor-pointer"
                    >
                      -&gt;
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
      <div
        className={
          createGame
            ? 'h-[100vh] w-[100vw] absolute bg-black/50 top-[0] left-[0] flex justify-center items-center'
            : 'hidden'
        }
      >
        <div className="mt-[2.4rem] bg-white p-[2.4rem] rounded-[1rem] w-[30%]">
          <form onSubmit={submitCreateGame}>
            <header className="mb-[1.6rem] flex justify-between ">
              <div className="">
                <h4>Create Game</h4>
                <h5>Please enter the details for the game</h5>
              </div>
              <div className="">
                <h4
                  onClick={() => (setCreateGame(false), setName(''), setDescription(''))}
                  className="text-red-600 cursor-pointer"
                >
                  &#10006;
                </h4>
              </div>
            </header>
            <hr className="bg-black/25" />
            <div className="input-group ">
              <Input
                type={'text'}
                id={'name'}
                name={'name'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={'w-[100%] placeholder:text-black/50'}
                required={'required'}
                placeholder={'Please input the name of the game'}
              />
            </div>
            <div className="input-group ">
              <Textarea
                type={'text'}
                id={'description'}
                name={'description'}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={'w-[100%] placeholder:text-black/50'}
                required={'required'}
                placeholder={'Leave a game description in this text box'}
              />
            </div>
            <div className="input-group">
              <Button type={'submit'} className={'bg-green-600 text-white w-full'}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div
        className={
          viewGame
            ? 'h-[100vh] w-[100vw] absolute bg-black/50 top-[0] left-[0] flex justify-center items-center'
            : 'hidden'
        }
      >
        <div className="mt-[2.4rem] bg-white p-[2.4rem] rounded-[1rem] w-[30%]">
          <form onSubmit={submitEditGame}>
            <header className="mb-[1.6rem] flex justify-between ">
              <div className="">
                <h4>Edit Game</h4>
                <h5>Please enter the details for the game</h5>
              </div>
              <div className="">
                <h4
                  onClick={() => (setViewGame(false), setName(''), setDescription(''))}
                  className="text-red-600 cursor-pointer"
                >
                  &#10006;
                </h4>
              </div>
            </header>
            <hr className="bg-black/25" />
            <div className="input-group ">
              <Input
                type={'text'}
                id={'name'}
                name={'name'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={'w-[100%] placeholder:text-black'}
                required={'required'}
              />
            </div>
            <div className="input-group ">
              <Textarea
                type={'text'}
                id={'description'}
                name={'description'}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={'w-[100%] placeholder:text-black'}
                required={'required'}
              />
            </div>
            <div className="input-group">
              <Button type={'submit'} className={'bg-green-600 text-white w-full'}>
                Save Changes
              </Button>
              <Button
                onClick={(e) => (e.preventDefault(), handleDelete(gameID))}
                className={'bg-red-600 text-white w-full'}
              >
                Delete Game
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  if (!token) {
    return {
      redirect: {
        destination: '/admin/login',
      },
    };
  }
  const res = await Promise.all([fetch(`${API_URL}/api/v1/games`)]);
  const info = await Promise.all(res.map((res) => res.json()));

  return {
    props: {
      token,
      games: info[0],
    },
  };
}
