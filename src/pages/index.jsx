import React from 'react'
import Head from 'next/head'
import { Layout, Logo } from '@/components'
import { useData } from '@/components/context/DataContext';
import Intro from '@/components/sections/Intro';
import About from '@/components/sections/About';


export default function Home({ }) {
  const { data, translations } = useData();

  if (!data || !translations) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{translations.TEXT_BROWSER}</title>
        <meta name="Home" content={translations.TEXT_META_INDEX} />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light scroll-smooth'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='fixed z-50 left-12 -translate-x-1/2 bottom-28'>
            <Logo />
          </div>
          <Intro />
          <About />
        </Layout>
      </main>
    </>
  )
}