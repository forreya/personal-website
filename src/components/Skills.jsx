import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y, className='py-3 px-6'}) => {
  return (
    <motion.div className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark cursor-pointer absolute ${className}`}
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
      <h2 className="font-bold text-8xl mt-64 w-full text-center">
        Skills
      </h2>

      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <Skill name="Coding" x="0vw" y="0vw" className='p-6'/>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="NodeJS" x="15vw" y="-12vw" />
        <Skill name="Ruby" x="0vw" y="-20vw" />
        <Skill name="MongoDB" x="32vw" y="-5vw" />
        <Skill name="ExpressJS" x="-34vw" y="-5vw" />
        <Skill name="Python" x="-25vw" y="18vw" />
        <Skill name="TailwindCSS" x="18vw" y="18vw" />
      </div>
    </>
  );
}
 
export default Skills;