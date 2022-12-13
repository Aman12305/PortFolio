import {useEffect, useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Allproject from './Components/Allproject';
import Home from './Components/Home'
import Skills from './Components/Skills'
import About from './Components/About'
import Contact from './Components/Contact'
import {data,divname} from './util' 
import Bottom from './Components/Bottom';
import Loading from './Components/Loading';



function App() {
  const [loading,setLoading] = useState('true');

  async function timeout(delay)
  {
    return new Promise(res=>setTimeout(res,delay));
  }

  const onLoading = async() =>{
    await timeout(6000);
    console.log("i am Loaded sucessfully");
    setLoading(false);
  }

  useEffect(()=>{
    window.onload = onLoading();
  },[window.onload])

  return (
    <div className="App">
      {
        loading && <Loading/>
      }
      {
        !loading && 
        <>
        <Navbar/>
        <Home archi={data[0]} divname={divname}/>
        <About archi={data[1]} divname={divname}/>
        <Skills archi={data[2]} divname={divname}/>
        <Allproject archi={data[3]} divname={divname}/>
        <Contact archi={data[4]} divname={divname}/>
        <Bottom/>
        </>
      }
    </div>
  );
}

export default App;
