import Link from "next/link"
import Image from "next/image"
import { motion } from 'framer-motion'
import yingYang from "public/ying-yang.png"

const MotionLink = motion(Link);

const Logo = () => {
  console.log(yingYang)
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink 
        href="/"
        whileHover={{
          scale:1.2,
        }}
      >
        <Image src={yingYang}
        alt="image" 
        className="w-16 h-16"
        height="512"
        width="512"
        />
      </MotionLink>
    </div>
  )
}

export default Logo