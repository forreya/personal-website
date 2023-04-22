import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({position, company, companyLink, time, address, work}) => {
  const ref = useRef(null)

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 mx-auto w-[60%] flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">{position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary capitalize">@{company}</a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        
        <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"/>
        
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details 
            position="Assistant Web Developer"
            companyLink="https://wahine.wcapital.asia/"
            company="Wahine Capital"
            time="Jun 2022 - Aug 2022"
            address="Kuala Lumpur, Malaysia"
            work="Assisted in the client-side development of the company's prototype web pages. Created preliminary layouts for the design and branding of the company. Involved in mapping out the structure and flow-chart of the company's website."
          />
          <Details 
            position="Assistant Web Developer"
            companyLink="https://wahine.wcapital.asia/"
            company="Wahine Capital"
            time="Jun 2022 - Aug 2022"
            address="Kuala Lumpur, Malaysia"
            work="Assisted in the client-side development of the company's prototype web pages. Created preliminary layouts for the design and branding of the company. Involved in mapping out the structure and flow-chart of the company's website."
          />
          <Details 
            position="Assistant Web Developer"
            companyLink="https://wahine.wcapital.asia/"
            company="Wahine Capital"
            time="Jun 2022 - Aug 2022"
            address="Kuala Lumpur, Malaysia"
            work="Assisted in the client-side development of the company's prototype web pages. Created preliminary layouts for the design and branding of the company. Involved in mapping out the structure and flow-chart of the company's website."
          />
        </ul>
      </div>
    </div>
  );
}
 
export default Experience;