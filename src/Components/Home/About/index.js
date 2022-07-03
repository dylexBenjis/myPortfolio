import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../../GlobalLayout/index';
import {FaReact, FaGithub, FaJava } from 'react-icons/fa'
import Imag from '../../../Images/head.jpg'
import Aos from 'aos';
import {SiAndroidstudio, SiJavascript} from 'react-icons/si'
import Hero from '../Hero/Hero';

const Line = 'Welcome to my space';
const Linee= '.';

const height = window.innerHeight;
console.log(height)

const properHeight = height - 120;

console.log(properHeight)

const AboutUs = ({changeBtnIcon}) => {



    const [animated, setAnime]=useState(!false)
    useEffect(()=>{setTimeout(()=>{
            setAnime(!animated)                
        },  7000)}, [animated])


        //Code below for text animation

    const [typed, setTyped]=useState('')

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setTyped(Line.slice(0, typed.length+1))                
        },  150)
        return ()=> clearTimeout(timeout)
    }, [typed])

    const [typedd, setTypedd]=useState('')

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setTypedd(Linee.slice(0, typedd.length+1))                
        },  5500)
        return ()=> clearTimeout(timeout)
    }, [typedd])

    Aos.init({
        easing:'ease-in-sine',
        duration:700,
    })

    const color = {
        color: 'red'
    }
    const androidstudio={
        color:'green'
    }
    const react={
        color:'#0096ff'
    }
    const js={
        color:'#dde000'
    }

  return (
      <AboutUsContainer id='home'>
        <Hero changeBtnIcon={changeBtnIcon}/>

          <Container  >
              
              <AboutUsWrapper>
                  <FirstWrapper>
                  <Wrap><Text1 data-aos='fade-right' data-aos-once='true'>
                        Hi, I am
                    </Text1>
                    <Text2 data-aos='fade-up'  data-aos-delay='200' data-aos-once='true'>
                        Benji Chukwudile.
                    </Text2>
                    <Text3 data-aos='fade-up' data-aos-delay='300' data-aos-once='true'>
                        I build things for the web.
                    </Text3>
                    <Text4 data-aos='fade-up' data-aos-delay='400' data-aos-once='true'>
                        I'm a software engineer, specializing in building 
                        (and occasionally designing) exceptional digital
                        experiences. <br/>I am highly self-motivated, always willing
                        to improve and raise the bar. I try to keep myself up to date
                        with technologies. I <span style = {color}>love</span> coding with passion. <br/><br/>
                        I will love to hear from you. Whether it's a project, job
                        opportunity or just a chat. Feel free to contact me.
                    </Text4>
                    <Button data-aos='fade-up' data-aos-delay='500' data-aos-once='true' href='mailto : benjichukwudile@gmail.com' target='_blank'>
                        Contact me
                    </Button>
                    </Wrap><ImageWrapper data-aos='fade-left' data-aos-once='true'><Img  ></Img></ImageWrapper>
                    </FirstWrapper>
                    <SecondWrapper>
                        <Wrapp>
                        <Wrap data-aos='fade-up' data-aos-delay='1000' data-aos-once='true'>
                            <Text1 > Skills </Text1>
                            <Text4>
                                <Ul>
                                    <Li> Java <span >
                                        <FaJava/></span> </Li>
                                    <Li> Javascript </Li>
                                </Ul>
                            </Text4>
                        </Wrap>
                        <Wrap data-aos='fade-up' data-aos-delay='1100' data-aos-once='true'>
                        <Text1 > Technologies</Text1>
                            <Text4>
                                <Ul>
                                    <Li> React.js <span style={react}>
                                        <FaReact/></span></Li>

                                    <Li> Android studio <span style={androidstudio}>
                                        <SiAndroidstudio/></span></Li>
                                    
                                    <Li> Git/Github <span>
                                        <FaGithub/></span></Li>
                                </Ul>
                            </Text4>
                        </Wrap>
                        </Wrapp>
                        <Wrap data-aos='fade-up' data-aos-delay='1200' data-aos-once='true'>
                        <Text1 > Companies</Text1>
                            <Text4>
                                <Ul>
                                    <Li> dylexBenji </Li>
                                </Ul>
                            </Text4>
                        </Wrap>
                    </SecondWrapper>
                
              </AboutUsWrapper>
         </Container>
      </AboutUsContainer>
  )
};

