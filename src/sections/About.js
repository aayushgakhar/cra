import React from "react";

const About = () => {
  return (
    <section name="about" className="items-center">
      <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
        <div className="sm:text-right pb-8 px-4">
          <p className="hover-2 text-4xl font-bold inline border-b-4 border-primary pur">
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
            I'm an innovative programmer. I am good at creative thinking and problem
            solving, adept in Sortware development and working with different
            data structures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
