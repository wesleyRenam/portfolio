import React from 'react';
import ghibli from '../img/ghibli.png';

function Projects() {
  return(
    <div className='animate-text flex flex-col w-auto h-screen justify-center items-center p-4 Pastel bg-gradient-to-tr from-violet-500 to-orange-300 lg:flex-row justify-center lg:justify-evenly items-center'>
      <div className='flex flex-wrap justify-center
       lg:scale-[1.7] border w-96 h-96'>
        <div className='w-96 h-48 m-2 mb-0 lg:m-0'>
          <img src={ghibli} alt="" className='rounded-xl drop-shadow-2xl' />
        </div>
        <h1 className='h-10 text-3xl font-bold text-white'>GHIBLI LIST PROJECT</h1>
        <h1 className='h-auto text-center w-2/3 text-sm'>PROJETO PARA MOSTRAR O MEU AMOR PELO STUDIO GHIBLI</h1>
      </div>
      <div className='flex flex-wrap justify-center my-2 lg:scale-[1.7] w-96 h-96'>
        <div className='w-96 h-48 m-2 lg:m-0 mb-0'>
          <img src={ghibli} alt="" className='rounded-xl drop-shadow-2xl' />
        </div>
        <h1 className='h-10 text-3xl font-bold text-white'>GHIBLI LIST PROJECT</h1>
        <h1 className='h-auto text-center w-2/3 text-sm'>PROJETO PARA MOSTRAR O MEU AMOR PELO STUDIO GHIBLI</h1>
      </div>
    </div>
  )
}

export default Projects;