import React, {useEffect, useState} from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AboutUs from '../Components/Home/About';
import NavBar from '../Components/Home/NavBar';
import SideNav from '../Components/Home/SideNav';
import Side_bar from '../Components/Home/Side_bar';
import OnClickImage from '../Components/Project/onClickImage';
import { Container } from '../GlobalLayout';

const Page = ({ toggle, scrollNav, ChangeToggle, ChangeTheme, theme, ImageToggle, imageOpen}) => {

  //path variable to keep track of react outlet
  const [path, setPath] = useState();
  const location = useLocation();
  console.log(location.pathname);
  useEffect(()=>{  
    if(location.pathname==='/'){
    setPath(true);}
    else{setPath(false)

  }}, [location.pathname, path])
  console.log(path)

//mobile menu IsOpen variable
  const [IsOpen, setIsOpen] = useState(false)

  const togggle = () => {
      setIsOpen(!IsOpen)
  }

 

  return (
    <div >

    <NavBar IsOpen={IsOpen} toggle={togggle} changeBtnIcon={toggle} scrollNav={scrollNav} ChangeToggle={ChangeToggle} ChangeTheme={ChangeTheme} theme={theme}/>
    <Side_bar  IsOpen={IsOpen} scrollNav={scrollNav} toggle={togggle} ChangeTheme={ChangeTheme} changeBtnIcon={toggle} ChangeToggle={ChangeToggle}/>
 
    {/* <A>
      <Container> */}
    {path?<AboutUs />:<Outlet/>}
    {/* </Container>
    </A> */}
    <SideNav/>
    </div>
  )
}

export default Page

const A= styled.div`
  display: flex ;
  margin-left: auto ;
  margin-right: auto ;
  margin-top: -140px ;
`