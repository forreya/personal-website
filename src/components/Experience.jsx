import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({position, company, companyLink, time, address, work}) => {
  const ref = useRef(null)

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 mx-auto w-[60%] flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary capitalize">@{company}</a>
        </h3>
        <div className="mb-1">
          <span className="capitalize font-medium text-dark/75 xs:text-sm">
            {time} | {address}
          </span>
        </div>
        <p className="font-medium w-full md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        
        <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"/>
        
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details 
            position="Assistant Website Developer"
            companyLink="https://wahine.wcapital.asia/"
            company="Wahine Capital"
            time="Jun 2022 - Aug 2022"
            address="Kuala Lumpur, Malaysia"
            work="Assisted in the client-side development of the company's prototype web pages. Created preliminary layouts for the design and branding of the company. Involved in mapping out the structure and flow-chart of the company's website."
          />
          <Details 
            position="A Levels Tutor"
            companyLink="https://www.thelocalteachers.co.uk/"
            company="The Local Teachers"
            time="Nov 2020 - Mar 2021"
            address="London, United Kingdom"
            work="Part-time tutor for students studying the sciences or mathematics for GCSEs and A Levels. Worked as a teacher in a tutoring centre. Travelled to the student’s homes two to three times a week to tutor."
          />
          <Details 
            position="Financial Databasing Intern"
            companyLink="https://wvb.com/"
            company="World’Vest Base"
            time="Jun 2017 - Aug 2017"
            address="Kuala Lumpur, Malaysia"
            work="Assigned the task of updating excel spreadsheets by referencing raw data from the annual/ quarterly reports of a list of companies. Responsibilities included transferring data onto the company’s database & updating my department with new business reports."
          />
        </ul>
      </div>
    </div>
  );
}
 
export default Experience;