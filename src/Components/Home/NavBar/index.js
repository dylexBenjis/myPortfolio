import React , {useState} from 'react'
import dylex from '../../../Images/dylexBenji.png'
import { Nav, NavBarWrapper, MobileIcon, ThemeIcon,
    Logo,Logo1, LogoWrapper,Icon, A,
    ButtonWrapper, Containerr } from './NavBarElements';
import {FaBars} from 'react-icons/fa'
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import DarkModeComp from './DarkModeComp';
import Burger from './Burger';
import Resume from './resume';


const NavBar = ({ IsOpen, scrollNav, toggle,changeBtnIcon, ChangeTheme}) => {

    const path1= '/';
    const path2 = '/project'
    const location = useLocation('');
    console.log(location.pathname);
    // const className1 = ;
    // const className2 = path2===location.pathname ? 'active':'';

 
  return (
    <Nav scrollNav={scrollNav} IsOpen={IsOpen}>
        <Containerr>
            <NavBarWrapper>
                <LogoWrapper to='' >
                   <Logo1 src={dylex} scrollNav={scrollNav} />
                </LogoWrapper>
                
                <MobileIcon onClick={toggle}>
                    <Burger IsOpen={IsOpen}/>
                </MobileIcon>

                <B>
                <LinkWrapper>
                    <Button to=''  className={path1===location.pathname ? 'active':''}>
                        Home
                    </Button>
                    <Button  to='project' className={path2===location.pathname ? 'active':''}>
                        Projects
                    </Button>
                </LinkWrapper>
                <ButtonWrapper>
                    <A>
                    <Resume/>
                    <DarkModeComp  changeBtnIcon={changeBtnIcon} ChangeTheme={ChangeTheme} scrollNav={scrollNav}/>
                    </A>
                </ButtonWrapper>
                </B>
            </NavBarWrapper>
        </Containerr>
    </Nav>
  )
}

export default NavBar

const B= styled.div`
    display:flex ;
    gap:70px ;
    align-items: center ;
    align-content: center ;
    flex-direction:row ;
    @media screen and (max-width:768px){
     display: none ;
    }
`

const LinkWrapper = styled.div`
    display: flex ;
    flex-direction: row ;
    align-items: center ;
    align-content: center ;
    justify-content:center ;
    gap: 25px ;

    @media screen and (min-width:1300px){
        display:none ;
    }
    @media screen and (max-width:768px){
     display: none ;
    }
`

const Button=styled(Link)`
    font-size: 16px ;
    text-decoration: none ;  color: var(--text-primary) ;
    &.active{
        color: orangered ;
        transform: scalex(1.083) ;
    }
`
