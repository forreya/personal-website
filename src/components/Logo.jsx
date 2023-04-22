import Link from "next/link"
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink 
        href="/"
        whileHover={{
          scale:1.2,
        }}
      >
          <img src={'/ying-yang.png'} alt="image" className="w-16 h-16" />
      </MotionLink>
    </div>
  )
}

export default Logo