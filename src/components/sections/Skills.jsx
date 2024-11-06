import React from 'react'
import { AnimatedText, Skill } from '@/components'
import { useData } from '@/components/context/DataContext';

const Skills = ({ skills }) => {
  const { translations } = useData();

  if (!skills || skills.length === 0) {
    return <div>Loading skills...</div>;
  }

  return (
    <section id="skills" className="scroll-smooth">
      <AnimatedText text={translations.TITLE_SKILLS} className='mt-16 mb-5 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />

      <div className='grid w-full grid-cols-3'>
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </section>
  )
}

export default Skills