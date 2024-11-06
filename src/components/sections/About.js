import React from 'react'
import Image from 'next/image'
import profilePic2 from "@/../public/images/profile/developer-picture.jpg"
import { AnimatedNumbers } from '../utils/functions'
import { AnimatedText, Experience, Education, Skills } from '@/components'
import { useData } from '../context/DataContext'

const About = () => {
  const { data, translations } = useData();
  return (
    <section id="about" className="scroll-smooth mt-20">
      <AnimatedText text={translations.TITLE_ABOUT} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
      <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
          <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
            {translations.SUBTITLE_ABOUT}
          </h2>
          <p className='font-medium'>
            {translations.TEXT_ABOUT_PART_1}
          </p>
          <p className='my-4 font-medium'>
            {translations.TEXT_ABOUT_PART_2}
          </p>
          <p className='my-4 font-medium'>
            {translations.TEXT_ABOUT_PART_3}
          </p>
          <p className='font-medium'>
            {translations.TEXT_ABOUT_PART_4}
          </p>
        </div>
        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid borde-dark
          bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
        '>
          <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
          <Image src={profilePic2} alt="MartinRubio" className='w-full h-auto rounded-2xl'
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
          <div className='flex flex-col  items-end justify-center xl:items-center'>
            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
              <AnimatedNumbers value={data.clients} />+
            </span>
            <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:test-sm'>
              {translations.SATISFIED_CLIENTS}
            </h2>
          </div>
          <div className='flex flex-col  items-end justify-center xl:items-center'>
            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
              <AnimatedNumbers value={data.projects_cant} />+
            </span>
            <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:test-sm'>
              {translations.PROJECT_COMPLETED}
            </h2>
          </div>
          <div className='flex flex-col  items-end justify-center xl:items-center'>
            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
              <AnimatedNumbers value={data.years} />+
            </span>
            <h2 className='text-x1 font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:test-sm'>
              {translations.YEARS_EXPERIENCE}
            </h2>
          </div>
        </div>
      </div>
      
      <Skills skills={data.skills} />
      <Experience experiences={data.experiences} />
      <Education educations={data.educations} />
    </section>
  )
}
export default About;