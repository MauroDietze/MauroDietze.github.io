import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { useRouter } from 'next/router';
import PagesTexts from '../../public/Texts/PagesTexts';

const Footer = () => {
  const { asPath, locale, locales} = useRouter();
  const l = locale === 'en-US' ? PagesTexts.en.footer : PagesTexts.es.footer;

  return (
    <footer className='w-full border-t-2 border-solid border-fark
    fonr-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
          <span className={new Date().getFullYear()}> &copy; {l.all}</span>
          <div className='flex items-center lg:py-2'>
            {l.build} <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
            {l.by}&nbsp;<Link passHref href="/" className='underline underline-offset-2'
            target={"_blank"} rel="noreferrer">Mauro Dietze</Link>
          </div>
          <Link passHref href="https://devdreaming.com" className='underline underline-offset-2' target={"_blank"} rel="noreferrer">{l.say}</Link>
            
        </Layout>
    </footer>
  )
}

export default Footer