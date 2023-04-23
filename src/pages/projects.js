import AnimatedText from "@/components/AnimatedText";
import { GitHubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import japaneseRPG from "../../public/images/projects/japanese-RPG.png"

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return(
    <article className="w-full flex items-center justify-between
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
    ">
      <Link href={link} target="_blank"
      className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
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

          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject 
                title="Japanese Learning RPG"
                summary="A Japanese learning website mixed with RPG game elements. Users can sign up, create a character for the game, and gain coins and experience by playing Japanese quizzes. Users can also buy new outfits with coins and change them in their wardrobes."
                link="/"
                img={japaneseRPG}
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              Project-1
            </div>
            <div className="col-span-6">
              Project-2
            </div>
            <div className="col-span-12">
              Featured Project
            </div>
            <div className="col-span-6">
              Project-3
            </div>
            <div className="col-span-6">
              Project-4
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
 
export default projects;