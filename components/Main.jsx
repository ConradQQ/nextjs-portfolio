import Link from 'next/link';
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

const Main = () => {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const handleHide = () => {
      if (window.scrollY >= 625) {
        setHide(true)
      } else {
        setHide(false)
      }
    }
    window.addEventListener('scroll', handleHide)
  }, [])

  return (
    <div id='main' className='w-full h-screen text-center relative overflow-hidden'>
     <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
      <div>
       <p className='uppercase text-sm tracking-widest text-[#01D0DD]'>LETS BUILD SOMETHING TOGETHER</p>
       <h1 className='py-4  text-white z-100'>Hi, I&apos;m <span className=' text-[#01D0DD]'>Connor</span></h1>
       <h1 className="py-2  text-white z-100">A Front-End Web Deveolper</h1>
       <p className="py-4  max-w-[70%] m-auto text-white">
        I&apos;m a front-end web deveolper specializing in building (and occasionally desigining) exceptional digital experiences. Currently, I&apos;m focused on building responsive front-end web applicaitons while learning back-end technologies.
       </p>
       {/* Social Links Container */}
       <div className='flex items-center justify-between max-w-screen-xl md:max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/connor-hawkes/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg  shadow-black bg-[#01D0DD] text-[#7A4F85] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/ConradQQ'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg  shadow-black bg-[#01D0DD] text-[#7A4F85] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg  shadow-black bg-[#01D0DD] text-[#7A4F85] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg  shadow-black bg-[#01D0DD] text-[#7A4F85] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-[-22%] md:mt-[-8%] lg:mt-[-6%] xl:mt-[-5%]'>
          <Link href='/#about'>
            <a>
              <div className={hide
                ?'hidden'
                :'hidden md:block rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#01D0DD] animate-bounce'}>
                <HiOutlineChevronDoubleDown
                  className='text-[#7A4F85]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
        {/* Lower Poptart Container */}
        <div className='hidden md:block fixed right-[-1%] bottom-[-5%] cursor-pointer'>
        <Link href='/#contact' >
      <Image 
      className='rotate-[90deg] translate-x-6 translate-y-3'
      src="/../public/assets/poptart.png"
      alt="/" 
      width='225' 
      height='200' />
      </Link>
        </div>
    </div>
  );
};

export default Main