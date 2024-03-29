import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import { Container } from '../../../GlobalLayout/index';
import {FaReact, FaGithub, FaJava } from 'react-icons/fa'
import Imag from '../../../Images/head.jpg'
import Aos from 'aos';
import {SiAndroidstudio,} from 'react-icons/si'
import Hero, { ButtonScrollText } from '../Hero/Hero';
import './desc.css';
import ScrollDown from '../scrollDown';
import { ButtonDiv, ButtonScroll } from '../Hero/Hero';
import { Link } from 'react-scroll';

// const Line = 'Welcome to my space';
// const Linee= '.';

// const height = window.innerHeight;
// console.log(height)

// const properHeight = height - 120;

// console.log(properHeight)

const data = [
    {
        id:1, companyName:'dylexBenji', role:'personal projects', duration:'',
        companyLink:'https://benji.pages.dev',
        description:[{id:1, desc:'developed a forecast web application.'},
                     {id:2, desc:'developed a solar energy estimator web application.'},
                    ]
    },
    
]





const AboutUs = ({changeBtnIcon}) => {


    // const ListOfWork=({companyName, description})=>{
    //     return (
    
    //     <Ul>
    //         <List  onClick={()=>{setDesc(description);}} descOneTrue={descOneTrue}> {companyName} </List>
    //     </Ul>
    //     )
    // }
    // const [animated, setAnime]=useState(!false)
    // useEffect(()=>{setTimeout(()=>{
    //         setAnime(!animated)                
    //     },  7000)}, [animated])


    //     //Code below for text animation

    // const [typed, setTyped]=useState('')

    // useEffect(()=>{
    //     const timeout = setTimeout(()=>{
    //         setTyped(Line.slice(0, typed.length+1))                
    //     },  150)
    //     return ()=> clearTimeout(timeout)
    // }, [typed])

    // const [typedd, setTypedd]=useState('')

    // useEffect(()=>{
    //     const timeout = setTimeout(()=>{
    //         setTypedd(Linee.slice(0, typedd.length+1))                
    //     },  5500)
    //     return ()=> clearTimeout(timeout)
    // }, [typedd])

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

    const [descRole, setDescRole] = useState(data[0].role);
    const [descCompany, setDescCompany] = useState(data[0].companyName);
    const [descCompanyLink, setDescCompanyLink] = useState(data[0].companyLink);
    const [descDuration, setDescDuration] = useState(data[0].duration);
    const [descBody, setDescBody] = useState(data[0].description);
    const [descId, setDescId] = useState(1);
    const [animate, setAnimate] = useState(false);


    // useEffect(()=>{

    //     setTimeout(()=>{
    //                if (animate===true){
    //         setAnimate(false)
    //     } 
    //     }, 300)

    // },[animate])

  return (
      <AboutUsContainer >
        <Hero changeBtnIcon={changeBtnIcon}/>
          <Container  >    
              <AboutUsWrapper>
                  <FirstWrapper id='about'>
                    <FirstDiv >
                  <Wrap>
                        <Text1 data-aos='fade-up' data-aos-once='true'>
                            Hi, I am
                        </Text1>
                        <Text2 data-aos='fade-up'  data-aos-delay='200' data-aos-once='true'>
                            Benji Chukwudile.
                        </Text2>

                        <Text4 data-aos='fade-up' data-aos-delay='400' data-aos-once='true'>
                          I am a passionate and skilled software developer who creates exceptional online experiences. With a strong foundation in coding languages, an eye for design and a commitment to delivering high-quality work, I strive to build visually appealing, user-friendly and functional applications.
                            <br/><br/>I will love to hear from you. Whether it's a project, job
                            opportunity or just a chat<span style={{color:`var(--text-primary-light)`}}> (you can hit my social links at the right-side of the screen)</span>.<br/><br/> Feel free to contact me. 
                        </Text4>
                        <Button data-aos='fade-up' data-aos-delay='500' data-aos-once='true' href='mailto:benjichukwudile@gmail.com' target='_blank'>
                            Contact me
                        </Button>
                    </Wrap>
                    <ImageWrapper data-aos='fade-up' data-aos-once='true'><Img/></ImageWrapper></FirstDiv>
                      <ButtonDiv>
                          <ButtonScroll to='experience' 
                                spy={true}
                                smooth={true}
                                offset={0}
                                hashSpy={true}
                                delay={200}
                                isDynamic={true}
                                ignoreCancelEvents={false}
                                spyThrottle={500}>
                                <ScrollDown />
                                <ButtonScrollText>
                                    To Experience
                                </ButtonScrollText>
                          </ButtonScroll>
                      </ButtonDiv>
                    </FirstWrapper>
                    <SecondWrapper id='experience'>
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
                        <Wrapcom  data-aos='fade-up' data-aos-delay='1200' data-aos-once='true'>
                        <Text1 > Experience</Text1>
                        <JobWrapper>
                            <Text4 >
                            {data.map((data)=>{
                            return (
                            <Ul key={data.id}>
                                <ListOne active={(data.id===descId?'active':'')}  onClick={()=>{setDescRole(data.role);
                                    setDescDuration(data.duration);setDescCompany(data.companyName);setDescCompanyLink(data.companyLink);setDescBody(data.description);setAnimate(true); onanimationend=()=>{setAnimate(false)}; setDescId(data.id)}} > {data.companyName} </ListOne>
                            </Ul>
                            )})}
                            </Text4>
                            <div style={{display:'flex',backgroundColor:'var(--navBarLin)', padding:'0px 15px 5px 5px', height:'100%', width:'100%'}}>
                            <Text4>
                                <Desc animation={animate}>
                                
                                    <div>{descRole} @ <a href={descCompanyLink} style={{textDecoration:'none',}}>{descCompany}</a></div><br/>
                                    <div>{descDuration}</div>
                                    {descBody.map(element=>{
                                    return (
                                    <ul key={element.id} style={{marginLeft:'20px'}}>
                                    <li>{element.desc}</li>
                                    </ul>
                                    )
                                    })}
                                    
                                </Desc>
                            
                            </Text4>     
                            </div>                                                
                        </JobWrapper>

                        </Wrapcom>
                    </SecondWrapper>

              </AboutUsWrapper>
         </Container>
      </AboutUsContainer>
  )
};

