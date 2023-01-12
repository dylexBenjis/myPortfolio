import React , {useEffect, useState} from 'react'
import dylex from '../../Images/dylexBenji.png'
import { Nav, NavBarWrapper, MobileIcon, ThemeIcon,
    Logo,Logo1, LogoWrapper,Icon, A,
    ButtonWrapper, Containerr } from './NavBarElements';
import {FaBars} from 'react-icons/fa'
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import DarkModeComp from './DarkModeComp';
import Burger from './Burger';
import Aos from 'aos';


const NavBar = ({ IsOpen, scrollNav, toggle,changeBtnIcon, ChangeTheme}) => {

    const path1= '/';
    const path2 = '/project'
    const location = useLocation('');
    // const className1 = ;
    // const className2 = path2===location.pathname ? 'active':'';

    Aos.init({
        easing:'ease-in-sine',
        duration:700,
    })

    const[path, setPath] = useState(false);
    useEffect(()=>{
        if(location.pathname===path2){
            setPath(true)
        }
        else(setPath(false))
    },[path2, location.pathname]);

  return (
    <Nav scrollNav={scrollNav} IsOpen={IsOpen}>
        <Containerr>
            <NavBarWrapper>
                <LogoWrapper to='' data-aos='fade-in' data-aos-delay='250'>
                   <Logo1 src={dylex} scrollNav={scrollNav} />
                </LogoWrapper>
                
                <MobileIcon onClick={toggle} data-aos='fade-in' data-aos-delay='400' >
                    <Burger IsOpen={IsOpen} scrollNav={scrollNav} path={path} b={changeBtnIcon}/>
                </MobileIcon>

                <B data-aos='fade-in' data-aos-delay='400'>
                <LinkWrapper >
                    <Button to='' className={path1===location.pathname ? 'active':''} >
                        Home
                    </Button>
                    <Button  to='project' className={path2===location.pathname ? 'active':''} >
                        Projects
                    </Button>
                    <Button  to='blog' className={path2===location.pathname ? 'active':''} >
                        Projects
                    </Button>
                </LinkWrapper>
                <ButtonWrapper>
                    <A>
                    <DarkModeComp  changeBtnIcon={changeBtnIcon} ChangeTheme={ChangeTheme} scrollNav={scrollNav} data-aos='fade-in'/>
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
    height:100% ;
    width:100% ;
    column-gap:70px ;
    align-items: center ;
    justify-content: right ;
    flex-direction:row ;
    @media screen and (max-width:768px){
     display: none ;
    }
`

const LinkWrapper = styled.div`
    display: flex ;
    flex-direction: row ;
    align-items: center ;
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
    text-decoration: none ;  
    color: var(--text-primary) ;
    &.active{
        color: orangered ;
        transform: scalex(1.083) ;
    }
`
