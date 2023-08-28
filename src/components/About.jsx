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

function About() {
  return(
    <div className='h-screen w-auto animate-text Pastel bg-gradient-to-tr from-violet-500 to-orange-300'>  
      <div className='animate-text grid grid-cols-1 place-items-center w-auto h-screen p-4 lg:grid-cols-2'>
      <div className='flex flex-col xl:ml-24'>
        <h1 className='text-center xl:hidden text-white text-4xl w-full mb-3 font-bold'>SOBRE MIM</h1>
        <div className='flex items-center justify-center'>
          <img src={perfil} className='shadow-xl rounded-xl w-2/5 drop-shadow-2xl' />
          <h3 className='text-center lg:text-left text-white text-xs lg:text-4xl min-[414px]:text-sm w-4/5 mt-3 lg:ml-2'>GRADUANDO EM CIÊNCIA DA COMPUTAÇÃO E FORMANDO EM DESENVOLVIMENTO FULLSTACK PELA TRYBE, 1 ANO DE EXPERIÊNCIA COM PROJETOS RESPONSIVOS E ESCALAVÉIS. </h3>
        </div>
        </div>
        <div className='grid grid-cols-1 xl:mr-2 place-items-center xl:scale-[1.4] md:scale-[1.2]'>
          <div>
            <h1 className='text-center text-white text-4xl w-full mt-2 font-bold'>EXPERIÊNCIAS</h1>
            <div className='flex flex-wrap justify-center mt-1 '>
              <div className='m-1 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
                <img src={react} alt="" className='' />
                <h1 className='text-center text-white text-lg'>REACT</h1>
              </div>
              <div className='m-1 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
                <img src={js} alt="" />
                <h1 className='text-center text-white text-lg'>JAVASCRIPT</h1>
              </div>
              <div className='m-1 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
                <img src={type} alt="" />
                <h1 className='text-center text-white text-lg'>TYPESCRIPT</h1>
              </div>
              <div className='m-1 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
                <img src={node} alt="" />
                <h1 className='text-center text-white text-sm'>NODE JS</h1>
              </div>
              <div className='m-1 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
                <img src={tailwind} alt="" />
                <h1 className='text-center text-white text-sm'>TAILWIND</h1>
              </div>
              <div className='m-1 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
                <img src={css} alt="" />
                <h1 className='text-center text-white text-sm'>CSS3</h1>
              </div>
              <div className='m-1 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
                <img src={html} alt="" />
                <h1 className='text-center text-white text-sm'>HTML5</h1>
              </div>   
            </div>
            <div className='flex flex-wrap justify-center mt-1'>
              <h1 className='text-center text-white text-4xl w-full mt-2 font-bold'>FERRAMENTAS</h1>
              <div className='m-1 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
                <img src={docker} alt="" className='' />
                <h1 className='text-center text-white text-xl'>DOCKER</h1>
              </div>
              <div className='m-1 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
                <img src={git} alt="" className='' />
                <h1 className='text-center text-white text-xl'>GIT</h1>
              </div>
              <div className='m-1 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
                <img src={vscode} alt="" className='' />
                <h1 className='text-center text-white text-xl'>VSCODE</h1>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;