import React, { useState } from 'react'
import { useData } from '@/components/context/DataContext';
import { NavbarMobile, NavbarLaptop } from '@/components';

export const NavBar = ( ) => {
  const { data, locale, setLocale } = useData();

  const switchLanguage = () => {
    setLocale(locale === 'es' ? 'en' : 'es');
  };
  
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className='w-fulll px-32 py-8 font-medium flex items-center justify-between
      dark:text-light z-10 lg:px-16 md:px-12 sm:px-8'
    >
      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleIsOpen}>
        <span className={` bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} `}></span>
        <span className={` bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'} `}></span>
        <span className={` bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} `}></span>
      </button>
      <NavbarLaptop data={data} switchLanguage={switchLanguage} locale={locale} />
      {
        isOpen ? <NavbarMobile /> : null
      }
    </header>
  )
}