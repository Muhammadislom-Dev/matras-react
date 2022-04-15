import './App.scss';
import Aos from "aos"
import "aos/dist/aos.css"
import React, {useEffect}  from 'react'

// import { useRef, useState } from "react";
import Section from './components/Section/Section';
import Headerinput from './Home/Headerinput/Headerinput';
import SectionPage from './components/SectionPage/SectionPage';
import Sublime from './components/Sublime/Sublime';
import Aside from './components/Aside/Aside';
import Box from './components/Box/Box'; 
// import matras from './assets/img/matras.png'

function App() {

  var myVideo = document.getElementById("video1"); 

const playPause =()  =>{ 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

const makeBig =() => { 
    myVideo.width = 560; 
}  
  useEffect(() =>{
    Aos.init({});
  }, []);
  return (
    <div className="app">
       <Headerinput />
       <Section />
       <SectionPage />
       <Sublime />
       <Aside />
       <Box />
    </div>
  );
}

export default App;
