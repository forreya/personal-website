import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y, className='py-3 px-6'}) => {
  return (
    <motion.div 
    className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark cursor-pointer absolute lg:!py-2 lg:!px-4 md:!text-sm md:!py-1.5 md:!px-3 xs:bg-transparent xs:!text-dark xs:!text-bold lg:!p-6 md:!p-4 xs:!text-xs xs:!p-2 ${className}`}
    whileHover={{scale:1.05}}
    initial={{x:0, y:0}}
    whileInView={{x:x, y:y}}
    transition={{duration: 1.5}}
    viewport={{once:true}}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:!text-6xl md:!mt-32">
        Skills
      </h2>

      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight xl:!h-[75h] lg:!h-[60vh] mlg:!h-[50vh] md:!h-[60vh] sm:!h-[55vh] xs:!h-[50vh] 2xl:!bg-circularLight2xl lg:!bg-circularLightLg md:!bg-circularLightMd sm:!bg-circularLightSm
      '>
        <Skill name="Code" x="0vw" y="0vw" className='p-6 xs:!bg-dark xs:!text-light xs:!text-normal xs:!p-2 lg:!py-5 lg:!px-4 md:!text-sm md:!py-1.5 md:!px-3 xs:bg-transparent xs:!text-bold'/>
        <Skill name="Python" x="-20vw" y="2vw" />
        <Skill name="Ruby" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="NodeJS" x="15vw" y="-12vw" />
        <Skill name="CSS" x="0vw" y="-20vw" />
        <Skill name="MongoDB" x="32vw" y="-5vw" />
        <Skill name="ExpressJS" x="-34vw" y="-5vw" />
        <Skill name="HTML" x="-25vw" y="18vw" />
        <Skill name="TailwindCSS" x="18vw" y="18vw" />
      </div>
    </>
  );
}
 
export default Skills;