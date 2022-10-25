// Next JS
import Link from 'next/link';

// Components
import Container from '@/components/Container';

export default function Footer() {
  return (
    <footer className="footer">
      <Container className={'flex flex-col md:flex-row gap-x-[8rem]'}>
        <div className="bg-white w-[40%] border-t-[1.6rem] border-[#ff6300] p-[2.4rem]">
          <svg className="h-[16rem] w-[16rem]">
            <use href="/assets/svg/sprite.svg#logo-color" />
          </svg>
          <p className="font-Nunito">
            Lyndem Edutainment is an educational service provider that engenders learning through the art of interactive
            play using educational table top games and activities
          </p>
          <div className="flex flex-row gap-x-[1.6rem] mt-[2.4rem]">
            <svg className="h-[2.4rem] w-[2.4rem]">
              <use href="/assets/svg/sprite.svg#icon-in" />
            </svg>
            <svg className="h-[2.4rem] w-[2.4rem]">
              <use href="/assets/svg/sprite.svg#icon-fb" />
            </svg>
            <svg className="h-[2.4rem] w-[2.4rem]">
              <use href="/assets/svg/sprite.svg#icon-tw" />
            </svg>
          </div>
        </div>

        <div className="w-[60%] mt-[4rem] md:mt-[0]">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[50%]">
              <h4>Important Links</h4>
              <hr className="mt-[1.6rem] md:w-1/2" />
              <ul className="flex flex-row md:flex-col mb-[4rem] md:mb-[0] gap-x-[3.2rem] md:gap-x-[0] md:mt-[1.6rem] md:space-y-[1rem]">
                <li className="text-white">
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li></li>
              </ul>
            </div>

            <div className="md:w-[50%]">
              <h4>Contact Us</h4>
              <hr className="mt-[1.6rem] md:w-1/2" />
              <ul>
                <li className="mb-[2.4rem]">
                  Suite A6, Kabom Court, <br /> Plot 104 Gado Nasko Road (2/1) <br /> By Phase IV Bridge, Opposite Unity
                  Clinic. Kubwa, Abuja
                </li>
                <div className="flex flex-wrap gap-x-[2.4rem]">
                  <li className="flex items-center gap-x-[.8rem] md:mb-[1.6rem] mb-[0]">
                    <svg className="h-[1.6rem] w-[1.6rem]">
                      <use href="/assets/svg/sprite.svg#icon-phone" />
                    </svg>
                    08025182324
                  </li>
                  <li className="flex items-center gap-x-[.8rem]">
                    <svg className="h-[1.6rem] w-[1.6rem]">
                      <use href="/assets/svg/sprite.svg#icon-phone" />
                    </svg>
                    08094931619
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <hr className="mt-[4rem]" />
          <div className="text-center md:text-left mt-[4.8rem] mt:mb-[0]">
            <p className="text-white font-Nunito font-normal text-[1.4rem] md:text-[1.8rem]">
              <span className="text-[#ff6300]">© </span>Lyndem Edutainment. All Rights Reserved
            </p>
            <p className="text-white font-Nunito font-normal text-[1.4rem] md:text-[1.8rem]">
              Designed and Developed by{' '}
              <strong className="text-[#ff6300]">
                <a href="https://joelebukatobi.dev">JetDev</a>
              </strong>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
