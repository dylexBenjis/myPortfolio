import './App.css';
import useLocalStorage from 'use-local-storage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import React, { useState , useEffect} from 'react';
import Page from './pages/page';
import MyWorks from './Components/Home/MySkills-Works';
import LoadingLayout from './LoadingLayout';



function App() {

//scroll state variable
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
  },[scrollNav] )
  console.log(scrollNav); 
  


//theme variable
var defaultDark  = window.matchMedia('(prefers-color-scheme: dark)').matches;
const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

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

// document.body.style.backgroundColor = 

  // var h = document.body.style.backgroundColor;
  // console.log(h)

   //project image click
   const [imageOpen, setImageOpen] = useState(false);
   const ImageToggle = () => {
     setImageOpen(!imageOpen)
   }

   const[i,setI]=useState(true);
  setTimeout(()=>{setI(false)},5500);

  return (
 <div className="App" data-theme={theme} > 
                 {/* {i ? (<LoadingLayout/>) : (*/}<>  
                          <BackgroundImageWrapper/>
                          <BrowserRouter>
                            <Routes>
                              <Route path='/' element={<Page toggle={value} scrollNav={scrollNav}  ChangeTheme={ChangeTheme} theme={theme} imageOpen={imageOpen} ImageToggle={ImageToggle}/>
                                }>
                                <Route path='project' element={<MyWorks imageOpen={imageOpen} toggle={ImageToggle} />} />
                              </Route>
                            </Routes>
                          </BrowserRouter>
                           </> {/*)
                } */}
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


