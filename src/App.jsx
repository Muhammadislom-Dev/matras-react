import './App.scss';
import Aos from "aos"
import "aos/dist/aos.css"
import React , { useEffect } from 'react'
import Section from './components/Section/Section';
import Headerinput from './Home/Headerinput/Headerinput';

function App() {
  useEffect(() =>{
    Aos.init({});
  }, []);
  return (
    <div className="App">
       <Headerinput />
       <Section />
    </div>
  );
}

export default App;
