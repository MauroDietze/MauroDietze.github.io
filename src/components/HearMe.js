import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'
import { useTranslation } from 'next-export-i18n';

const HearMe = () => {
  const { t } = useTranslation();

  return (
    <div className='fixed left-4 bottom-4 flex items-cente justify-center overflow-hidden 
    md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0'>
        <div className='w-48 h-autoflex items-cente justify-center relative md:w-24'>
            <CircularText className={"fill-dark animate-spin-slow dark:fill-light"}/>
            <Link href={"mailto:mauroid123@gmail.com"} className='flex items-center justify-center absolute left-1/2 top-1/2 
            -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark
            w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:w-12 md:h-12 md:text-[10px]'>
                {t('hearMe.hear')}
                
            </Link>

        </div>
    </div>
  )
}

export default HearMe