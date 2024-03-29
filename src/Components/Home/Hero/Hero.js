import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { Container } from '../../../GlobalLayout';
// import src1 from '../../../Images/img4.jpg'
import src2 from '../../../Images/img1.jpg'
import './anim.css'
import Resume from '../../NavBar/resume';
import Aos from 'aos';
import ScrollDown from '../scrollDown';
import { Link } from 'react-scroll';


const Hero = () => {
    
    const data= [
        // { id:0,src: src1,
        //  },
        { id:1,src: src2,
        },
        
    ]

    const length = data.length;

    const [current, setCurrent ]= useState(0);
    const [curent, setCurent ]= useState(false);
    const timeout = useRef(null);

    useEffect(()=>{
        const nextSlide =()=>{
            setCurent(!curent)
            setCurrent(current===length-1 ? 0 : current+1)
            
         };
        timeout.current = setTimeout(nextSlide,20000);
     
     return function() {
         if (timeout.current){
             clearTimeout(timeout.current)
     }}
    }, [current,curent,length]) ;

    Aos.init({
        easing:'ease-in',
        duration:700,
    })

  return (
    <HeroCon  id='hero'>
        
            {/* {data.map((data)=>{ 
      return (<Slide key={data.id}>
         {data.id === current && (<>  */}
         <ImgBackground curent={curent}>
            <Img src={src2} data-aos='fade-in'/>
         </ImgBackground>
         {/* </>)} </Slide>)  })} */}
    
        <Container>
            <div style={{display:'flex', flexDirection:'column', height:'100vh', width:'100%',alignItems:'center',justifyContent:'center'}}>
                <Bd>
                    <Ad>
                        <H1>I BUILD THINGS</H1>
                        {/* <H2>NOT ONLY for THE WEB</H2> */}
                        <B ><Resume/></B>
                    </Ad>
                </Bd> 
                <ButtonDiv>
                    <ButtonScroll to='about' 
                        spy={true}
                        smooth={true}
                        offset={0}
                        hashSpy={true}
                        delay={200}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                        spyThrottle={500}>
                        <ScrollDown /><ButtonScrollText>To About</ButtonScrollText>
                    </ButtonScroll> 
                </ButtonDiv>
            </div>
        </Container >
    </HeroCon>
  )
}

export default Hero

const HeroCon= styled.div`
    display: flex ;
    flex-direction: column ;
    align-items: center;
    justify-content:center ;
    position:relative;
    height:100vh;
    height:100svh ;
    overflow: hidden; background-color: rgba(1,1,1,1);
    ::before{
        content: '';
        position: absolute;
        top:0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color:rgba(1,1,1,0.75);  
        z-index: 1; 
     }
`
const Slide = styled.div`
`

const ImgBackground= styled.div`
    display: flex ;
    position: absolute ;
    bottom:0 ;
    left:0 ;
    right:0;
    top:0 ;
    height:100% ;    

`
const Img= styled.img`
    height: 100% ;
    width: 100% ;
    object-fit: cover ;

`
const Bd=styled.div`
    display: flex ;
    height:auto ;
    width: 100% ;
    z-index:2 ;
    margin-top:  '-50px'  ;
    align-items:center ;
    justify-content: center ;
    @media screen and (max-width: 750px){
        margin-top: ${({curent})=>(curent ? '-60px' :'2px')} ;
    }

`
const Ad=styled.div`
    display: flex ;
    flex-direction:column ;
    width: 100% ; 
    row-gap:10px ;
    z-index:2 ;

`
const H1= styled.div`
    display:flex ;
    justify-content:center ;
    text-align:center ;
    font-size: 50px ;
    font-family: monospace ;
    font-weight:bolder ;
    color: #fff ;
    @media screen and (max-width: 800px){
        font-size: 40px ;
    }
    @media screen and (max-width: 500px){
        font-size: 30px ;
        
    }

`

const H2 = styled.div`
    display:flex ;
    justify-content:center ;
    text-align:center ;
    font-size: 36px ;
    font-family: monospace ;
    font-weight:bold ;
    color: rgb(200,200,200) ; cursor: pointer;
    @media screen and (max-width: 800px){
        font-size: 32px ;
    }
    @media screen and (max-width: 500px){
        font-size: 20px ;
        
    }

`
export const B= styled.div`
    display:flex  ;
    justify-content:center ; 
    cursor: pointer;
    z-index:2;

`
export const ButtonDiv= styled.div`
    display:flex  ;
    height:35px ;
    width: 100%;
    position: absolute ;
    bottom: 50px ;
    justify-content: center;
    z-index:2;

`
export const ButtonScrollText = styled.div`
    display:flex ;
    height: 100% ;
    align-items: center;
    color: gray ;
    width: 50px ;
    font-size: 12px ;
`

export const ButtonScroll= styled(Link)`
    display:flex  ;
    height:auto ;
    width: auto;
    gap: 10px ;
    z-index:2;
    cursor: pointer;

`