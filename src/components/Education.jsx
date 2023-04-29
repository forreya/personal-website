import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({type, time, instituteLink, place, info}) => {
  const ref = useRef(null)

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 mx-auto w-[60%] flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}&nbsp;
          <a href={instituteLink} target="_blank" className="text-primary">@{place}</a>
        </h3>
        <div className="mb-1">
          <span className="capitalize font-medium text-dark/75 xs:text-sm">
            {time} | {place}
          </span>
        </div>
        <p className="font-medium w-full md:text-sm">
          {info}
        </p>
      </motion.div>
    </li>
  )
}

const Education = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className="mt-64 mb-0">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        
        <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"/>
        
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details 
            type="Bachelor of Science in Physics"
            time="Sept 2019 - Sept 2022"
            instituteLink={"https://www.ucl.ac.uk/physics-astronomy/"}
            place="University College London"
            info="Graduated with Second Class Honours (2:1). Undertook numerous coding projects (using Python) that involved 
            tasks such as data analysis, computational treatment of experimental data, and creating 3-dimensional models and animations of physical systems."
          />
          <Details 
            type="Software Engineering Course"
            time="Dec 2022 - April 2023"
            instituteLink={"https://makers.tech/"}
            place="Makers Academy"
            info="Developed skills such working in teams to build full-stack web applications (git-flow, agile workflow), building schemas and writing unit/integration 
            tests (TTD, mocking), object-oriented programming, pair programming, etc. Projects undertook involved an AirBnb clone & a Facebook clone."
          />
          <Details 
            type="Higher Education"
            time="Sept 2017 - Jul 2019"
            instituteLink={"https://www.alice-smith.edu.my/"}
            place="Alice Smith International School"
            info="For A Levels (Advanced Levels) I achieved 2 A*s in Mathematics and Physics & 2 As in Chemistry and Further Mathematics. For GCSEs I achieved 8 A*s & 3 As in a 
            range of subjects including Computer Science.
            "
          />
        </ul>
      </div>
    </div>
  );
}
 
export default Education;