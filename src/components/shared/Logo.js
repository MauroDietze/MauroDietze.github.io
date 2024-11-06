import React from "react";
import { motion } from "framer-motion";

const MotionButton = motion("button")

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <div className="flex items-center justify-center mt-2">
      <MotionButton
        className="w-16 h-16 bg-dark text-light flex items-center justify-center 
					rounded-full text-2xl font-bold border border-solid border-trasnparent dark:border-light
				"
				whileHover={{
					background: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
          transition: {duration: 1, repeat: Infinity} 
				}}
        onClick={scrollToTop}
      >
        MD
      </MotionButton>
    </div>
  );
};

export default Logo;
