import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/transitionEffect'
import { useRouter } from 'next/router'
import PagesTexts from '../../public/Texts/PagesTexts'

const FramerImage = motion(Image);


const Project  = ({type, title, img, link, github}) => {
    const { asPath, locale, locales} = useRouter;
    const l = locale === 'en-US' ? PagesTexts.en.projects : PagesTexts.es.projects;
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light
        p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-2 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[102%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link passHref href={link} target="_blank" className='w-full cursos-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link passHref href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link passHref href={link} target="_blank" className='text-lg font-semibold underline md:text-base'>{l.button2}</Link>
                    <Link passHref href={github} target="_blank" className="w-8 md:w-6"><GithubIcon/></Link>
                </div>
            </div>
        </article>

    )
}
const FeaturedProject = ({type, title, summary, img, link, github}) => {
    const { asPath, locale, locales} = useRouter;
    const l = locale === 'en-US' ? PagesTexts.en.projects : PagesTexts.es.projects;
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light 
        shadow2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light 
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link passHref href={link} target="_blank" className='w-1/2 cursos-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link passHref href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link passHref href={github} target="_blank" className="w-10"><GithubIcon/></Link>
                    <Link passHref href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg 
                    font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>{l.button1}</Link>
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
    const { asPath, locale, locales} = useRouter();
    const l = locale === 'en-US' ? PagesTexts.en.projects : PagesTexts.es.projects;
  return (
    <>
        <Head>
            <title>Mauro Dietze | Projects Page</title>
            <meta name='description' content="any description" />
        </Head>
        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text={l.title} className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs!text-4xl'/>
                <div className='grid grid-cols-12 gap-24 gap-y-32 xs:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject title={l.project1.title} summary={l.project1.summary}
                        link={l.project1.link} type={l.project1.type} github={l.project1.github} img={project1}/>
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project title={l.project1.title2} link={l.project1.link} 
                        type={l.project1.type} github={l.project1.github} img={project1}/>
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project title={l.project1.title3} link={l.project1.link} 
                        type={l.project1.type} github={l.project1.github} img={project1}/>
                    </div>
                    <div className='col-span-12'>
                    <FeaturedProject title={l.project2.title} summary={l.project2.summary}
                        link={l.project2.link} type={l.project2.type} github={l.project2.github} img={project1}/>
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project title={l.project2.title2} link={l.project2.link} 
                        type={l.project2.type} github={l.project2.github} img={project1}/>
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project title={l.project2.title3} link={l.project2.link} 
                        type={l.project2.type} github={l.project2.github} img={project1}/>
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default Projects;
