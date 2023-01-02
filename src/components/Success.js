// Next JS
import { useRouter } from 'next/router';
//
export default function Host({ modal, caption, message }) {
  const pathname = useRouter().pathname;
  return (
    <div
      className={
        modal
          ? 'success fixed top-0 left-0 h-[100vh] w-[100vw] bg-[#080808]/50 z-[1000] flex items-center justify-center'
          : 'hidden'
      }
    >
      <main className="flex flex-col items-center text-center bg-[#45024c] px-[1.6rem] py-[4rem] space-y-[1.6rem] w-full mx-[3.2rem] md:w-1/4 md:mx-0 text-white rounded-[.4rem] absolute">
        <div className="absolute top-[1.6rem] right-[1.6rem]">
          <a className="text-[2.1rem]" href={`${pathname}`}>
            &#x2715;
          </a>
        </div>
        <h5 className="font-semibold">{caption}</h5>
        <hr className="w-1/3 h-[.16rem] border-none outline-none bg-[#ff6300]" />
        <p className="w-3/4 text-[1.6rem] font-normal">{message}</p>
      </main>
    </div>
  );
}
