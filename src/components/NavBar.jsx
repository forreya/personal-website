import Link from "next/link"
import Logo from "./Logo"
import { useRouter } from "next/router"
import { GitHubIcon, LinkedInIcon } from "./Icons"
import { motion } from 'framer-motion'

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

const NavBar = () => {
  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between text-dark"
    >
      <nav>
        <CustomLink href="/" title="Home" className="mr-4"/>
        <CustomLink href="/about-me" title="About Me" className="mx-4"/>
        <CustomLink href="/projects" title="Projects" className="mx-4"/>
        <CustomLink href="/articles" title="Articles"className="ml-4"/>
      </nav >

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-8 mx-3"
        >
          <GitHubIcon />
        </motion.a>
        <motion.a href="/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-8 ml-3"
        >
          <LinkedInIcon />
        </motion.a>
      </nav>
      
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}

export default NavBar