import React from 'react';
import linkedinIcon from '../img/linkedin.svg'
import githubIcon from '../img/github.svg'
import cvIcon from '../img/cv.svg'

function Home() {
  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
        <div className='transform scale-150'>
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-smp font-semibold font-roboto text-white font-sans ml-2">PRAZER, ME CHAMO WESLEY E SOU </h1>
          <div className='flex items-center'>
            <h1 className="font-bold text-9xl text-white">REACT </h1>
            <a href="https://www.linkedin.com/in/wesleyrenam/" target="_blank"  rel="noreferrer">
              <img src={linkedinIcon} alt='linkedinIcon' className='w-20 ml-4 mt-5 hover:scale-125 ease-in-out duration-300'/>
            </a>
            <a href="https://github.com/wesleyRenam" target="_blank"  rel="noreferrer">
              <img src={githubIcon} alt='githubIcon' className='w-20 ml-4 mt-5 hover:scale-125 ease-in-out duration-300'/>
            </a>
            <a href={require('../cv.pdf')} target="_blank"  rel="noreferrer">
              <img src={cvIcon} alt='cvIcon' className='w-16 ml-4 mt-5 hover:scale-125 ease-in-out duration-300'/>
            </a>
          </div>
          <h1 className="font-bold text-9xl text-white">DEVELOPER </h1>
          <div id='descricao' className='ml-auto flex mt-2 w-96 '>
          <h1 className="font-bold text-end text-sm text-white">TENHO 21 ANOS, CURSANDO CIÊNCIA DA COMPUTAÇÃO E COM 1 ANO DE EXPERIÊNCIA COM PROJETOS PESSOAIS NA TRYBE. </h1>
        </div>
        </div>
      </div>
  );
}

export default Home;