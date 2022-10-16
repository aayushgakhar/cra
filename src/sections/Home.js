import React from "react";
import { Link } from "react-scroll";

import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    // <div  className='w-full h-auto min-h-screen bg-background'>

    <section
      name='home'
      className='max-w-[1000px] mx-auto px-8 md:px-24 lg:px-20 xl:px-0 py-20'
    >
      <p className='text-primary text-lg sm:text-2xl'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] bg-clip-text text-transparent bg-fixed bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-violet-700 hover:to-red-600 transition-colors duration-300'>
        Aayush Gakhar
      </h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
        I'm a Software Developer
      </h2>
      <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I'm a software developer with 2 years of coding experience. I am skilled
        in python, java, c and web development including HTML, CSS, JS, React,
        Bootstrap and Tailwind.
      </p>
      <div className=''>
        <Link
          to='work'
          smooth={true}
          duration={500}
          className='w-fit text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gradient-to-r hover:from-blue-800 hover:to-indigo-800 hover:border-blue-900'
        >
          View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
          </span>
        </Link>
      </div>
      <div className=''>
        <a
          href='https://drive.google.com/drive/folders/13HcrwHrLQaYD21GnqePtUKqAcj-pgwQK?usp=sharing'
          smooth={true}
          duration={500}
          className='w-fit text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gradient-to-r hover:from-blue-800 hover:to-indigo-800 hover:border-blue-900'
        >
          Resume
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
          </span>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='octicon arrow-symbol-mktg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
            >
              <path
                fill='currentColor'
                d='M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z'
              ></path>
              <path
                class='octicon-chevrow-stem'
                stroke='currentColor'
                d='M1.75 8H11'
                stroke-width='1.5'
                stroke-linecap='round'
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </section>

    // </div>
  );
};

export default Home;

