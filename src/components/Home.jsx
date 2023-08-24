import React from 'react';
import linkedinIcon from '../img/linkedin.svg'
import githubIcon from '../img/github.svg'
import cvIcon from '../img/cv.svg'

function Home() {
  return (
    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500'>
      <div className='flex w-screen h-screen justify-center items-center'>
        <div>
          <div className='flex items-center '>
            <h1 className="font-bold text-9xl">REACT </h1>
            <a href="https://www.linkedin.com/in/wesleyrenam/" target="_blank"  rel="noreferrer">
              <img src={linkedinIcon} alt='linkedinIcon' className='w-20 ml-4 mt-5'/>
            </a>
            <a href="https://github.com/wesleyRenam" target="_blank"  rel="noreferrer">
              <img src={githubIcon} alt='githubIcon' className='w-20 ml-4 mt-5'/>
            </a>
            <a href={require('../cv.pdf')} target="_blank"  rel="noreferrer">
              <img src={cvIcon} alt='cvIcon' className='w-16 ml-4 mt-5'/>
            </a>
          </div>
          <h1 className="font-bold text-9xl">DEVELOPER </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;