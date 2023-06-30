import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/Yo a contraluz.jpg';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/transitionEffect';
import { useRouter } from 'next/router';
import PagesTexts from '../../public/Texts/PagesTexts';

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
      if(isInView){
        motionValue.set(value);
      }
    }, [isInView, value, motionValue])

    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
      })
    }, [springValue, value])

    return <span ref={ref}></span>
}


const About = () => {
  const { asPath, locale, locales} = useRouter();
  const l = locale === 'en-US' ? PagesTexts.en.about : PagesTexts.es.about;
  return (
    <>{/*{l.titleH}*/}
        <Head>
            <title>Mauro Dietze | About Page </title> 
            <meta name='description' content="any description" />
        </Head>
        <TransitionEffect/>
        <main className='flex w-full flex-col items-center justify-center dark:text-light '>
            <Layout className='pt-16'>
                <AnimatedText text={l.title} className='mb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:text-4xl'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>{l.subTitle}</h2>
                        <p className='font-medium'>
                        {l.text1}
                        </p>
                        <p className='my-4 font-medium'>
                        {l.text2}
                        </p>
                        <p className='font-medium'>
                        {l.text3}
                        </p>
                    </div>
                    <div className='col-span-3 relative rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light '/>
                        <Image src={profilePic} alt="Mauro Dietze" className="w-full h-auto rounded-2xl " priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={2}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>{l.sidebar1}</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={4}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>{l.sidebar2}</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={3}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>{l.sidebar3}</h2>
                        </div>
                    </div>
                </div>
                <Skills/>
                <Experience/>
                <Education/>
            </Layout>
            <div className='absolute left-8 end-0 inline-block w-24 md:hidden'>
                <Image src={lightBulb} alt="Mauro Dietze" className='w-full h-auto'/>
            </div>
        </main>
    </>
  )
}

export default About