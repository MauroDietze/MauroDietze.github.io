import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import {TwitterIcon, GithubIcon , LinkedInIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon} from "./Icons";
import { useRouter } from "next/router";
import {motion} from "framer-motion"
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import LenguageMenu from "./LenguageMenu";
import { useTranslation, useLanguageQuery, LanguageSwitcher, getDefaultLanguage } from 'next-export-i18n'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  const handleClick=() => {
    router.push(href);
  };

  return (
    <Link passHref href={href} className={`${className} relative group`} onClick={handleClick} >
      {title}

      <span
        className={`
      h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300 
      ${router.route === href ? "w-full" : "w-0"} 
      dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick=() => {
    toggle();
    router.push(href);
  };

  return (
    <Link passHref href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}

      <span
        className={`
      h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5  
      group-hover:w-full transition-[width] ease duration-300 
      ${router.route === href ? "w-full" : "w-0"} 
      dark:bg-dark`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState();

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const { t } = useTranslation();
  
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:bg-blue 
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink passHref href="/" title={t('navBar.home')} className="mr-4" />
          <CustomLink passHref href="/about" title={t('navBar.about')} className="mx-4" />
          <CustomLink passHref href="/projects" title={t('navBar.projects')} className="mx-4" />
          {/* <CustomLink href="/articles" title={t('navBar.articles')} className="ml-4" /> */}
        </nav>
        
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a href="https://twitter.com/Mauroido" target={"_blank"} rel="noreferrer" className="w-6 mr-3"
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          >
            <TwitterIcon/>
          </motion.a>
          <motion.a href="https://github.com/MauroDietze" target={"_blank"} rel="noreferrer" className="w-6 mr-3"
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          >
            <GithubIcon/>
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/mauro-dietze/" target={"_blank"} rel="noreferrer" className="w-6 mx-3"
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          >
            <LinkedInIcon/>
          </motion.a>
          {/* <motion.a href="https://pinterest.com" target={"_blank"} rel="noreferrer" className="w-6 mx-3 dark:bg-light rounded-full"
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          >
            <PinterestIcon/>
          </motion.a> */}
          {/* <motion.a href="https://dribble.com" target={"_blank"} rel="noreferrer" className="w-6 ml-3"
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          >
            <DribbbleIcon/>
          </motion.a> */}
          <button onClick={()=> setMode(mode === "light" ? "dark" : "light")}
          className="ml-3 flex items-center justify-center rounded-full p-1 bg-light
          dark:bg-dark text-dark dark:text-light">
            {
              mode === "dark" ?
              <SunIcon />
              :<MoonIcon />
            }
          </button>
        </nav>
      </div>

      {
        isOpen ? 
        <motion.div
        initial={{scale:0, opacity:0, x: "-50%", y:"-50%" }}
        animate={{scale:1, opacity:1}}
        className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink passHref href="/" title={t('navBar.home')} className="" toggle={handleClick}/>
            <CustomMobileLink passHref href="/about" title={t('navBar.about')} className="" toggle={handleClick}/>
            <CustomMobileLink passHref href="/projects" title={t('navBar.projects')} className="" toggle={handleClick}/>
            {/* <CustomMobileLink href="/articles" title={t('navBar.articles')} className="" toggle={handleClick}/> */}
          </nav>
          
          <nav className="flex items-center justify-center flex-wrap mt-2">
            {/* <motion.a href="https://twitter.com" target={"_blank"} rel="noreferrer" className="w-6 mr-3 sm:mx-1"
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            >
              <TwitterIcon/>
            </motion.a> */}
            <motion.a href="https://github.com/MauroDietze" target={"_blank"} rel="noreferrer" className="w-6 mr-3 bg-light rounded-full dark:bg-dark sm:mx-1"
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            >
              <GithubIcon/>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/mauro-dietze/" target={"_blank"} rel="noreferrer" className="w-6 mx-3 sm:mx-1 bg-light rounded-full"
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            >
              <LinkedInIcon/>
            </motion.a>
            {/* <motion.a href="https://pinterest.com" target={"_blank"} rel="noreferrer" className="w-6 mx-3 sm:mx-1 dark:bg-light rounded-full"
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            >
              <PinterestIcon/>
            </motion.a>
            <motion.a href="https://dribble.com" target={"_blank"} rel="noreferrer" className="w-6 ml-3 sm:mx-1"
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            >
              <DribbbleIcon/>
            </motion.a> */}
            <button onClick={()=> setMode(mode === "light" ? "dark" : "light")}
            className="ml-3 flex items-center justify-center rounded-full p-1 text-light  dark:text-dark">
              {
                mode === "dark" ?
                <SunIcon />
                :<MoonIcon />
              }
            </button>
          </nav>
        </motion.div> 
        : null
      }
      <div className="p-5">
        <LenguageMenu />
      </div>
      <div className="absolute left-[50%] top-2 translate-x-[-50%] sm:mx-1">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