export default AboutUs;

const AboutUsContainer= styled.div `


`
const AboutUsWrapper= styled.div`
    height: auto;
    display: flex; 
    flex-direction: column;
`
const FirstWrapper= styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items:center ;
    justify-content:center ;
    position:relative ;
    @media screen and (max-width: 1300px){
        flex-direction: column ;
        row-gap: 35px ;
    }  

`
const SecondWrapper= styled.div`
    height: 100vh;
    width:100% ;
    display: flex;
    flex-direction: column;
    column-gap:150px ;
    align-items:center ;
    justify-content:center ;
    @media screen and (max-width: 1300px){
        flex-direction: column ;
        row-gap: 30px ;
    }
    
`

const Wrap= styled.div`
    display:flex ;
    flex-direction: column ;
    height:auto ; 
    width:100% ;
    align-items: left ;   

`
const Wrapcom= styled.div`
    display:flex ;
    flex-direction: column ;
    height:auto ; 
    width:100% ;
    align-items: left ;   
    z-index:2 ;

`
const Wrapp= styled.div`
    display:flex ;
    flex-direction: row ;
    height:auto ;
    width:100%;
    column-gap:150px ;
    @media screen and (max-width: 600px){
        column-gap:30px;
    }

`
const Text1= styled.div`
    font-size: 35px; font-family:  monospace ;
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
    @media screen and (max-width: 350px){
        font-size: 18px ;
    }


`
const Text2= styled.div`
    font-size: 40px;
    font-weight: bolder;
    color: var(--text-primary);     
    cursor: pointer;
    margin-bottom: 12px ;

    /* ::after{
        content:'_' ;
        animation: bLink 1.11s step-start infinite ;
    } */
    @media screen and (max-width: 600px){
        font-size: 35px ;
    }
    @media screen and (max-height: 700px){
        font-size: 25px ;
    }
`
const Text3= styled.div`
    font-size: 30px;
    font-family: monospace;
    font-weight: bold;
    color: var(--text-primary-light);     
    cursor: pointer;
        margin-bottom: 12px ;

    /* ::after{
        content:'_' ;
        animation: bLink 1.11s step-start infinite ;
    } */
    @media screen and (max-width: 600px){
        font-size: 20px ;
    }
`
const Text4= styled.div`
font-size: 18px;
color: var(--text-primary);    

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
    width: 250px ;
    z-index:2;
    :hover{
            border: none ;
        }
    @media screen and (max-width: 1300px){
        /* display: none ; */
        width:200px ;
    }

`
const Img = styled.div`
    display:flex ;
    bottom: 25px ;
    background-image:url(${Imag});
    background-size: cover ; 
    border-radius: 10px;
    height: 100% ;
    filter:grayscale(90%) ;
    width: 100% ;   
    transition: 0.6s all ease-in-out;
    :hover{
            filter:none ;
            bottom:0px;
            right:0px ;
        }

`

const A= styled.div`
    animation: ${({animated})=>(animated ? 'bounce 2.5s ease' : '')};
`
const Ul=styled.ul``
const Li=styled.li`
    cursor: pointer;
    margin-left:16px ;
    padding: 5px 0px 0px 10px ;
`
const Button = styled.a`
    width:100px ;
    text-decoration:none ;
    height:40px ;z-index:2 ;
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
const Desc = styled.div`
    display:block;
    height:auto;
    width: 100%;
    padding: 10px 0px 15px 10px; cursor:default ;
    animation: ${({animation})=>(animation?'desc 200ms':'')} ;
`
const ListOne = styled.div`    
    display:flex ;
    height: 60px ;
    width: auto;
    padding:0px 30px 0px 10px;
    align-items:center ;
    z-index:2; cursor: pointer;
    border-left: 3px solid var(--jobNotHighlighted) ;
    transition: background-color 0.3s ease, border-left 1s ease ;
    :hover{
        color: orange
    }

    ${props => props.active && css`
    border-left:3px solid var(--jobHighlited) ;
    color: orangered;
    background-color: var(--navBarLin) ;
  `}
  @media screen and (max-width:920px){
        height:40px;
    }
    @media screen and (max-width:600px){
        height:35px;
    }
`

const JobWrapper =styled.div`
    display:flex;
    flex-direction:row ;
    width:100%;
    @media screen and (max-width:920px){
        gap: 0px;
    }
    @media screen and (max-width:600px){
        gap: 0px;
    }
`


const FirstDiv = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap:40px;
    @media screen and (max-width:900px){
        flex-direction: column;
        gap:30px;
    }
`