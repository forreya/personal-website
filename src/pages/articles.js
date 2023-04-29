import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import article1 from "../../public/images/articles/article-1.jpeg"
import article2 from "../../public/images/articles/article-2.png"
import article3 from "../../public/images/articles/article-3.jpeg"
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block"
    x.set(event.pageX - 250)
    y.set(-10)
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none"
    x.set(0)
    y.set(0)
  }

  return (
    <Link href={link} target="_blank"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
      <FramerImage ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden" 
      style={{x:x, y:y}}
      initial={{opacity: 0}}
      whileInView={{opacity:1, transition:{duration: 0.3}}}
      />
    </Link>
  )
}

const Article = ({img, title, date, link}) => {
  return (
    <motion.li 
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
    viewport={{once: true}}
    className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
    justify-between bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  )
}

const LatestArticle = ({img,title, time, summary, link}) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <Link href={link} target="_blank"
      className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <div className='absolute top-0 -z-10 -right-4 w-[101%] h-[102%] rounded-[2rem] bg-dark
        rounded-br-3xl
        ' />
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{scale:1.02}}
        transition={{duration:0.05}}
        priority 
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline mt-4 xs:text-lg">{title}</h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold">{time}</span>
      </Link>
    </li>
  )
}

const articles = () => {
  return (
    <>
      <Head>
        <title>Ryan Lai | About Me Page</title>
        <meta name="description" content="This page provides an overview of my background, skills, and interests related to programming." />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16 text-center">
          <AnimatedText text="Articles" className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl" />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <LatestArticle 
              title="Benefits of using the MERN Stack"
              summary="In this article, I will guide you through the process of building a modern and engaging website using NextJS, a popular framework for building React applications. First, I will introduce you to the benefits of using NextJS, such as improved performance, SEO, and code-splitting capabilities. Next, I will dive into the practical steps of building a website using NextJS. This will include setting up the project with the necessary dependencies, creating pages, and styling the website with CSS modules. I will also explain how to use dynamic routing to create pages with dynamic content, such as blog posts, and how to implement client-side routing with NextJS's Link component."
              time="2 min read"
              link="/"
              img={article1}
            />
            <LatestArticle 
              title="The Rise of AI: Friend or Foe?"
              summary="This article discusses the potential impact of artificial intelligence (AI) and ChatGPT on the job market. While many individuals worry about job security as these technologies become more advanced, programmers see ChatGPT and AI as a positive development for their industry."
              time="8 min read"
              link="/"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">Older Articles</h2>
          <ul>
            <Article
              title="Animations in React w/ Framer Motion"
              date="March 28 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Animations in React w/ Framer Motion"
              date="March 28 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Animations in React w/ Framer Motion"
              date="March 28 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Animations in React w/ Framer Motion"
              date="March 28 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Animations in React w/ Framer Motion"
              date="March 28 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Animations in React w/ Framer Motion"
              date="March 28 2023"
              link="/"
              img={article3}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
 
export default articles;