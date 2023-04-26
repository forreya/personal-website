import AnimatedText from '@/components/AnimatedText';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Head from 'next/head'
import { useEffect, useRef } from 'react'

const AnimatedNumber = ({value}) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {duration: 3000})
  const isInView = useInView(ref, {once: true})

  useEffect(() => {
    if(isInView){
      motionValue.set(value)
    }
  },[isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  },[springValue, value])

  return (
    <span ref={ref}></span>
  )

}

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>Ryan Lai | About Me Page</title>
        <meta name="description" content="This page provides an overview of my background, skills, and interests related to programming." />
      </Head>
      <main>
        <Layout className='pt-16 flex w-full flex-col items-center justify-center'>
          <AnimatedText text="All About Me" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:!col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
              <p className='my-4 font-medium'>
                I'm Ryan- junior developer, bedroom artist and basketball fiend. After a uninspiring 3 years pursuing a Physics degree at UCL, I graduated in the summer of 2022 with the newfound exhilaration of finally being able to steer my life into a new direction. Intrinsically I've always been a hardworking and independent soul fuelled with the unwavering ambition to do great things in life. Being a very 'right-brained' person by nature, completing this highly quantitative degree provided the final facet of the skillset needed for my next pursuit- software engineering.
              </p>
              <p className='font-medium'>
                Looking to prepare for a career in this avenue, I began studying at Makers Academy, a developer bootcamp, towards the end of 2022. Having already had plentiful experience in coding from university & personal endeavours, Maker's academy felt like the perfect opportunity to hone my craft and find new environments to thrive in. I'm now looking to play my part in a company that possesess a supportive, yet stimulating and challenging environment and hope to work with others who have the same genuine passion for software development as I do.
              </p>
            </div>

            <div className='col-span-3 relative z-0 h-max rounded-2xl border-2 border-solid border-dark bg-light xl:col-span-4 md:order-1 md:!col-span-8'>
              <div className='absolute top-0 -z-10 -right-4 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
              <img src={"https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360"} alt="image" className="picture w-full h-auto rounded-2xl"
              priority 
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:!items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumber value={5} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Projects Completed
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:!items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumber value={3} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Years of Experience
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:!items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumber value={3} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Articles Written
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Education />
          <Experience />
        </Layout>
      </main>
    </>
  );
}

export default AboutMe;