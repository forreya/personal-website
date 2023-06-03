import AnimatedText from "@/components/AnimatedText";
import { GitHubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import japaneseRPG from "../../public/images/projects/japanese-RPG.png"
import fileSharing from "../../public/images/projects/file-sharing-site.png"
import bowlingScorecard from "../../public/images/projects/bowling-scorecard.png"
import musicLicensing from "../../public/images/projects/music-licensing.png"
import photoSharing from "../../public/images/projects/photo-sharing-app.png"
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const LatestProject = ({type, title, summary, img, link, github}) => {
  return(
    <article className="w-full flex items-center justify-between rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative
    lg:!flex-col lg:!p-8 xs:!rounded-2xl xs:!rounded-br-3xl xs:!p-4
    ">
      <div className='absolute top-0 -z-10 -right-4 w-[100.5%] h-[102%] rounded-[2.5rem] bg-dark
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      ' />
      <Link href={link} target="_blank"
      className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:!w-full"
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

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:!w-full lg:!pl-0 lg:!pt-6">
        <span className="text-muddier font-medium text-xl xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:!text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark text-left sm:!text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10"><GitHubIcon/></Link>
          <Link href={link} target="_blank"
          className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:!px-4 sm:!text-base"
          >See Project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({type, title, img, link, github}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative xs:p-4
    ">
      <div className='absolute top-0 -z-10 -right-4 w-[101%] h-[102%] rounded-[2rem] bg-dark
      rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
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
        <span className="text-primary font-medium text-xl lg:!text-lg md:!text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank"
          className="rounded-lg bg-dark text-light p-1 px-3 text-lg font-semibold md:!text-base"
          >See Project</Link>
          <Link href={github} target="_blank" className="w-8 md:w-6"><GitHubIcon/></Link>
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
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16 text-center xl:px-12">
          <AnimatedText text="Projects" 
          className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-y-28 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <LatestProject 
                title="Japanese Learning RPG"
                summary="A Japanese language learning website which incorporates RPG game elements. Players can sign up, create their own character, and earn coins and experience by playing quizzes and picking up new words. With enough coins, players can also buy new outfits and recustomize themselves using the wardrobe."
                link="https://github.com/forreya/japanese-learning-RPG"
                img={japaneseRPG}
                github="https://github.com/forreya/japanese-learning-RPG"
                type="Latest Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project 
                title="Music Licensing Website"
                link="https://github.com/forreya/music-licensing-website"
                img={musicLicensing}
                github="https://github.com/forreya/music-licensing-website"
                type=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project 
                title="File Sharing Site"
                link="https://files-to-go-client.onrender.com/"
                img={fileSharing}
                github="https://github.com/forreya/file-sharing-site"
                type=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project 
                title="Photo-Sharing App"
                link="https://github.com/forreya/photo-sharing-app"
                img={photoSharing}
                github="https://github.com/forreya/photo-sharing-app"
                type=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project 
                title="Bowling Scorecard Tracker"
                link="https://github.com/forreya/bowling-scorecard"
                img={bowlingScorecard}
                github="https://github.com/forreya/bowling-scorecard"
                type=""
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
 
export default projects;