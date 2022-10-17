import React from "react";
import SkillIcon from "../components/SkillIcon";

const icons = [
  {
    name: "python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
  },
  {
    name: "java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
  },
  // {'name': 'c', 'icon': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'},
  {
    name: "sql",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "html",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "css",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: "javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "react",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  },
];

const Skills = () => {
  return (
    <section name="skills" className="max-w-[700px] mx-auto p-4 pt-10">
      <div className="">
        <div className="px-10 sm:mx-10 lg:mx-0">
          <p className="hover-2 text-4xl font-bold inline border-primary">
            Skills
          </p>
          <p className="py-4">These are the technologies I have worked with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8">
          {icons.map((icon) => (
            <SkillIcon key={icon.name} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
