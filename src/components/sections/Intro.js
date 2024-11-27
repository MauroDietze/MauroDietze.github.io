import React, {useState}  from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profilePic from "@/../public/images/profile/developer-drawing.png"
import { AnimatedText, LinkArrow } from '@/components'
import { useData } from '../context/DataContext'

const Intro = () => {
  const { data, translations } = useData();

  const [copied, setCopied] = useState(false);
  const email = data.email;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Restablecer el estado después de 2 segundos
  };

  const handleOpenGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <section id="home" className='flex items-center justify-between w-full lg:flex-col scroll-smooth'>
      <div className='w-1/2 md:w-full'>
        <Image src={profilePic} alt="CodeBucjs" className='"w-full h-auto lg:hidden md:inline-block md:w-full'
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
      <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
        <AnimatedText text={translations.PRESENTATION_HOME} className='!text-6xl !text-left
          xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-2xl sm:!text-3xl
        '/>
        <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
          {translations.RESUME_HOME}
        </p>
        <div className='flex items-center justify-center mt-2 lg:justify-center'>
          {/* Dirección de correo */}
          <div className="relative flex items-center gap-2 p-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <span className="text-gray-500 text-sm dark:text-gray-400">
              {email}
            </span>

            {/* Botón para copiar */}
            <button
              onClick={handleCopy}
              className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
              title="Copy email to clipboard"
            >
              {copied ? (
                <svg
                  className="w-4 h-4 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              )}
            </button>

            {/* Botón para abrir Gmail */}
            <button
              onClick={handleOpenGmail}
              className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
              title="Send email with Gmail"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422 c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414 l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956 L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z" />
              </svg>
            </button>
          </div>
          <Link href="/CV es - Mauro Dietze.pdf" target={"_blank"}
            className='
              flex mx-5 items-center bg-dark text-light p-2.5 px-6
              rounded-lg text-base font-semibold hover:bg-light hover:text-dark
              border-2 border-solid border-transparent hover:border-dark
              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
              hover:dark:border-light md:p-2  md:px-4 md:text-base whitespace-nowrap
            '
            download={true}
          >
            {translations.DOWNLOAD_CV} <LinkArrow className={"w-6 ml-0.5"} />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Intro;