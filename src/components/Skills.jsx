import React from "react";
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

function Skills() {
  return(
    <div className='grid grid-cols-1 place-items-center xl:-mt-32'>
      <div>
        <h1 className='text-center text-white text-5xl mt-4 w-full font-lato font-bold xl:text-8xl'>EXPERIÊNCIAS</h1>
        <div className='flex flex-wrap justify-center xl:my-10 '>
          <div className='m-1 xl:m-2 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
            <img src={react} alt="React Icon" className='xl:w-36' />
            <h1 className='text-center text-white text-lg font-montserrat'>REACT</h1>
          </div>
          <div className='m-1 xl:m-2 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
            <img src={js} alt="JavaScript Icon" className="xl:w-36"/>
            <h1 className='text-center text-white text-lg font-montserrat'>JAVASCRIPT</h1>
          </div>
          <div className='m-1 xl:m-2 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
            <img src={type} alt="TypeScript Icon" className="xl:w-36"/>
            <h1 className='text-center text-white text-lg font-montserrat'>TYPESCRIPT</h1>
          </div>
          <div className='m-1 xl:m-2 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
            <img src={node} alt="NodeJs Icon" className="xl:w-36" />
            <h1 className='text-center text-white text-sm font-montserrat'>NODE JS</h1>
          </div>
          <div className='m-1 xl:m-2 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
            <img src={tailwind} alt="TailWind Icon" className="xl:w-36" />
            <h1 className='text-center text-white text-sm font-montserrat'>TAILWIND</h1>
          </div>
          <div className='m-1 xl:m-2 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
            <img src={css} alt="CSS3 Icon" className="xl:w-36" />
            <h1 className='text-center text-white text-sm font-montserrat'>CSS3</h1>
          </div>  
          <div className='m-1 xl:m-2 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
            <img src={sql} alt="MySql Icon" className="xl:w-36" />
            <h1 className='text-center text-white text-sm font-montserrat'>MYSQL</h1>
          </div> 
            
        </div>
        <div className='flex flex-wrap justify-center mt-1  '>
          <h1 className='text-center text-white text-5xl w-full mt-2 font-lato font-bold xl:text-8xl '>FERRAMENTAS</h1>
          <div className='m-1 xl:m-2 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
            <img src={docker} alt="Dcoker Icon" className="xl:w-36" />
            <h1 className='text-center text-white text-xl font-montserrat'>DOCKER</h1>
          </div>
          <div className='m-1 xl:m-2 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
            <img src={git} alt="GIT Icon" className="xl:w-36" />
            <h1 className='text-center text-white text-xl font-montserrat'>GIT</h1>
          </div>
          <div className='m-1 xl:m-2 shadow-xl rounded-xl p-2 flex items-center flex-col hover:scale-[1.1] ease-in-out duration-300'>
            <img src={vscode} alt="VsCode Icon" className="xl:w-36" />
            <h1 className='text-center text-white text-xl font-montserrat'>VSCODE</h1>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Skills;