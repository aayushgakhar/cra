import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from "./components/About";
import Skills from "./components/Skills";
import Work from './components/Work'

import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';




const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'About', href: '#about', current: true },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Work', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: true },
  // { name: 'Calendar', href: '#', current: false },
]

const social = [
  {'name':'Linkedin','href':'/','icon':FaLinkedin,'color':'#2060fc'},
  {'name':'Github','href':'/','icon':FaGithub,'color':'#333333'},
  {'name':'Email','href':'/','icon':HiOutlineMail,'color':'#6fc2b0'},
  {'name':'Resume','href':'/','icon':BsFillPersonLinesFill,'color':'#565f69'},
]


function App() {
  return (
    <div>
      <Navbar navigation={navigation} social={social}/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
    </div>
    

    
  );
}

export default App;
