import Navbar from "./sections/Navbar";
import Sidebar from "./sections/Sidebar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from './sections/Projects';
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
