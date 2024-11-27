import React from "react";
import { AnimatedText, Skill } from "@/components";
import { useData } from "@/components/context/DataContext";

const Skills = ({ skills }) => {
  const { translations } = useData();

  if (!skills || skills.length === 0) {
    return <div>Loading skills...</div>;
  }

  return (
    <section id="skills" className="scroll-smooth">
      <AnimatedText
        text={translations.TITLE_SKILLS}
        className="mt-16 mb-5 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      />
      <div
        data-dark="true"
        className="z-10 group-hover:[animation-play-state:paused] lg:col-span-2 w-full lg:rounded-tr-4xl overflow-hidden relative flex flex-col rounded-lg bg-white shadow-sm ring-1 ring-black/5 data-[dark]:bg-gray-800 data-[dark]:ring-white/15"
      >
        <div className="relative parent-group h-full bg-gray-800 rounded-lg ring-1 ring-black/10">
          {Array.from({ length: 4 }).map((_, rowIndex) => {
            const skillsPerRow = Math.ceil(skills.length / 4);
            const rowSkills = skills.slice(
              rowIndex * skillsPerRow,
              (rowIndex + 1) * skillsPerRow
            );

            return (
              <div
                key={rowIndex}
                className="relative group w-full h-16 flex items-center whitespace-nowrap px-4 py-2 gap-48 group-hover:[animation-play-state:paused]"
                style={{ top: `${rowIndex * 25}%` }}
              >
                {/* Líneas superior e inferior */}
                <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-white/15 from-[2px] to-[2px] bg-[length:12px_100%]"></div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-white/5 from-[2px] to-[2px] bg-[length:12px_100%] group-last:hidden"></div>

                {/* Íconos con animación */}
                {rowSkills.map((skill, index) => (
                  <Skill
                    key={`${rowIndex}-${index}`}
                    skill={skill}
                    className={`group-hover:[animation-play-state:paused] h-11 animation-delay-${(index + rowIndex) * 4} animation-duration-${rowIndex + 1} absolute top-2 grid grid-cols-[1rem,1fr] items-center gap-4 whitespace-nowrap px-3 py-1 rounded-full bg-gradient-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-inset ring-white/10 [--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-timing-function:linear] [animation-play-state:running]`}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
