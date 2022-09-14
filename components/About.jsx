import React from 'react'
import Image from 'next/image'
import headshot from '../public/assets/headshot.png'
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex item-center py-16 '>
     <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
      <div className='col-span-2'>
       <p className='uppercase text-xl tracking-widest text-[#01D0DD]'>About</p>
       <h2 className='py-4 text-white'>Who I am</h2>
       <p className='py-2 text-[#01D0DD] font-bold italic'>\\ I am not your normal developer</p>
       <p className='py-2 '>
       Believe it or not, I actually got my degree in Anthropology in the hopes of becoming a publishing research Archaeologist. However, life took a different turn and I discovered that I wasn&apos;t very interested in being an Archaeologist at all. But it was worth it, along the way I met my best bud and now wife Trina, and have since had our son Milo (and also got to do loads of cool archaeology-related stuff and hangout with plenty of great people). Life is great.
        </p>
       <p className='py-2 '>
       Turns out, what I truly wanted to be was a software engineer and general tech nerd. I&apos;ve always loved messing around on my computer, experimenting with all sorts of software, scripting/programming languages, and operating systems (I'm a massive linux fanatic). So it only makes sense that I would want to do what I love for a living. So here I am today!
        </p>
        <p className='py-2'>Oh, and maybe some of you have already noticed, but I have a holdover passion from my childhood for Wild Berry Poptarts & their aesthetic. That&apos;s why I made my portoflio Wildberry Poptart Themed! :)</p>
        <Link href='/#projects'>
       <p className='py-2  underline cursor-pointer hover:text-[#01D0DD]'>Check out some of my latest projects</p>
       </Link>
      </div>
      {/* Image Container */}
      <div className='w-full h-auto m-auto  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
       <Image className='rounded-xl' src={headshot} alt="" />
       
      </div>
     </div>
    </div>
  )
}

export default About