// Components
import Layout from '@/components/layout/Layout';
import Input from '@/components/elements/Input';
import Textarea from '@/components/elements/Textarea';
import Button from '@/components/elements/Button';

export default function about() {
  return (
    <Layout title={'Contact '}>
      <div className="contact flex flex-col md:flex-row gap-x-[4rem]">
        <div className="md:w-1/2">
          <div className="flex flex-col items-center md:block">
            <h3>Contact Us</h3>
            <hr />
          </div>
          <p className="text-justify md:text-left">
            Want to work with us to spice up your lessons or want to shedule a visit to the cafe? Use the contact form
            to send us an email or reach us via our contact below
          </p>
          <br />
          <br />
          <p className="text-justify md:text-left">
            Suite A6, Kabom Court, Plot 104 Gado Nasko Road (2/1). <br />
            By Phase IV Bridge, Opposite Unity Clinic. Kubwa, Abuja
          </p>
          <ul>
            <li>
              <svg className="h-[1.6rem] w-[1.6rem]">
                <use href="/assets/svg/sprite.svg#icon-phone" />
              </svg>
              08025182324
            </li>
            <li>
              <svg className="h-[1.6rem] w-[1.6rem]">
                <use href="/assets/svg/sprite.svg#icon-phone" />
              </svg>
              08094931619
            </li>
            <li>
              <svg className="h-[1.6rem] w-[1.6rem]">
                <use href="/assets/svg/sprite.svg#icon-phone" />
              </svg>
              lyndemedutainment@gmail.com
            </li>
          </ul>
        </div>
        <form action="" className="relative md:w-1/2 flex flex-col space-y-[3.2rem]">
          <div className="absolute z-[-1] top-[-8rem] right-0 w-full h-full opacity-30">
            <svg className="w-full h-full">
              <use href="/assets/svg/sprite.svg#contact-image" />
            </svg>
          </div>
          <Input placeholder={'Name'} type={'text'} required name={'name'} className={'bg-transparent'} />
          <Input placeholder={'Email'} type={'email'} required name={'email'} className={'bg-transparent'} />
          <Textarea
            placeholder={'Message'}
            type={'text'}
            required
            name={'message'}
            className={'bg-transparent h-[16rem]'}
          />
          <Button className={'bg-[#0202cb] text-white'}>Send</Button>
        </form>
      </div>
    </Layout>
  );
}
