import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-background text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full scroll-px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-primary pur">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="text-4xl font-bold sm:text-right md:pl-24">
            <p>Hi, I'm Aayush. Nice to meet you.</p>
          </div>
          <div>
            <p>
              Innovative programmer. good at creative thinking and problem
              solving. Adept in Sortware development and working with different
              data structures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
