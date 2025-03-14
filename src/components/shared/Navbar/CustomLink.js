import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <div className="group inline-block cursor-pointer">
      <ScrollLink
        to={href.replace('#', '')}
        smooth={true}
        duration={500}
        className={`${className} relative`}
      >
        {title}
        <span 
          className={`
            h-[1px] bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            w-0
            dark:bg-light
          `}
        >
        </span>
      </ScrollLink>
    </div>
  );
};

export default CustomLink;