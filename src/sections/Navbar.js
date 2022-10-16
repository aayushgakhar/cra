import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "../assets/AG-logos_transparent.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

// eslint-disable-next-line
import {
  Link,
} from "react-scroll";

const navigation = [
  { name: "Home", href: "#home", current: true, offset: 0 },
  { name: "About", href: "#about", current: true, offset: 0 },
  { name: "Skills", href: "#skills", current: false, offset: 0 },
  { name: "Work", href: "#projects", current: false, offset: 0 },
  { name: "Contact", href: "#contact", current: true, offset: 0 },
];

const social = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/aayush-gakhar/",
    icon: FaLinkedin,
    color: "#2060fc",
  },
  {
    name: "Github",
    href: "https://github.com/aayushgakhar",
    icon: FaGithub,
    color: "#333333",
  },
  {
    name: "Email",
    href: "mailto:aayushgakhar13@gmail.com",
    icon: HiOutlineMail,
    color: "#6fc2b0",
  },
  {
    name: "Resume",
    href: "https://drive.google.com/drive/folders/13HcrwHrLQaYD21GnqePtUKqAcj-pgwQK?usp=sharing",
    icon: BsFillPersonLinesFill,
    color: "#565f69",
  },
];

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#041C32] text-gray-300 z-50">
      <div>
        <img src={Logo} alt="AG" className="w-[50px]" />
      </div>
      {/* menu */}
      <ul className="hidden sm:flex">
        {navigation.map((item) => (
          <li className="px-4">
            <Link
              activeClass="active"
              to={item.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={500}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="sm:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden opacity-0"
            : "absolute top-0 left-0 flex flex-col justify-center items-center w-full h-screen bg-background opacity-100 transition-opacity duration-300"
        }
      >
        {navigation.map((item) => (
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to={item.name.toLowerCase()}
              smooth={true}
              duration={500}
              offset={item.offset}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* social links */}
      <div className="flex flex-col fixed top-[35%] left-0">
        <ul className="">
          {social.map((item) => (
            <li
              className={
                "flex md:w-[160px] w-[110px] h-[60px] rounded-sm justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300"
              }
              style={{ backgroundColor: item.color }}
            >
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href={item.href}
              >
                {item.name}
                <item.icon size={30}></item.icon>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
