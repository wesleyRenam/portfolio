import React from 'react';
import ghibli from '../img/ghibli.webp';
import githubIcon from '../img/square-github.svg';

const ProjectCard = ({ title, description, imgSrc, projectLink, githubLink }) => (
  <a 
    href={projectLink} 
    target="_blank"  
    rel="noreferrer" 
    className='h-auto ease-in-out duration-300 lg:hover:border rounded-xl '
  >
    <div className='max-w-sm tracking-tight shadow-3xl rounded-xl p-4 m-0'>
      <img src={imgSrc} alt={`${title} image`} className='rounded-xl drop-shadow-2xl' />
      <div className='flex items-center mt-3'>
        <h1 className='text-5xl text-left font-bold text-white font-lato'>{title}</h1>
        <a href={githubLink} target="_blank" rel="noreferrer" className='w-1/2 ml-4 '>
          <img 
            src={githubIcon} 
            alt='Github Icon' 
            className='w-full hover:scale-125 ease-in-out duration-300'
          />
        </a>
      </div>
      <h2 className='text-left text-gray-100 text-sm'>{description}</h2>
    </div>
  </a>
);

function Projects() {
  const projects = [
    {
      title: 'GHIBLI LIST PROJECT',
      description: 'PROJETO PARA MOSTRAR O MEU AMOR PELO STUDIO GHIBLI',
      imgSrc: ghibli,
      projectLink: 'https://ghibli-project-9eg6ovxt5-wesleyrenam.vercel.app/home',
      githubLink: 'https://github.com/wesleyRenam',
    },
    {
      title: 'TASTE HUB PROJECT',
      description: 'PLATAFORMA DE GASTRONOMIA COM AMOR PELO STUDIO GHIBLI',
      imgSrc: ghibli,
      projectLink: 'https://ghibli-project-9eg6ovxt5-wesleyrenam.vercel.app/home',
      githubLink: 'https://github.com/wesleyRenam',
    },
    {
      title: 'TASTE HUB PROJECT',
      description: 'PLATAFORMA DE GASTRONOMIA COM AMOR PELO STUDIO GHIBLI',
      imgSrc: ghibli,
      projectLink: 'https://ghibli-project-9eg6ovxt5-wesleyrenam.vercel.app/home',
      githubLink: 'https://github.com/wesleyRenam',
    },
    {
      title: 'TASTE HUB PROJECT',
      description: 'PLATAFORMA DE GASTRONOMIA COM AMOR PELO STUDIO GHIBLI',
      imgSrc: ghibli,
      projectLink: 'https://ghibli-project-9eg6ovxt5-wesleyrenam.vercel.app/home',
      githubLink: 'https://github.com/wesleyRenam',
    }
  ];

  return (
    <div className='Pastel bg-gradient-to-tr from-violet-500 to-orange-300 '>
      <div className='animate-text grid grid-cols-1 place-items-center w-auto h-auto p-4 lg:grid-cols-3'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
