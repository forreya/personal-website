import Link from "next/link"
import Logo from "./Logo"

const CustomLink = ({href, title, className=""}) => {
  return (
    <Link href={href} className={`${className}`}>
      {title}
    </Link>
  )
}

const NavBar = () => {
  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between"
    >
      <nav>
        <CustomLink href="/" title="Home" className="mr-4"/>
        <CustomLink href="/about-me" title="About Me" className="mx-4"/>
        <CustomLink href="/projects" title="Projects" className="mx-4"/>
        <CustomLink href="/articles" title="Articles"className="ml-4"/>
      </nav >
      <nav>
        <Link href="/" target={"_blank"}>GitHub</Link>
        <Link href="/" target={"_blank"}>LinkedIn</Link>
        <Link href="/" target={"_blank"}></Link>
      </nav>
      
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}

export default NavBar