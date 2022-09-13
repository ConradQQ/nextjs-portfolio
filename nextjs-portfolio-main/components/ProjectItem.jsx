import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-fit w-full shadow-xl shadow-black rounded-xl group hover:bg-gradient-to-r from-[#01D0DD] to-[#709dff] hover:scale-105 ease-in duration-200'>
    <Image className='rounded-xl group-hover:opacity-10 w-[100%] h-[100%]' src={backgroundImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-[#7A4F85] hover:text-white hover:scale-110'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem