import React from 'react';
import perfil from '../img/perfil.jpg'
import css from '../icons/css3.svg'
import html from '../icons/html5.svg'
import js from '../icons/javascript.svg'
import node from '../icons/nodejs.svg'
import react from '../icons/rea.svg'
import tailwind from '../icons/tailwind.svg'
import type from '../icons/type.svg'
import docker from '../icons/docker.svg'
import git from '../icons/git.svg'
import vscode from '../icons/vscode.svg'
import sql from '../icons/sql.svg'

function About() {
  return(
    <div className='h-screen w-auto animate-text Pastel bg-gradient-to-tr from-violet-500 to-orange-300'>  
      <div className='animate-text grid grid-cols-1 place-items-center w-auto h-screen p-4 lg:grid-cols-1'>
        <div className='w-full h-screen grid place-items-center m-0 lg:grid-cols-2'>
          <div className=''>
            <p className='text-base text-center text-teal-200 mb-2 font-montserrat'>Sobre Mim</p>
            <h1 className='text-4xl text-center font-bold text-white'>ME CHAMO <span className='text-teal-200'>WESLEY RENAM</span></h1>
            <p className='text-base text-center text-teal-200 font-montserrat'>21 Anos</p>
            <h2 className='text-xl text-center text-white my-2'>FULLSTACK REACT E NODEJS DEVELOPER</h2>
            <p className='text-sm font-semibold text-center font-montserrat text-white'>Graduando em ciência da computação e formando em fullstack developer pela trybe, contendo 1 ano de experiência com desenvolvimento de softwares responsivos, escaláveis e com alto desempenho</p>
            <img src={perfil} alt='Minha foto de perfil' className='border mt-4 shadow-xl rounded-xl drop-shadow-2xl'/>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default About;