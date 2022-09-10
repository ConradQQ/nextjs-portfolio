import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/headshot.png'

const Contact = () => {

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase  text-[#01D0DD]'>
          Contact
        </p>
        <h2 className='py-4 text-gray-100'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-black rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2 text-white'>Connor Hawkes</h2>
                <p className='text-gray-100'>Front-End Developer</p>
                <p className='py-4 text-gray-100'>
                  I am available for freelance or full/part-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8 text-gray-100'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/connor-hawkes/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#01D0DD] shadow-black text-[#7A4F85]'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/conradqq'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#01D0DD] shadow-black text-[#7A4F85]'>
                      <FaGithub />
                    </div>
                  </a>

                  <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#01D0DD] shadow-black text-[#7A4F85]'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
                    <a>
                      <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#01D0DD] shadow-black text-[#7A4F85]'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-black rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 '>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-100 bg-inherit'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 bg-inherit'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 bg-[]'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 bg-inherit'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 bg-[]'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 bg-inherit'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 bg-[]'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300 bg-inherit'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4  mt-4 shadow-black bg-[#01D0DD] text-[#7A4F85]'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#01D0DD] animate-bounce'>
                <HiOutlineChevronDoubleUp
                  className='text-[#7A4F85]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;