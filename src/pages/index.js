import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import Layout from '@/components/Layout'
import profilePic from '../../public/images/profile/developer-pic.png'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import HearMe from '@/components/HearMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/transitionEffect'
import { useTranslation, useLanguageQuery, LanguageSwitcher, getDefaultLanguage } from 'next-export-i18n'




export default function Home() {
  const { t } = useTranslation();
  const [queryLanguage] = useLanguageQuery();
  
  return (
    <>
      <Head>
        <title>Portfolio Mauro Dietze</title>
        <meta name="description" content="Portfolio Mauro Dietze" />
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="Mauro's Portfolio" className="w-full h-auto lg:hidden md:inline-block md:w-full"
              priority 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text={t('home.title')}
              className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:text-3xl
              '/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                {t('home.text')}
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/CV - Mauro dietze.pdf" target={"_blank"} rel="noreferrer"
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                border-2 border-solid border-transparent 
                dark:bg-light dark:text-dark
                hover:border-dark hover:bg-light hover:text-dark
                dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-2 md:text-base' download={true}
                >{t('home.resButton')}<LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link passHref  href={{ pathname: "mailto:mauro.dietze@gmail.com", query: queryLanguage  }} 
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >{t('home.conButton')}</Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <HearMe/> */}
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="Mauro Dietze" className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}