export default AboutUs;

const AboutUsContainer= styled.div `

    margin-bottom:20px ; 
    @media screen and (max-width: 600px){
        margin-top: 0 ;
    }
`
const AboutUsWrapper= styled.div`
    height: 100%; margin: 80px 0px 150px 0px ;
    display: flex; 
    flex-direction: column;
`
const FirstWrapper= styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    gap:20px ;
    @media screen and (max-width: 1300px){
        flex-direction: column ;
    }
`
const SecondWrapper= styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    column-gap:150px ;
    row-gap: 50px ;
    margin-top:50px ;
    @media screen and (max-width: 1300px){
        flex-direction: column ;
    }
    
`

const Wrap= styled.div`
    display:flex ;
    flex-direction: column ;
    height:100% ; 
    aLign-items: left ;   
    justify-content: center ;


`
const Wrapp= styled.div`
    display:flex ;
    flex-direction: row ;
    height:100% ; 
    column-gap:150px ;
    @media screen and (max-width: 600px){
        flex-direction:column ;
        row-gap: 50px ;
    }

`
const Text1= styled.div`
    font-size: 35px; font-family: monospace ;
    font-weight: var(--para-weight);
    color: green ;    cursor: pointer;
    margin-bottom: 12px ; padding: 0px 0px 0px 15px;
    border-left: 3px soLid green ;
    /* ::after{
        content:'_' ;
        animation: bLink 1.11s step-start infinite ;
    } */
    @media screen and (max-width: 600px){
        font-size: 20px ;
    }


`
const Text2= styled.div`
    font-size: 60px;
    font-weight: bolder;
    color: var(--text-primary);     cursor: pointer;
    margin-bottom: 12px ;

    /* ::after{
        content:'_' ;
        animation: bLink 1.11s step-start infinite ;
    } */
    @media screen and (max-width: 600px){
        font-size: 35px ;
    }
`
const Text3= styled.div`
    font-size: 45px;
    font-family: monospace;
    font-weight: bold;
    color: var(--text-primary-light);     cursor: pointer;
        margin-bottom: 12px ;

    /* ::after{
        content:'_' ;
        animation: bLink 1.11s step-start infinite ;
    } */
    @media screen and (max-width: 600px){
        font-size: 25px ;
    }
`
const Text4= styled.div`
font-size: 18px;
color: var(--text-primary);     cursor: pointer;

/* ::after{
    content:'_' ;
    animation: bLink 1.11s step-start infinite ;
} */
@media screen and (max-width: 600px){
        font-size: 12px ;
    }
`
const ImageWrapper=styled.div`
    display:flex ;
    height: 200px ;
    width: 200px ;
    border: 5px soLid gray;
    border-radius: 10px ; z-index:5;
    @media screen and (max-width: 1300px){
        display: none ;
    }
`
const Img = styled.div`
    display:flex ;
    position: relative; 
    bottom: 25px ;background-image:url(${Imag});
    background-size: cover ;
    right: 25px ;       border-radius: 10px ;
    height: 200px ;
    filter:grayscale(90%) ;
    width: 200px ;   

    :hover{
            filter:none ;
        }
`

const A= styled.div`
    animation: ${({animated})=>(animated ? 'bounce 2.5s ease' : '')};
`
const Ul=styled.ul``
const Li=styled.li`
    margin-left:16px ;
    padding: 5px 0px 0px 10px ;
`
const Button = styled.a`
    width:100px ;
    text-decoration:none ;
    height:40px ;z-index:5 ;
    margin-top:12px ;
    background-color: var(--resume) ;
    color:var(--text-primary);
    display:flex ;
    align-items:center ;
    justify-content:center ;
    cursor:pointer;
    @media screen and (max-width: 600px){
        font-size: 12px ;
    }
`