import './App.css';
import useLocalStorage from 'use-local-storage'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import styled from 'styled-components';
import React, { useState , useEffect} from 'react';
import HomePage from './pages/page';
import LoadingLayout from './LoadingLayout';
import NavBar from './Components/NavBar';
import Side_bar from './Components/Side_bar';
import SideNav from './Components/SideNav';
import Projects from './pages/projects';
import Blog from './pages/blog/blog';



function App() {


//scroll state boolean variable
  const [scrollNav, setScrollNav]= useState(false);
  const ChangeNav =() => {
      if(window.scrollY >= 15){
          setScrollNav(true)
      }
      else{
          setScrollNav(false)
      }

  }
  useEffect(()=>{
  window.addEventListener('scroll', ChangeNav)
  },[scrollNav] );
  


//theme variable
var defaultDark  = window.matchMedia('(prefers-color-scheme: dark)').matches;
const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');//initial set theme from users preference (OS setting);

//changeTheme function and save theme value; 
var value;
if (theme === 'light'){
  value = true;
} else{
  value = false;
}

const ChangeTheme=()=>{
  const newTheme= theme === 'light'?'dark':'light';
    setTheme(newTheme)
}
useEffect(()=>{
  window.addEventListener('toggle', ChangeTheme)
}, )


//project image click
const [imageOpen, setImageOpen] = useState(false);
const ImageToggle = () => {
  setImageOpen(!imageOpen)
}



//mobile menu IsOpen variable
  const [IsOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!IsOpen)
  }

 
  return (
    <div className="App" data-theme={theme} > 
      <BackgroundImageWrapper/>
      <BrowserRouter>      
      <NavBar IsOpen={IsOpen} toggle={toggle} scrollNav={scrollNav} changeBtnIcon={value} ChangeTheme={ChangeTheme} theme={theme}/>
      <Side_bar  IsOpen={IsOpen} toggle={toggle} scrollNav={scrollNav} ChangeTheme={ChangeTheme} changeBtnIcon={value} />
      <SideNav/>
        <Routes>
          <Route path='/' element={<HomePage toggle={value} scrollNav={scrollNav}  ChangeTheme={ChangeTheme} theme={theme} imageOpen={imageOpen} ImageToggle={ImageToggle}/>} />
          <Route path='/project' element={<Projects imageOpen={imageOpen} Toggle={ImageToggle} />} />
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


export const BackgroundImageWrapper= styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background: var(--background);
    transition:  all 0.2s ease-in;
`


