
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Bottom from "./components/Bottom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


// import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className='main'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Bottom />
    </main>
  );
}


export default App;