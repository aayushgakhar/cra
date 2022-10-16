import React from "react";

import Retailimg from "../assets/retail_store.png";
import Willhero from "../assets/will_hero.png";
import Simplerisc from "../assets/simple_risc.png";
import Card from "../components/Card";

const projects = [
  {
    name: "Retail Store",
    img: Retailimg,
    desc: "A retail store management system built with MySQL, Python and Tkinter.",
    link: "https://github.com/aayushgakhar/retail_store",
  },
  {
    name: "Will Hero",
    img: Willhero,
    desc: "A simple RPG game built with Java, using javafx for the frontend. Used OOPS and event driven programming. Developed in a team of 2.",
    link: "https://github.com/aayushgakhar/will-hero",
  },
  {
    name: "Simple RISC",
    img: Simplerisc,
    desc: "A simple RISC machine simulator built with Java.",
    link: "https://github.com/aayushgakhar/Simple-risc-assembler-and-simulator",
  },
];

const Work = () => {
  return (
    <section name="work" className="max-w-[1000px] mx-auto p-4">
      {/* <div className=' '> */}
      <div className="pb-8 sm:px-10 md:px-20 lg:px-10">
        <p className="hover-2 text-4xl font-bold inline border-b-4 border-primary">
          Work
        </p>
        <p className="py-4">Check out some of my work.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-20 lg:px-10">
        {projects.map((project) => (
          <Card key={project.name} project={project} />
        ))}
      </div>

      {/* </div> */}
    </section>
  );
};

export default Work;
