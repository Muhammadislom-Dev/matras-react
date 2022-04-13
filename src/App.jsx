import './App.scss';
import Aos from "aos"
import "aos/dist/aos.css"
import React , { useEffect } from 'react'
import Section from './components/Section/Section';
import Headerinput from './Home/Headerinput/Headerinput';
import SectionPage from './components/SectionPage/SectionPage';
import Sublime from './components/Sublime/Sublime';
import Aside from './components/Aside/Aside';

function App() {
  useEffect(() =>{
    Aos.init({});
  }, []);
  return (
    <div className="App">
       <Headerinput />
       <Section />
       <SectionPage />
       <Sublime />
       <Aside />
    </div>
  );
}

export default App;
