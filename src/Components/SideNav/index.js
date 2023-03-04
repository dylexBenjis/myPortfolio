import React, { useEffect, useState } from 'react'
import {SideNavv,Container ,SideNavWrapper, A, Icon, IconsWrapper, FooterWrapper, FooterWrapper1, SocialWrapper, GoUp} from './SideNav'
import { FaProjectDiagram, FaGithub, FaFacebook,FaTwitter, FaYoutube, FaArrowUp, FaBlog } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Aos from 'aos'

const SideNav = () => {

  const [scroll, setScroll] = useState(false);
  const X = () => {
    setScroll((window.scrollY>=50)? true : false);
  }
  useEffect(()=>{
    window.addEventListener('scroll',X)
  },[X])

  const path1= '/';
  const path2 = '/project';
  const path3 = '/blog'
  const location = useLocation('');
  const className1 = path1===location.pathname ? 'active':'';
  const className2 = path2===location.pathname ? 'active':'';
  const className3 = path3 === location.pathname ? 'active':'';

  const Iconstyle={
    height : '50%',
    width : '50%',
  }

  Aos.init({
    easing:'ease-in-sine',
    duration:700,
})

  return (
    <SideNavv>
      <Container>
        <SideNavWrapper>
          <A>        
            <Icon  data-aos='fade-right'>
              <IconsWrapper to='' href='/' className={className1}>
                <GoHome style={Iconstyle}/>
              </IconsWrapper>
            </Icon>
            <Icon  data-aos='fade-right' data-aos-delay='250'>
              <IconsWrapper to='project' className={className2}>
                <FaProjectDiagram style={Iconstyle} />
              </IconsWrapper>
            </Icon>
            <Icon  data-aos='fade-right' data-aos-delay='250'>
              <IconsWrapper to='blog' className={className3}>
                <FaBlog style={Iconstyle} />
              </IconsWrapper>
            </Icon>
          </A>
        </SideNavWrapper>
          <SocialWrapper data-aos='fade-in' data-aos-once='true'>
            <Iccon href='https://github.com/dylexBenjis' target='_blank' data-aos='fade-left' data-aos-delay='200' data-aos-once='true'><FaGithub/></Iccon>
            <Iccon3 href='https://facebook.com/benji.tentacion' target='_blank' data-aos='fade-left' data-aos-delay='300' data-aos-once='true'><FaFacebook/></Iccon3>
            <Iccon1 href='https://twitter.com/benjichukwudile' target='_blank' data-aos='fade-left' data-aos-delay='400' data-aos-once='true'><FaTwitter/></Iccon1>
            <Iccon2 href='https://www.youtube.com/channel/UCnWtQg6qkHjREjELCelAfzA' target='_blank' data-aos='fade-left' data-aos-delay='500' data-aos-once='true'><FaYoutube/></Iccon2>
          </SocialWrapper>
        <FooterWrapper >
        <TextFooter data-aos='fade-up' data-aos-delay='150' data-aos-offset='-200' data-aos-once='true'>
              built by&nbsp; 
        </TextFooter>
        <TextFooter data-aos='fade-up' data-aos-delay='300' data-aos-offset='-200' data-aos-once='true'>
            dylexBenji
        </TextFooter>
        </FooterWrapper>
      </Container>
      <GoUp scroll={scroll} to=' ' 
        spy={true}
        smooth={true}
        offset={0}
        hashSpy={true}
        delay={200}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}><FaArrowUp/></GoUp>
    </SideNavv>
  )
}

export default SideNav

const TextFooter= styled.div`
    font-size: 16px; font-family: monospace ;
    color: green;
    display: flex;
    @media screen and (max-width:1300px){
            font-size: 14px ;
        }
    @media screen and (max-width:600px){
            font-size: 10px ;
        }
    
`

const Iccon = styled.a`
    font-size: 25px;
    font-weight: var(--para-weight);
    color: var(--github);
    margin-bottom: 20px;
    display: flex; cursor: pointer;
    :hover{
      color: var(--text-primary);
    }  
    @media screen and (max-width:1300px){
            font-size: 16px ;
            margin-bottom: 10px ;
        }
        @media screen and (max-width:1300px){
            font-size: 14px ;
            margin-bottom: 10px ;
        }
`
const Iccon1 = styled.a`
    font-size: 25px;
    font-weight: var(--para-weight);
    color: var(--twitter);
    margin-bottom: 20px;
    display: flex; cursor: pointer;
    :hover{
      color: var(--twitter);
    }  
    @media screen and (max-width:1300px){
            font-size: 16px ;
            margin-bottom: 10px ;
        }
        @media screen and (max-width:1300px){
            font-size: 14px ;
            margin-bottom: 10px ;
        }
`
const Iccon3 = styled.a`
    font-size: 25px;
    font-weight: var(--para-weight);
    color: var(--blue);
    margin-bottom: 20px;
    display: flex; cursor: pointer;
    :hover{
      color: #005ba9 ;
    }  
    @media screen and (max-width:1300px){
            font-size: 16px ;
            margin-bottom: 10px ;
        }
        @media screen and (max-width:1300px){
            font-size: 14px ;
            margin-bottom: 10px ;
        }
`
const Iccon2 = styled.a`
    font-size: 25px;
    font-weight: var(--para-weight);
    color: var(--youtube);
    margin-bottom: 20px;
    display: flex; cursor: pointer;
    :hover{
      color: red ;
    }
    @media screen and (max-width:1300px){
            font-size: 20px ;
            margin-bottom: 15px ;
        }
        @media screen and (max-width:1300px){
            font-size: 14px ;
            margin-bottom: 10px ;
        }
    
`