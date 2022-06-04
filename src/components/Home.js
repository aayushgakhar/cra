import React from 'react'
import { Link } from "react-scroll";

import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    // <div  className='w-full h-auto min-h-screen bg-background'>


      <section name='home' className='max-w-[1000px] mx-auto px-8 md:px-24 lg:px-20 xl:px-0 py-20'>
        <p className='text-primary text-lg sm:text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] bg-clip-text text-transparent bg-fixed bg-gradient-to-r from-indigo-500 to-violet-500'>Aayush Gakhar</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a software developer with 2 years of coding experience. I am skilled in python, java, c and web development including HTML, CSS, JS, React, Bootstrap and Tailwind.</p>
        <div className=''>

          <Link to="work" smooth={true} duration={500} className='w-fit text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gradient-to-r hover:from-blue-800 hover:to-indigo-800 hover:border-blue-900'>
            View Work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
            
          </Link>
        </div>
      </section>


    // </div>
  )
}

export default Home 