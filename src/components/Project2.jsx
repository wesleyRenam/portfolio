import React from 'react';
import ghibli2 from '../img/ghibli2.png';
import ghibli from '../img/ghibli.png';

function Projects() {
  return(
    <div>
      <div className='animate-text grid grid-cols-1 place-items-center w-auto h-screen p-4 Pastel bg-gradient-to-tr from-violet-500 to-orange-300'>
        <a href="https://ghibli-project-9eg6ovxt5-wesleyrenam.vercel.app/home" target="_blank"  rel="noreferrer">
          <div className='w-96 h-96 shadow-3xl rounded-xl p-3'>
            <img src={ghibli} alt="" className='rounded-xl drop-shadow-2xl' />
            <h1 className='text-5xl mt-4 text-left font-bold text-white'>GHIBLI LIST PROJECT</h1>
            <h3 className='text-left text-gray-100 text-sm'>PROJETO PARA MOSTRAR O MEU AMOR PELO STUDIO GHIBLI</h3>
          </div>
        </a>
        <a href="https://ghibli-project-9eg6ovxt5-wesleyrenam.vercel.app/home" target="_blank"  rel="noreferrer">
          <div className='w-96 h-96 shadow-3xl p-3 rounded-xl'>
            <img src={ghibli2} alt="" className='rounded-xl drop-shadow-2xl mt-0' />
            <h1 className='text-5xl mt-4 font-bold text-white'>BATATINHA PROJECT</h1>
            <h3 className='text-left text-gray-100 text-sm'>PROJETO PARA MOSTRAR O MEU AMOR PELO STUDIO GHIBLI</h3>
          </div>
        </a>
      </div>
      
    </div>     
  )
}

export default Projects;