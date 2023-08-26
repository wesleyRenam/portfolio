import React from 'react';
import ghibli2 from '../img/ghibli2.png';
import ghibli from '../img/ghibli.png';
import githubIcon from '../img/square-github.svg';

function Projects() {
  return(
    <div className='Pastel bg-gradient-to-tr from-violet-500 to-orange-300 '>
      <div className='animate-text grid grid-cols-1 place-items-center w-auto h-screen p-4 lg:grid-cols-2'>
        <a href="https://ghibli-project-9eg6ovxt5-wesleyrenam.vercel.app/home" target="_blank"  rel="noreferrer" className='2xl:scale-[2.0] 2xl:hover:scale-[2.1] xl:scale-[1.6] xl:hover:scale-[1.7] lg:scale-[1.3] lg:hover:scale-[1.4] ease-in-out duration-300 lg:hover:border rounded-xl'>
          <div className='max-w-sm tracking-tight shadow-3xl rounded-xl p-4'>
            <img src={ghibli} alt="" className='rounded-xl drop-shadow-2xl' />
            <div className='flex items-end'>
              <h1 className='text-5xl mt-4 text-left font-bold text-white'>GHIBLI LIST PROJECT</h1>
              <a href="https://github.com/wesleyRenam" target="_blank"  rel="noreferrer">
                <img src={githubIcon} alt='githubIcon' className='w-12 mb-3 mr-6 lg:w-20  lg:mt-5 md:mt-5 hover:scale-125 ease-in-out duration-300'/>
              </a>
            </div>
            <h3 className='text-left text-gray-100 text-sm'>PROJETO PARA MOSTRAR O MEU AMOR PELO STUDIO GHIBLI</h3>
          </div>
        </a>
        <a href="https://ghibli-project-9eg6ovxt5-wesleyrenam.vercel.app/home" target="_blank"  rel="noreferrer" className='2xl:scale-[2.0] 2xl:hover:scale-[2.1] xl:scale-[1.6] xl:hover:scale-[1.7] lg:scale-[1.3] lg:hover:scale-[1.4] ease-in-out duration-300 lg:hover:border rounded-xl'>
          <div className='max-w-sm tracking-tight shadow-3xl rounded-xl p-4'>
            <img src={ghibli} alt="" className='rounded-xl drop-shadow-2xl' />
            <div className='flex items-end'>
              <h1 className='text-5xl mt-4 text-left font-bold text-white'>GHIBLI LIST PROJECT</h1>
              <a href="https://github.com/wesleyRenam" target="_blank"  rel="noreferrer">
                <img src={githubIcon} alt='githubIcon' className='w-12 mb-3 mr-6 lg:w-20  lg:mt-5 md:mt-5 hover:scale-125 ease-in-out duration-300'/>
              </a>
            </div>
            <h3 className='text-left text-gray-100 text-sm'>PROJETO PARA MOSTRAR O MEU AMOR PELO STUDIO GHIBLI</h3>
          </div>
        </a>
      </div>

      <div className='animate-text grid grid-cols-1 place-items-center w-auto h-screen p-4 lg:grid-cols-2 min-[375px]:mt-5'>
      <a href="https://ghibli-project-9eg6ovxt5-wesleyrenam.vercel.app/home" target="_blank"  rel="noreferrer" className='2xl:scale-[2.0] 2xl:hover:scale-[2.1] xl:scale-[1.6] xl:hover:scale-[1.7] lg:scale-[1.3] lg:hover:scale-[1.4] ease-in-out duration-300 lg:hover:border rounded-xl'>
          <div className='max-w-sm tracking-tight shadow-3xl rounded-xl p-4'>
            <img src={ghibli} alt="" className='rounded-xl drop-shadow-2xl' />
            <div className='flex items-end'>
              <h1 className='text-5xl mt-4 text-left font-bold text-white'>GHIBLI LIST PROJECT</h1>
              <a href="https://github.com/wesleyRenam" target="_blank"  rel="noreferrer">
                <img src={githubIcon} alt='githubIcon' className='w-12 mb-3 mr-6 lg:w-20  lg:mt-5 md:mt-5 hover:scale-125 ease-in-out duration-300'/>
              </a>
            </div>
            <h3 className='text-left text-gray-100 text-sm'>PROJETO PARA MOSTRAR O MEU AMOR PELO STUDIO GHIBLI</h3>
          </div>
        </a>
        <a href="https://ghibli-project-9eg6ovxt5-wesleyrenam.vercel.app/home" target="_blank"  rel="noreferrer" className='2xl:scale-[2.0] 2xl:hover:scale-[2.1] xl:scale-[1.6] xl:hover:scale-[1.7] lg:scale-[1.3] lg:hover:scale-[1.4] ease-in-out duration-300 lg:hover:border rounded-xl'>
          <div className='max-w-sm tracking-tight shadow-3xl rounded-xl p-4'>
            <img src={ghibli} alt="" className='rounded-xl drop-shadow-2xl' />
            <div className='flex items-end'>
              <h1 className='text-5xl mt-4 text-left font-bold text-white'>GHIBLI LIST PROJECT</h1>
              <a href="https://github.com/wesleyRenam" target="_blank"  rel="noreferrer">
                <img src={githubIcon} alt='githubIcon' className='w-12 mb-3 mr-6 lg:w-20  lg:mt-5 md:mt-5 hover:scale-125 ease-in-out duration-300'/>
              </a>
            </div>
            <h3 className='text-left text-gray-100 text-sm'>PROJETO PARA MOSTRAR O MEU AMOR PELO STUDIO GHIBLI</h3>
          </div>
        </a>
      </div>
      <div className='hidden h-16 min-[375px]:block'></div>
    </div>     
  )
}

export default Projects;