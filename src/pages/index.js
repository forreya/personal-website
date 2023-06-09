import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from 'public/images/profile/profile-pic.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { CvIcon } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {

  return (
    <>
      <Head>
        <title>Ryan Lai | Home Page</title>
        <meta name="description" content="My personal website. Used to showcase my skills, past projects and allow people to easily find my socials and get into contact with me." />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark-full min-h-screen'>
        <Layout className='pt-0 xl:p-16 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full p-5'>
              <Image src={profilePic} alt="Ryan Lai" className='w-full h-auto md:inline-block md:w-full lg:w-full' 
              priority 
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col self-center lg:w-full lg:text-center'>
              <AnimatedText text="I'm Ryan- Junior Developer, Creative Enthusiast and Physics Graduate." className='!text-6xl !text-left
              2xl:!text-5xl xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-5xl sm:!text-3xl'
              />
              <p className='my-2 text-base font-medium xl:!text-sm xl:!mt-1 md:text-sm sm:text-xs md:my-4'>
                As a recent UCL graduate who is looking to take the next big step in my career, I&apos;m
                currently looking to play my part in a company that possesess a supportive, yet stimulating & challenging environment.
                Feel free to browse around to get to know me better and to see what I&apos;ve been up to!
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center md:mt'>
                <Link href="/Ryan_Lai_CV.pdf" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                justify-center group md:p-2 md:px-4 md:text-base'
                download={true}
                >CV <CvIcon className="w-6 ml-2 invert group-hover:invert-0"/>
                </Link>
                <Link href="mailto:ryanlai12@gmail.com" 
                target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline underline-offset-2 md:text-base'
                >
                  Email Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}