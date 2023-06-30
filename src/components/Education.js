import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { LiIcon } from './LiIcon'
import { useRouter } from 'next/router'
import PagesTexts from '../../public/Texts/PagesTexts'

const Details = ({type, time, place, info}) => {
    const ref = useRef(null)

    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
    )
}

export const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    const { asPath, locale, locales} = useRouter();
    const l = locale === 'en-US' ? PagesTexts.en.about.education : PagesTexts.es.about.education;

  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        {l.title}
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details type={l.edu1.type} time={l.edu1.time} place={l.edu1.place} info={l.edu1.info}/>
                <Details type={l.edu2.type} time={l.edu2.time} place={l.edu2.place} info={l.edu2.info}/>
            </ul>
        </div>
    
    </div>
  )
}
