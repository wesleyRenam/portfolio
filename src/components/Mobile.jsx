import React from 'react';
import linkedinIcon from '../img/linkedin.svg';
import githubIcon from '../img/github.svg';
import cvIcon from '../img/cv.svg';
import '../custom.css';

function Mobile() {
  return (
  <div className='flex flex-col w-auto h-screen justify-center items-center p-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black mix-blend-exclusion'>
  <div className='flex flex-col items-start lg:scale-150 md:scale-120'>
    <h1 className="animate-typingMobile lg:animate-typing md:animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-smp font-semibold font-roboto text-white font-sans">PRAZER, ME CHAMO WESLEY RENAM E SOU</h1>
      <div className='flex items-center'>
        <h1 className="font-bold text-6xl lg:text-9xl md:text-9xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">REACT </h1>
        <a href="https://www.linkedin.com/in/wesleyrenam/" target="_blank"  rel="noreferrer">
          <img src={linkedinIcon} alt='linkedinIcon' className='w-8 lg:w-20 ml-4 lg:mt-5 md:mt-5 hover:scale-125 ease-in-out duration-300'/>
        </a>
        <a href="https://github.com/wesleyRenam" target="_blank"  rel="noreferrer">
          <img src={githubIcon} alt='githubIcon' className='w-8 lg:w-20 ml-4 lg:mt-5 md:mt-5 hover:scale-125 ease-in-out duration-300'/>
        </a>
        <a href={require('../cv.pdf')} target="_blank"  rel="noreferrer">
          <img src={cvIcon} alt='cvIcon' className='w-6 lg:w-16 ml-4 lg:mt-5 md:mt-5 hover:scale-125 ease-in-out duration-300'/>
        </a>
      </div>
      <h1 className="font-bold text-6xl lg:text-9xl md:text-9xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">DEVELOPER </h1>
      <div className='text-xs ml-auto mt-2 flex justify-end font-semibold text-right font-roboto text-white font-sans w-72 lg:flex lg:w-96 lg:justify-end md:flex'>
         <h1 className="link-underline link-underline-black font-bold text-end text-xs text-white ">TENHO 21 ANOS, CURSANDO CIÊNCIA DA COMPUTAÇÃO E COM 1 ANO DE EXPERIÊNCIA COM PROJETOS PESSOAIS NA TRYBE. </h1>
      </div>
    </div>
    
  </div>
  )
}

export default Mobile;