import './App.css';
import Navbar from './Components/Navbar'
import Allproject from './Components/Allproject';
import Home from './Components/Home'
import Skills from './Components/Skills'
import About from './Components/About'
import Contact from './Components/Contact'
import {data,divname} from './util' 
import Bottom from './Components/Bottom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home archi={data[0]} divname={divname}/>
      <About archi={data[1]} divname={divname}/>
      <Skills archi={data[2]} divname={divname}/>
      <Allproject archi={data[3]} divname={divname}/>
      <Contact archi={data[4]} divname={divname}/>
      <Bottom/>
    </div>
  );
}

export default App;
