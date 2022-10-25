// React JS
import { useState } from 'react';

// Config
import { API_URL } from '@/config/index';

// Components
import Footer from '@/components/layout/Footer';
import Container from '@/components/Container';
import Navbar from '@/components/layout/Navbar';
import Input from '@/components/elements/Input';
import Button from '@/components/elements/Button';

export default function about() {
  const [term, setTerm] = useState('');
  const [questions, setQuestions] = useState();
  const [modal, setModal] = useState();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/backend/api/v1/questions/search/${term}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data) {
      setQuestions(data);
    }

    if (data.data.length === 0) {
      setError('Please enter a question');
    }
  };

  const getQuestion = async (id) => {
    const res = await fetch(`${API_URL}/backend/api/v1/questions/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data) {
      setModal(data.data);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <div className="h-[92vh] flex flex-col w-full justify-center lg:px-[16rem] ">
          <div className="absolute left-0 top-[10.4rem] z-[-1000]  w-[100%] h-[100%]">
            <svg className="hidden md:block w-[100%] h-[100%] opacity-[.1]" preserveAspectRatio="none">
              <use href="/assets/svg/sprite.svg#answer-sheet-bg" />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center mt-[-16rem] mb-[2.4rem]">
            <h3 className="font-BenchNine">Answer Search</h3>
            <hr className="w-[15%] bg-[#ff6300]" />
            <p className="font-Nunito text-center w-[75%] md:w-full">
              Enter the question below to get the possible answers
            </p>
            <p className="font-Nunito text-red-600">{error}</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full h-[8rem] flex items-center justify-center relative mb-[1.6rem]"
          >
            <Input
              type={'text'}
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className={'w-full h-[100%] border-[.24rem] rounded-[100rem]'}
              required
            />
            <Button className={'absolute top-0 right-0 h-[100%] w-[8rem] p-[1.6rem] bg-transparent z-10'}>
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="#0202cb" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke=""
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path d="M20.9999 21L16.6499 16.65" stroke="" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </Button>
          </form>
          {questions &&
            questions.data.map((data) => (
              <div className="p-[1.6rem] shadow-[0_2px_4px_rgba(0,0,0,0.25)] gap-x-[1.6rem] mb-[1.6rem]">
                <div>
                  <input
                    type="button"
                    onClick={(e) => getQuestion(data._id)}
                    placeholder={data.question}
                    className="placeholder:text-black text-black cursor-pointer"
                    value={data.question}
                  />
                </div>
              </div>
            ))}
        </div>
        {modal && (
          <div
            className={
              modal
                ? 'fixed left-0 top-0 bg-black/70 h-[100vh] w-[100vw] z-[10000000] flex items-center justify-center'
                : 'hidden'
            }
          >
            <div className="px-[2.4rem] md:px-[6.4rem] pt-[3.2rem] pb-[7.2rem] bg-white rounded-[1rem] w-[90%] md:w-[65%] xl:w-[40%] flex flex-col">
              <p
                onClick={(e) => (setTerm(''), setModal(''), setQuestions(''))}
                className="self-end mb-[2.4rem] text-red-600 cursor-pointer font-[400] text-[3.7rem]"
              >
                &#10006;
              </p>
              <h3 className="text-center mb-[4.8rem] font-Domine text-[#458AD7]">{modal.question}</h3>
              <div className="flex justify-between mb-[5.6rem] gap-x-[2.4rem]">
                <div className="flex gap-x-[1.6rem] items-center w-2/4">
                  <p className="uppercase font-Domine font-bold text-[#458AD7] w-[10%]">a</p>
                  <div className="relative flex items-center justify-center w-[90%]">
                    <svg className="" viewBox="0 0 3296 956">
                      <path
                        d="M318.812 1.77482L4.16751 471.775C2.38829 474.432 4.29321 478 7.49149 478H3288.4C3291.62 478 3293.52 474.391 3291.7 471.737L2969.19 1.73681C2968.45 0.649698 2967.21 0 2965.89 0H322.136C320.801 0 319.554 0.665729 318.812 1.77482Z"
                        fill="#225D9F"
                      ></path>
                      <path d="M2976 956L3296 478H0L328 956H2976Z" fill="#3F88D7"></path>
                    </svg>
                    <h3 className="absolute text-white font-Domine font-bold text-[2.1rem] md:text-[2.8rem]">
                      {modal.answer[0].a}
                    </h3>
                  </div>
                </div>
                <div className="flex gap-x-[1.6rem] items-center w-2/4">
                  <p className="uppercase font-Domine font-bold text-[#458AD7] w-[10%]">c</p>
                  <div className="relative flex items-center justify-center w-[90%]">
                    <svg className="" viewBox="0 0 3296 956">
                      <path
                        d="M318.812 1.77482L4.16751 471.775C2.38829 474.432 4.29321 478 7.49149 478H3288.4C3291.62 478 3293.52 474.391 3291.7 471.737L2969.19 1.73681C2968.45 0.649698 2967.21 0 2965.89 0H322.136C320.801 0 319.554 0.665729 318.812 1.77482Z"
                        fill="#225D9F"
                      ></path>
                      <path d="M2976 956L3296 478H0L328 956H2976Z" fill="#3F88D7"></path>
                    </svg>
                    <h3 className="absolute text-white font-Domine font-bold text-[2.1rem] md:text-[2.8rem]">
                      {modal.answer[0].c}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mb-[2.4rem] gap-x-[2.4rem]">
                <div className="flex gap-x-[1.6rem] items-center w-2/4">
                  <p className="uppercase font-Domine font-bold text-[#458AD7] w-[10%]">b</p>
                  <div className="relative flex items-center justify-center w-[90%]">
                    <svg className="" viewBox="0 0 3296 956">
                      <path
                        d="M318.812 1.77482L4.16751 471.775C2.38829 474.432 4.29321 478 7.49149 478H3288.4C3291.62 478 3293.52 474.391 3291.7 471.737L2969.19 1.73681C2968.45 0.649698 2967.21 0 2965.89 0H322.136C320.801 0 319.554 0.665729 318.812 1.77482Z"
                        fill="#225D9F"
                      ></path>
                      <path d="M2976 956L3296 478H0L328 956H2976Z" fill="#3F88D7"></path>
                    </svg>
                    <h3 className="absolute text-white font-Domine font-bold text-[2.1rem] md:text-[2.8rem]">
                      {modal.answer[0].b}
                    </h3>
                  </div>
                </div>
                <div className="flex gap-x-[1.6rem] items-center w-2/4">
                  <p className="uppercase font-Domine font-bold text-[#458AD7] w-[10%]">d</p>
                  <div className="relative flex items-center justify-center w-[90%]">
                    <svg className="" viewBox="0 0 3296 956">
                      <path
                        d="M318.812 1.77482L4.16751 471.775C2.38829 474.432 4.29321 478 7.49149 478H3288.4C3291.62 478 3293.52 474.391 3291.7 471.737L2969.19 1.73681C2968.45 0.649698 2967.21 0 2965.89 0H322.136C320.801 0 319.554 0.665729 318.812 1.77482Z"
                        fill="#225D9F"
                      ></path>
                      <path d="M2976 956L3296 478H0L328 956H2976Z" fill="#3F88D7"></path>
                    </svg>
                    <h3 className="absolute text-white font-Domine font-bold text-[2.1rem] md:text-[2.8rem]">
                      {modal.answer[0].d}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
}
