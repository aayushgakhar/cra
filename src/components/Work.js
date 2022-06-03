import React from 'react'

import Retailimg from '../assets/retail_store.png'
import Willhero from '../assets/will_hero.png'
import Simplerisc from '../assets/simple_risc.png'

const projects = [
  {'name': 'Retail Store', 'img': Retailimg, 'desc': 'A retail store management system built with MySQL, Python and Tkinter.', 'link': 'https://github.com/aayushgakhar/retail_store'},
  {'name': 'Will Hero', 'img': Willhero, 'desc': 'A simple RPG game built with Java, using javafx for the frontend.', 'link': 'https://github.com/aayushgakhar/will-hero'},
  {'name': 'Simple RISC', 'img': Simplerisc, 'desc': 'A simple RISC machine simulator built with Java.', 'link': 'https://github.com/aayushgakhar/Simple-risc-assembler-and-simulator'}
]

const Work = () => {
  return (
    <div name='work' className="w-full h-screen min-h-fit bg-background text-gray-300">
      <div className='w-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-primary'>Work</p>
          <p className='py-4'>Check out some of my work.</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='shadow-lg group container rounded-md flex justify-center items-center mx-auto card'>
            <div>
              <span>

              </span>
              <div>
                <a href=''>
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    
    
    
    </div>
  )
}

export default Work