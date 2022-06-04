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
    <section name='work' className="max-w-[1000px] mx-auto p-4">
      {/* <div className=' '> */}
        <div className='pb-8 sm:px-10 md:px-20 lg:px-10'>
          <p className='text-4xl font-bold inline border-b-4 border-primary'>Work</p>
          <p className='py-4'>Check out some of my work.</p>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-20 lg:px-10'>
          {projects.map((project) => (
            <div style={{backgroundImage: `url(${project.img})`}}
            className='shadow-lg container rounded-md mx-auto bg-no-repeat bg-center bg-cover hover:scale-[1.02] h-[250px] duration-300'>
              
              <div className='rounded-md h-full w-full opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center text-center bg-gradient-to-br from-sky-500/90 to-indigo-500/90'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                {project.name}
                </span>
                <div className='pt-8 text-center'>
                  <a href={project.link}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 mx-auto bg-white text-gray-700 font-bold text-lg hover:bg-gray-200'>
                    github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      {/* </div> */}
    
    
    
    </section>
  )
}

export default Work