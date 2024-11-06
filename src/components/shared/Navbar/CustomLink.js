import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();

  return (
    <Link href={href} scroll={false} className={`${className} relative group`}>
      {title}
      <span 
        className={`
          h-[1px] inline-bloc bg-dark
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"} 
          dark:bg-light
        `}
      >
        &nbsp;
      </span>
    </Link>
  )
}

export default CustomLink;