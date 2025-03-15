import React from 'react'
import projectPortfolio from "../shared/Images/project_portfolio.PNG"
import { AnimatedText, Project, FeaturedProjects } from '@/components'
import { useData } from '../context/DataContext'

const Projects = () => {
  const { data, translations } = useData();
  
  return (
    <section id="projects" className="scroll-smooth">
      <AnimatedText text={translations.TITLE_PROJECTS}
        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
      />

      <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
        <div className='col-span-12'>
          {data.projects?.map((project, index) => (
            <FeaturedProjects
              key={index}
              title={project.name}
              link={project.link}
              github={project.github}
              type={project.type}
              img={projectPortfolio}
              summary={translations?.LENGUAGE == "es" ? project.descripcion_es : project.descripcion_en}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;