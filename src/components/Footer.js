import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { useTranslation } from 'next-export-i18n';

  const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='w-full border-t-2 border-solid border-fark
    fonr-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
          <span className={new Date().getFullYear()}> &copy; {t('footer.all')}</span>
          <div className='flex items-center lg:py-2'>
            {t('footer.build')} <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
            {t('footer.by')}&nbsp;<Link passHref href="/" className='underline underline-offset-2'
            target={"_blank"} rel="noreferrer">Mauro Dietze</Link>
          </div>
          <Link passHref href={"mailto:mauroid123@gmail.com"} className='underline underline-offset-2' target={"_blank"} rel="noreferrer">{t('footer.say')}</Link>
            
        </Layout>
    </footer>
  )
}

export default Footer