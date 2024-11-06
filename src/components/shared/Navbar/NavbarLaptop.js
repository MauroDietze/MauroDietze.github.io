import React from 'react'
import { motion } from "framer-motion";
import useThemeSwitcher from '@/components/hooks/useThemeSwitcher';
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, CustomLink } from '@/components';

export const NavbarLaptop = ({data, switchLanguage, locale}) => {
  const [mode, setMode] = useThemeSwitcher();
  const githubLink = data?.links?.github || '#';
  const linkedin = data?.links?.linkedin || '#';

  return (
    <div className='w-full flex justify-between items-center lg:hidden'>
      <nav>
        <CustomLink href="#home" title="Home" className='mr-4' />
        <CustomLink href="#about" title="About" className='mx-4' />
        <CustomLink href="#skills" title="Skills" className='mx-4' />
        <CustomLink href="#projects" title="Projects" className='mx-4' />
      </nav>

      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href={githubLink} target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mr-3'
        >
          <GithubIcon />
        </motion.a>
        <motion.a href={linkedin} target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 ml-3'
        >
          <LinkedInIcon />
        </motion.a>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1 
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
        >
          {
            mode === "dark" ?
              <SunIcon className={"fill-dark"} />
              :
              <MoonIcon className={"fill-dark"} />
          }
        </button>
        <button onClick={switchLanguage}
          className={`ml-3
          `}
        >
          {locale === 'en' ? 'En' : 'Es'}
        </button>

      </nav>
    </div>
  )
}