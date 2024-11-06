import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profilePic from "@/../public/images/profile/developer-drawing.png"
import { AnimatedText, LinkArrow } from '@/components'
import { useData } from '../context/DataContext'

const Intro = () => {
  const { data, translations } = useData();
  const mail = "mailto:" + data.email;
  return (
    <section id="home" className='flex items-center justify-between w-full lg:flex-col scroll-smooth'>
      <div className='w-1/2 md:w-full'>
        <Image src={profilePic} alt="CodeBucjs" className='"w-full h-auto lg:hidden md:inline-block md:w-full'
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
      <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
        <AnimatedText text={translations.PRESENTATION_HOME} className='!text-6xl !text-left
          xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-2xl sm:!text-3xl
        '/>
        <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
          {translations.RESUME_HOME}
        </p>
        <div className='flex items-center justify-center mt-2 lg:justify-center'>
          <Link href="/MartinRubioCV.pdf" target={"_blank"}
            className='
              flex items-center bg-dark text-light p-2.5 px-6
              rounded-lg text-base font-semibold hover:bg-light hover:text-dark
              border-2 border-solid border-transparent hover:border-dark
              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
              hover:dark:border-light md:p-2  md:px-4 md:text-base whitespace-nowrap
            '
            download={true}
          >
            {translations.DOWNLOAD_CV} <LinkArrow className={"w-6 ml-0.5"} />
          </Link>
          <Link href={mail} target={"_blank"}
            className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base
              p-2 rounded-lg hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark'>
            Contact
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Intro;