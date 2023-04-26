import Link from "next/link"
import Logo from "./Logo"
import { useRouter } from "next/router"
import { GitHubIcon, LinkedInIcon } from "./Icons"
import { motion } from 'framer-motion'
import { useState } from "react"

const CustomLink = ({href, title, className=""}) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`
      h-[1px] inline-block bg-dark absolute 
      left-0 -bottom-1 group-hover:w-full 
      transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {
  const router = useRouter()

  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light my-2`} onClick={handleClick}>
      {title}
      <span className={`
      h-[1px] inline-block bg-light absolute 
      left-0 -bottom-1 group-hover:w-full 
      transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>
    </button>
  )
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between text-dark relative z-10 lg:px-16 md:px-12 sm:px-8"
    >
      <button className="flex-col justify-center items-center hidden xl:flex" onClick={handleClick}>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'marker:opacity-100'}`}></span>
        <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      <div className="w-full flex justify-between items-center xl:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4"/>
          <CustomLink href="/about-me" title="About Me" className="mx-4"/>
          <CustomLink href="/projects" title="Projects" className="mx-4"/>
          <CustomLink href="/articles" title="Articles"className="ml-4"/>
        </nav >

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a href="https://github.com/forreya" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-8 mx-3"
          >
            <GitHubIcon />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/ryan-lai-a52211214/" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-8 ml-3"
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
      </div>

    {
      isOpen ?
      <motion.div 
      initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
      animate={{scale:1, opacity:1}}
      className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 rounded-lg backdrop-blur-md py-32
      ">
        <nav className="flex items-center flex-col justify-center">
          <CustomMobileLink href="/" title="Home" className="" toggle={handleClick}/>
          <CustomMobileLink href="/about-me" title="About Me" className="" toggle={handleClick}/>
          <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick}/>
          <CustomMobileLink href="/articles" title="Articles"className="" toggle={handleClick}/>
        </nav >

        <nav className="flex items-center justify-center flex-wrap mt-3">
          <motion.a href="https://github.com/forreya" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-8 bg-light rounded-full mx-3 sm:mx-2"
          >
            <GitHubIcon />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/ryan-lai-a52211214/" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className="w-8 mx-3 sm:mx-2"
          >
            <LinkedInIcon /> 
          </motion.a>
        </nav>
      </motion.div>
      :
        null
    }
      
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}

export default NavBar