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
export default function List({ token, game }) {
  //
  const router = useRouter();
  //
  const [createQuestion, setCreateQuestion] = useState(false);
  const [editQuestion, setEditQuestion] = useState(false);
  const [questionID, setQuestionID] = useState('');
  //
  const [question, setQuestion] = useState('');
  const [answerA, setAnswerA] = useState('');
  const [answerB, setAnswerB] = useState('');
  const [answerC, setAnswerC] = useState('');
  const [answerD, setAnswerD] = useState('');

  //
  const submitCreateQuestion = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/backend/api/v1/games/${game.id}/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        question: question,
        answer: [
          {
            a: answerA,
            b: answerB,
            c: answerC,
            d: answerD,
          },
        ],
      }),
    });

    const info = await res.json();

    if (!res.ok) {
      toast.error(info.error.message);
    } else {
      toast.success('Your question has been saved');
      router.reload(`/admin/questions/${game.id}`);
    }
  };

  //
  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/backend/api/v1/questions/${questionID}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const info = await res.json();

      if (!res.ok) {
        toast.error(info.error.message);
      } else {
        toast.success(`The question has been deleted`);
        router.reload(`/admin/questions/${game.id}`);
      }
    }
  };

  const submitEditQuestion = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/backend/api/v1/questions/${questionID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        question: question,
        answer: [
          {
            a: answerA,
            b: answerB,
            c: answerC,
            d: answerD,
          },
        ],
      }),
    });

    const info = await res.json();

    if (!res.ok) {
      toast.error(info.error.message);
    } else {
      toast.success('Your question has been saved');
      router.reload(`/admin/questions/${game.id}`);
    }
  };

  return (
    <Layout className={createQuestion ? 'blur-sm' : 'blur-none'}>
      <Welcome className={createQuestion ? 'blur-sm' : 'blur-none'} />
      <div
        className={
          createQuestion
            ? 'blur-sm w-full bg-white mt-[2.4rem] p-[2.4rem] rounded-[1rem]'
            : 'blur-none w-full bg-white mt-[2.4rem] p-[2.4rem] rounded-[1rem]'
        }
      >
        <header className="p-[0] mb-[2.4rem] flex justify-between">
          <div className="">
            <h4 className="capitalize">{game.name} Questions</h4>
            <h5>Here's a list of questions for {game.name}</h5>
          </div>
          <div className="">
            <Button
              className={'bg-green-600 text-white px-[2.4rem] capitalize'}
              onClick={(e) => (e.preventDefault(), setCreateQuestion(true))}
            >
              Create Question
            </Button>
          </div>
        </header>
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="w-[20%]">ID</th>
              <th>Question</th>
              <th>Date</th>
              <th>View</th>
            </tr>
          </thead>

          {game.questions.map((data, count = 1) => {
            return (
              <tbody>
                <tr key={count}>
                  <td>{count + 1}</td>
                  <td>{data.question}</td>
                  <td>{moment(data.createdAt).format('L')}</td>
                  <td
                    onClick={(e) => (
                      e.preventDefault,
                      setEditQuestion(true),
                      setQuestion(data.question),
                      setAnswerA(data.answer[0].a),
                      setAnswerB(data.answer[0].b),
                      setAnswerC(data.answer[0].c),
                      setAnswerD(data.answer[0].d),
                      setQuestionID(data._id)
                    )}
                    className="text-green-600 font-bold cursor-pointer"
                  >
                    -&gt;
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>

      <div
        className={
          createQuestion
            ? 'h-[100vh] w-[100vw] absolute bg-black/50 top-[0] left-[0] flex justify-center items-center'
            : 'hidden'
        }
      >
        <div className="w-[35%] bg-white p-[2.4rem] rounded-[1rem]">
          <ToastContainer />
          <form onSubmit={submitCreateQuestion}>
            <header className="mb-[1.6rem] flex justify-between ">
              <div className="">
                <h4>Edit Question</h4>
                <h5>Please enter the details for the question below</h5>
              </div>
              <div className="">
                <h4 onClick={(e) => setCreateQuestion(false)} className="text-red-600 cursor-pointer">
                  &#10006;
                </h4>
              </div>
            </header>
            <hr className="bg-black/25" />

            <div className="input-group">
              <Input
                name={'question'}
                type={'text'}
                id={'question'}
                value={question}
                required={'required'}
                onChange={(e) => setQuestion(e.target.value)}
                className={'w-full placeholder:text-black/50 text-black placeholder:font-semibold'}
                placeholder={'Question'}
              />
            </div>
            <div className="input-group">
              <Input
                name={'a'}
                type={'text'}
                id={'answer-a'}
                value={answerA}
                required={'required'}
                onChange={(e) => setAnswerA(e.target.value)}
                className={' w-full placeholder:text-black/50 text-black placeholder:font-semibold'}
                placeholder={'Option A'}
              />
              <Input
                name={'b'}
                type={'text'}
                id={'answer-b'}
                value={answerB}
                required={'required'}
                onChange={(e) => setAnswerB(e.target.value)}
                className={'w-full placeholder:text-black/50 placeholder:font-semibold'}
                placeholder={'Option B'}
              />
            </div>
            <div className="input-group">
              <Input
                name={'c'}
                type={'text'}
                id={'answer-c'}
                value={answerC}
                required={'required'}
                onChange={(e) => setAnswerC(e.target.value)}
                className={' w-full placeholder:text-black/50 text-black placeholder:font-semibold'}
                placeholder={'Option C'}
              />
              <Input
                name={'d'}
                type={'text'}
                id={'answer-d'}
                value={answerD}
                required={'required'}
                onChange={(e) => setAnswerD(e.target.value)}
                className={'w-full placeholder:text-black/50 text-black placeholder:font-semibold'}
                placeholder={'Option D'}
              />
            </div>
            <Button className={'bg-green-600 text-white w-full'}>Save Changes</Button>
          </form>
        </div>
      </div>

      <div
        className={
          editQuestion
            ? 'h-[100vh] w-[100vw] absolute bg-black/50 top-[0] left-[0] flex justify-center items-center'
            : 'hidden'
        }
      >
        <div className="w-[35%] bg-white p-[2.4rem] rounded-[1rem]">
          <ToastContainer />
          <form onSubmit={submitEditQuestion}>
            <header className="mb-[1.6rem] flex justify-between ">
              <div className="">
                <h4>Add Question</h4>
                <h5>Please enter the details for the question below</h5>
              </div>
              <div className="">
                <h4 onClick={(e) => setEditQuestion(false)} className="text-red-600 cursor-pointer">
                  &#10006;
                </h4>
              </div>
            </header>
            <hr className="bg-black/25" />

            <div className="input-group">
              <Input
                name={'question'}
                type={'text'}
                id={'question'}
                value={question}
                required={'required'}
                onChange={(e) => setQuestion(e.target.value)}
                className={'w-full placeholder:text-black/50 text-black placeholder:font-semibold'}
                placeholder={'Question'}
              />
            </div>
            <div className="input-group">
              <Input
                name={'a'}
                type={'text'}
                id={'answer-a'}
                value={answerA}
                required={'required'}
                onChange={(e) => setAnswerA(e.target.value)}
                className={' w-full placeholder:text-black/50 text-black placeholder:font-semibold'}
                placeholder={'Option A'}
              />
              <Input
                name={'b'}
                type={'text'}
                id={'answer-b'}
                value={answerB}
                required={'required'}
                onChange={(e) => setAnswerB(e.target.value)}
                className={'w-full placeholder:text-black/50 text-black placeholder:font-semibold'}
                placeholder={'Option B'}
              />
            </div>
            <div className="input-group">
              <Input
                name={'c'}
                type={'text'}
                id={'answer-c'}
                value={answerC}
                required={'required'}
                onChange={(e) => setAnswerC(e.target.value)}
                className={' w-full placeholder:text-black/50 text-black placeholder:font-semibold'}
                placeholder={'Option C'}
              />
              <Input
                name={'d'}
                type={'text'}
                id={'answer-d'}
                value={answerD}
                required={'required'}
                onChange={(e) => setAnswerD(e.target.value)}
                className={'w-full placeholder:text-black/50 text-black placeholder:font-semibold'}
                placeholder={'Option D'}
              />
            </div>
            <div className="input-group">
              <Button type={'submit'} className={'bg-green-600 text-white w-full'}>
                Save Changes
              </Button>
              <Button
                onClick={(e) => (e.preventDefault(), handleDelete(questionID))}
                className={'bg-red-600 text-white w-full'}
              >
                Delete Question
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, query: { id } }) {
  const { token } = parseCookies(req);
  if (!token) {
    return {
      redirect: {
        destination: '/admin/login',
      },
    };
  }
  const res = await Promise.all([fetch(`${API_URL}/backend/api/v1/games/${id}`)]);
  const info = await Promise.all(res.map((res) => res.json()));

  return {
    props: {
      token,
      game: info[0].data,
    },
  };
}
