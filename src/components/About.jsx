import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/all";
import React from 'react'
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useGSAP(()=>{
    const clipAnimation = gsap.timeline({
      scrollTrigger:{
        trigger:"#clip",
        start:'center center',
        end: '+=800 center ',
      scrub:1,
      pin:true,
      pinSpacing:true,
      }
    })
  clipAnimation.to('.mask-clip-path',{
    width:'100vw',
    height:'100vh',
    borderRadius:0
    })
  })
  return (
    <div id='about' className='min-h-screen w-screen'>
        <div className='relative mb-8 mt-34 flex flex-col items-center gap-5'>
          <h2 className='mt-20
          font-general text-sm uppercase md:text-[10px]'>Welcome</h2>

          <AnimatedTitle title=" Hi, I’m a <b>web developer</b> dedicated to crafting professional, visually stunning websites. With a focus on clean design and seamless functionality, <b>I turn ideas into engaging online experiences that drive results.</b>" containerClass="mt-5 !text-black text-center"/>

        <div className='about-subtext'>
        <p>If you're looking for a dedicated web developer who can bring your ideas to life with seamless design and functionality, let's connect!</p>
        </div>
        </div>
      <div className="h-dvh w-screen" id='clip'>
        <div className="mask-clip-path about-image">
          <img src="img/about.webp" alt="Background"
          className='absolute left-0 top-0
          size-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default About