import React from 'react'

import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-background'>


      <div className='max-w-[1000px] mx-auto px-8 md:pl-24 flex flex-col justify-center h-full'>
        <p className='text-primary text-lg sm:text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Aayush Gakhar</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a software developer with 2 years of coding experience. I am skilled in python, java, c and web development including HTML, CSS, JS, React, Bootstrap and Tailwind.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-primary hover:border-primary'>
            View Work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
            
          </button>
        </div>
      </div>


    </div>
  )
}

export default Home 