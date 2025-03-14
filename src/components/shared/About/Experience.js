import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { LiIcon } from '@/components'
import { useData } from '@/components/context/DataContext';

const Details = ({experience, translations}) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex felx-col items-center justify-between md:w-[80%]'>
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y:50 }}
        whileInView={{ y:0 }}
        transition={{ duration:0.5, type:"spring" }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{translations?.LENGUAGE == "es" ? experience?.position_es : experience?.position_en}&nbsp;
          <a href={"/"}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
          >@{experience?.company}</a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {experience?.time} | {experience?.address}
        </span>
        <p className='font-medium w-full md:text-sm'> 
          {translations?.LENGUAGE == "es" ? experience?.work_es : experience?.work_en} 
        </p>
      </motion.div>
    </li>
  );
};

const Experience = ({experiences}) => {
  const ref = useRef(null);
  const { translations } = useData();
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  if (!experiences || experiences.length === 0) {
    return <div>Loading experiences...</div>;
  }

  return (
    <div className='my-32'>
      <h2 className='font-hold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        {translations.TITLE_EXPERIENCE}
      </h2>

      <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div 
          ref={ref}
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          ' 
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>

          {experiences.map((experience, index) => (
            <Details key={index} experience={experience} translations={translations} />
          ))}

        </ul>
      </div>
    </div>
  )
}

export default Experience