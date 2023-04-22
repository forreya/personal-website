import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({type, time, instituteLink, place, info}) => {
  const ref = useRef(null)

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 mx-auto w-[60%] flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">{type}&nbsp;
          <a href={instituteLink} target="_blank" className="text-primary">@{place}</a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">
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
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        
        <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"/>
        
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details 
            type="Bachelor of Science in Physics"
            time="Sept 2019 - Sept 2022"
            instituteLink={"https://www.ucl.ac.uk/physics-astronomy/"}
            place="University College London"
            info="Graduated with Second Class Honours (2:1). Despite the difficult nature of the degree, engaging in these various group projects has developed me into an excellent team player with strong interpersonal skills, although I can work just as well independently."
          />
          <Details 
            type="Bachelor of Science in Physics"
            time="Sept 2019 - Sept 2022"
            instituteLink={"https://www.ucl.ac.uk/physics-astronomy/"}
            place="University College London"
            info="Graduated with Second Class Honours (2:1). Despite the difficult nature of the degree, engaging in these various group projects has developed me into an excellent team player with strong interpersonal skills, although I can work just as well independently."
          />
          <Details 
            type="Bachelor of Science in Physics"
            time="Sept 2019 - Sept 2022"
            instituteLink={"https://www.ucl.ac.uk/physics-astronomy/"}
            place="University College London"
            info="Graduated with Second Class Honours (2:1). Despite the difficult nature of the degree, engaging in these various group projects has developed me into an excellent team player with strong interpersonal skills, although I can work just as well independently."
          />
        </ul>
      </div>
    </div>
  );
}
 
export default Education;