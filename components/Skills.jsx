import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
     <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <p className='text-xl tracking-widest uppercase  text-[#5651e5] dark:text-[#01D0DD]'>Skills</p>
      <h2 className='py-4 text-gray-200'>What I can do</h2>
      {/* Grid Container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

       {/* Tech Container */}
       <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-[#01D0DD]">
       <div className="grid gird-cols-2 gap-4 justify-center items-center">
        {/* Tech Image Container */}
        <div className='m-auto'>
         <Image 
         src='/../public/assets/skills/html.png' 
         alt='/' 
         width='64px' 
         height='64px' 
         />
        </div>
        {/* Tech Title Container */}
        <div className='flex flex-col items-center justify-center'>
         <h3>HTML5</h3>
        </div>
       </div>
       </div>

       {/* Tech Container */}
       <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-[#01D0DD]">
       <div className="grid gird-cols-2 gap-4 justify-center items-center">
        {/* Tech Image Container */}
        <div className='m-auto'>
         <Image 
         src='/../public/assets/skills/css.png' 
         alt='/' 
         width='64px' 
         height='64px' 
         />
        </div>
        {/* Tech Title Container */}
        <div className='flex flex-col items-center justify-center'>
         <h3>CSS3</h3>
        </div>
       </div>
       </div>

       {/* Tech Container */}
       <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-[#01D0DD]">
       <div className="grid gird-cols-2 gap-4 justify-center items-center">
        {/* Tech Image Container */}
        <div className='m-auto'>
         <Image 
         src='/../public/assets/skills/javascript.png' 
         alt='/' 
         width='64px' 
         height='64px' 
         />
        </div>
        {/* Tech Title Container */}
        <div className='flex flex-col items-center justify-center'>
         <h3>Javascript</h3>
        </div>
       </div>
       </div>

       {/* Tech Container */}
       <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-[#01D0DD]">
       <div className="grid gird-cols-2 gap-4 justify-center items-center">
        {/* Tech Image Container */}
        <div className='m-auto'>
         <Image 
         src='/../public/assets/skills/react.png' 
         alt='/' 
         width='64px' 
         height='64px' 
         />
        </div>
        {/* Tech Title Container */}
        <div className='flex flex-col items-center justify-center'>
         <h3>React.js</h3>
        </div>
       </div>
       </div>

       {/* Tech Container */}
       <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-[#01D0DD]">
       <div className="grid gird-cols-2 gap-4 justify-center items-center">
        {/* Tech Image Container */}
        <div className='m-auto'>
         <Image 
         src='/../public/assets/skills/tailwind.png' 
         alt='/' 
         width='64px' 
         height='64px' 
         />
        </div>
        {/* Tech Title Container */}
        <div className='flex flex-col items-center justify-center'>
         <h3>TailwindCSS</h3>
        </div>
       </div>
       </div>

       {/* Tech Container */}
       <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-[#01D0DD]">
       <div className="grid gird-cols-2 gap-4 justify-center items-center">
        {/* Tech Image Container */}
        <div className='m-auto'>
         <Image 
         src='/../public/assets/skills/node.png' 
         alt='/' 
         width='64px' 
         height='64px' 
         />
        </div>
        {/* Tech Title Container */}
        <div className='flex flex-col items-center justify-center'>
         <h3>Node.js</h3>
        </div>
       </div>
       </div>

       {/* Tech Container */}
       <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-[#01D0DD]">
       <div className="grid gird-cols-2 gap-4 justify-center items-center">
        {/* Tech Image Container */}
        <div className='m-auto'>
         <Image 
         src='/../public/assets/skills/git.png' 
         alt='/' 
         width='64px' 
         height='64px' 
         />
        </div>
        {/* Tech Title Container */}
        <div className='flex flex-col items-center justify-center'>
         <h3>Git</h3>
        </div>
       </div>
       </div>

       {/* Tech Container */}
       <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-[#01D0DD]">
       <div className="grid gird-cols-2 gap-4 justify-center items-center">
        {/* Tech Image Container */}
        <div className='m-auto'>
         <Image 
         src='/../public/assets/skills/nextjs.png' 
         alt='/' 
         width='64px' 
         height='64px' 
         />
        </div>
        {/* Tech Title Container */}
        <div className='flex flex-col items-center justify-center'>
         <h3>Next.js</h3>
        </div>
       </div>
       </div>

      </div>
     </div>
    </div>
  )
}

export default Skills