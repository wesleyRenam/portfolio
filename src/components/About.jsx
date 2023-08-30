import React from 'react';
import perfil from '../img/perfil-1.webp'
import linkedinIcon from '../icons/linkedin.svg';
import githubIcon from '../icons/github.svg';
import Skills from './Skills'

function About() {
  return(
    <div className='bg-cover bg-auto min-h-screen w-auto animate-text Pastel bg-gradient-to-tr from-violet-500 to-orange-300'>  
      <div className='animate-text grid grid-cols-1 place-items-center w-auto h-screen p-4 pt-1'>
        <div className='w-full h-screen grid place-items-center m-0 lg:grid-cols-2 xl:w-2/3'>
          <div className='xl:order-last xl:ml-4'>
            <p className='text-base text-center xl:text-left font-semibold text-teal-200 mb-2 font-montserrat xl:text-lg m-0'>Sobre Mim</p>
            <h1 className='text-4xl text-center font-bold xl:text-left text-white font-lato xl:text-5xl'>ME CHAMO <span className='text-teal-200'>WESLEY RENAM</span></h1>
            <h2 className='text-xl text-center text-white xl:text-left my-2 font-lato xl:text-2xl'>FULLSTACK REACT E NODEJS DEVELOPER</h2>
            <p className='text-sm text-center font-montserrat text-white xl:text-left xl:text-lg '>Graduando em ciência da computação e formando em fullstack developer pela trybe, contendo 1 ano de experiência com desenvolvimento de softwares responsivos, escaláveis e com alto desempenho tenho um prazer enorme em resolver problemas e aprender novas tecnologias.</p>
            <div className='flex mt-2 justify-around'>
              <a href="https://www.linkedin.com/in/wesleyrenam/" target="_blank"  rel="noreferrer">
                <img src={linkedinIcon}  alt='linkedinIcon' className='w-12 lg:w-24 ml-4 lg:mt-5 md:mt-5 hover:scale-125 ease-in-out duration-300 text-blue-500 fill-current'/>
              </a>
              <a href="https://github.com/wesleyRenam" target="_blank"  rel="noreferrer">
                <img src={githubIcon}  alt='githubIcon' className='w-12 lg:w-24 ml-4 lg:mt-5 md:mt-5 hover:scale-125 ease-in-out duration-300 text-blue-500 fill-current '/>
              </a>
            </div>
          </div>          
          <img src={perfil} alt='Minha foto de perfil' className='mt-4 shadow-xl rounded-xl drop-shadow-2xl w-4/5 xl:w-full hover:border-white hover:shadow-white duration-300 ease-in-out'
          />
        </div>
      </div>
      <Skills />
    </div>
  )
}

export default About;