import React, { useEffect, useState } from 'react'
import {SideNavv,Container ,SideNavWrapper, A, Icon, Home, HomeText, Project, ProjectText, Blog, BlogText, FooterWrapper, FooterWrapper1, SocialWrapper, GoUp} from './SideNav'
import { FaProjectDiagram, FaGithub, FaFacebook,FaTwitter, FaYoutube, FaArrowUp, FaBlog } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import {GrProjects} from 'react-icons/gr'
import {SiHiveBlockchain} from 'react-icons/si'
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

  //logic to set icon style
    const [className1, setClassName1] = useState('');
    const [home, setHome] = useState('');

    const [className2, setClassName2] = useState('');
    const [project, setProject] = useState('');

    const [className3, setClassName3] = useState('')
    const [blog, setBlog] = useState('');

    //logic for home icon
      useEffect(()=>{
        if(path1===location.pathname){
          setClassName1('active');
          setHome(true);
        }
      })

      const mouseEnterHomeIcon=()=>{
        setClassName1('active');
        setHome(true)
      }
      const mouseLeaveHomeIcon=()=>{
        setClassName1('')
        setHome(false)
      }
    //

    //logic for project icon
      useEffect(()=>{
        if(path2===location.pathname){
          setClassName2('active');
          setProject(true);
        }
      })

      const mouseEnterProjectIcon=()=>{
        setClassName2('active');
        setProject(true)
      }
      const mouseLeaveProjectIcon=()=>{
        setClassName2('')
        setProject(false)
      }
    //

    //logic for blog icon
      useEffect(()=>{
        if(path3===location.pathname){
          setClassName3('active');
          setBlog(true);
        }
      })

      const mouseEnterBlogIcon=()=>{
        setClassName3('active');
        setBlog(true)
      }
      const mouseLeaveBlogIcon=()=>{
        setClassName3('')
        setBlog(false)
      }
    //
    //icon reset: cleaning all icon set to active to allow smooth and accurate highlight of icon
    function iconReset(){
      setClassName2('')
      setProject(false)
      setClassName1('')
      setHome(false)        
      setClassName3('')
      setBlog(false)
    }
  //

  //for Goup button functionality
    const [to, setTo] = useState('');
    const checkTo = () => {
    switch('active'){
      case className1 : setTo('hero');
      break;
      case className2: setTo('project');
      break;
      default: setTo('');
    }};
    useEffect(checkTo);
  //

  //for sideNav icon style
  const Iconstyle={
    display:'flex',
    position:'fixed',
    right:'-6.25px',
    height : '40%',
    width : '40%',
  }

  Aos.init({
    easing:'ease-in-sine',
    duration:700,
})
const [expose, setExpose] = useState(false);

  return (
    <SideNavv>
      <Container>
        <SideNavWrapper>
          <A>        
            <Icon  data-aos='fade-right'>
              <Home to='' href='/' className={className1} onClick={iconReset} onMouseEnter={mouseEnterHomeIcon} onMouseLeave={mouseLeaveHomeIcon}>
                <HomeText home={home}>home</HomeText><GoHome style={Iconstyle}/>
              </Home>
            </Icon>
            <Icon  data-aos='fade-right' data-aos-delay='150'>
              <Project onMouse to='project' className={className2} onClick={iconReset} onMouseEnter={mouseEnterProjectIcon} onMouseLeave={mouseLeaveProjectIcon}>
              <ProjectText project={project}>projects</ProjectText><SiHiveBlockchain style={Iconstyle} />
              </Project>
            </Icon>
            <Icon  data-aos='fade-right' data-aos-delay='300'>
              <Blog  to='blog' className={className3} onClick={iconReset} onMouseEnter={mouseEnterBlogIcon} onMouseLeave={mouseLeaveBlogIcon}>
              <BlogText blog={blog}>blog</BlogText><FaBlog style={Iconstyle} />
              </Blog>
            </Icon>
          </A>
        </SideNavWrapper>
          <SocialWrapper data-aos='fade-in' data-aos-once='true'>
            <Github href='https://github.com/dylexBenjis' target='_blank' data-aos='fade-left' data-aos-delay='200' data-aos-once='true'><FaGithub/></Github>
            <Facebook href='https://facebook.com/benji.tentacion' target='_blank' data-aos='fade-left' data-aos-delay='300' data-aos-once='true'><FaFacebook/></Facebook>
            <Twitter href='https://twitter.com/benjichukwudile' target='_blank' data-aos='fade-left' data-aos-delay='400' data-aos-once='true'><FaTwitter/></Twitter>
            <Yt href='https://www.youtube.com/channel/UCnWtQg6qkHjREjELCelAfzA' target='_blank' data-aos='fade-left' data-aos-delay='500' data-aos-once='true'><FaYoutube/></Yt>
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
      <GoUp scroll={scroll}
        to={to}
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

const Github = styled.a`
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
const Twitter = styled.a`
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
const Facebook = styled.a`
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
const Yt = styled.a`
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
