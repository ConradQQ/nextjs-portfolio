import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import landingPageImg from '../public/assets/projects/tailwind-landing-page.png';
import reactImg from '../public/assets/projects/react-portfolio.png'
import conradqqImg from '../public/assets/projects/conradqq.png'
import quoteImg from '../public/assets/projects/quote-gen.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#01D0DD]'>
          Projects
        </p>
        <h2 className='py-4 text-gray-100'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Tailwind CSS Landing Page'
            backgroundImg={landingPageImg}
            projectUrl='/landingPage'
            tech='HTML5 / TailwindCSS'
          />
          <ProjectItem
            title='Mock React Portfolio'
            backgroundImg={reactImg}
            projectUrl='/react-portfolio'
            tech='ReactJS / Bootstrap5 / EmailJS / LeafletJS'

          />
          <ProjectItem
            title='conradqq.io'
            backgroundImg={conradqqImg}
            projectUrl='conradqq'
            tech='NextJS / TailwindCSS / EmailJS'

          />
          <ProjectItem
            title='Inspirational Quote Generator'
            backgroundImg={quoteImg}
            projectUrl='/quote-gen'
            tech='NextJS / TailwindCSS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;