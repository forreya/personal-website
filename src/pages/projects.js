import AnimatedText from "@/components/AnimatedText";
import { GitHubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import japaneseRPG from "../../public/images/projects/japanese-RPG.png"
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return(
    <article className="w-full flex items-center justify-between rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative
    ">
      <div className='absolute top-0 -z-10 -right-4 w-[100.5%] h-[102%] rounded-[2.5rem] bg-dark
      rounded-br-3xl
      ' />
      <Link href={link} target="_blank"
      className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{scale:1.02}}
        transition={{duration:0.05}}
        priority 
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10"><GitHubIcon/></Link>
          <Link href={link} target="_blank"
          className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >See Project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({type, title, img, link, github}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative
    ">
      <div className='absolute top-0 -z-10 -right-4 w-[101%] h-[102%] rounded-[2rem] bg-dark
      rounded-br-3xl
      ' />
      <Link href={link} target="_blank"
      className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{scale:1.02}}
        transition={{duration:0.05}}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank"
          className="rounded-lg bg-dark text-light p-1 px-3 text-lg font-semibold"
          >See Project</Link>
          <Link href={github} target="_blank" className="w-8"><GitHubIcon/></Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Ryan Lai | Projects Page</title>
        <meta name="description" content="This page provides an overview of projects I have undertaken, including each project's title and a brief description of each project. Users can click on a project card to view more details about the project." />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16 text-center">
          <AnimatedText text="Projects" 
          className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject 
                title="Japanese Learning RPG"
                summary="A Japanese learning website mixed with RPG game elements. Users can sign up, create a character for the game, and gain coins and experience by playing Japanese quizzes. Users can also buy new outfits with coins and change them in their wardrobes."
                link="/"
                img={japaneseRPG}
                github="/"
                type="Latest Project"
              />
            </div>
            <div className="col-span-6">
              <Project 
                  title="Japanese Learning RPG"
                  link="/"
                  img={japaneseRPG}
                  github="/"
                  type="Featured Project"
                />
            </div>
            <div className="col-span-6">
              <Project 
                title="Japanese Learning RPG"
                link="/"
                img={japaneseRPG}
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project 
                title="Japanese Learning RPG"
                link="/"
                img={japaneseRPG}
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project 
                title="Japanese Learning RPG"
                link="/"
                img={japaneseRPG}
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project 
                title="Japanese Learning RPG"
                link="/"
                img={japaneseRPG}
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project 
                title="Japanese Learning RPG"
                link="/"
                img={japaneseRPG}
                github="/"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
 
export default projects;