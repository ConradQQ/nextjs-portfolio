import Image from 'next/image';
import React from 'react';
import quoteImg from '../public/assets/projects/quote-gen.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const twitch = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={quoteImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 space-y-5'>
          <h2 className='py-2'>Quote Generator</h2>
          <h3>NextJS / TailwindCSS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4 space-y-5'>
          <p className='text-[#01D0DD] text-xl'>Project</p>
          <h2>Overview</h2>
          <p>
            This appplication was built using NextJS and is styled with
            Tailwind CSS. I built this as a part of the FreeCodeCamp.org Front End Development Libraries certificaiton. <a className='text-[#01D0DD] hover:underline font-bold' href="https://www.freecodecamp.org/" target='_blank noopener noreferrer'>Freecodecamp.org</a> is an incredible platform run entirely by indviduals dedicated to teaching people to code. Definitely check them out and if you believe in their mission donate!
          </p>
          <a
            href='https://conradqq.github.io/quote-gen'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://quote-gen-brown.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 text-[#01D0DD]'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NextJS
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TailwindCSS
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer hover:text-[#01D0DD]'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default twitch;
