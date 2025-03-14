import React from 'react'
import { jorgejarquin, ecommerceImage, portfolioImage } from '@/components';
import { AnimatedText, FeaturedProjects } from '@/components'
import { useData } from '../context/DataContext'

const imageMap = {
  jorgejarquin,
  ecommerceImage,
  portfolioImage,
};

const Projects = () => {
  const { data, translations } = useData();
  
  return (
    <section id="projects">
      <AnimatedText text={translations.TITLE_PROJECTS}
        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
      />

      <div className='flex flex-col gap-20 p-12'>
        {data.projects?.map((project, index) => (
          <FeaturedProjects
            key={index}
            title={project.name}
            link={project.link}
            github={project.github}
            type={project.type}
            img={imageMap[project.image]}
            summary={translations?.LENGUAGE == "es" ? project.descripcion_es : project.descripcion_en}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects;