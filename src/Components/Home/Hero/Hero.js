import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { Container } from '../../../GlobalLayout';
import src1 from '../../../Images/img4.jpg'
import src2 from '../../../Images/img1.jpg'
import './anim.css'

const data= [
    { id:1,src: src1,
     },
     { id:1,src: src2,
     },
     
]

const Hero = () => {

    const length = data.length;

    const [current, setCurrent ]= useState(0);
    const [curent, setCurent ]= useState(false);
    const timeout = useRef(null);

console.log(curent)
    useEffect(()=>{
        const nextSlide =()=>{
            setCurent(!curent)
            setCurrent(current===length-1?0: current+1)
            
         };
        timeout.current = setTimeout(nextSlide,20000);
     
     return function() {
         if (timeout.current){
             clearTimeout(timeout.current)
     }}
    }, [current,curent,length]) ;

  return (
    <HeroCon>
            {data.map((data, index)=>{ 
      return (<Slide key={index}>
         {index === current && (<> <ImgBackground curent={curent}>
        <Img src={data.src}/>
    </ImgBackground></>)} </Slide>)  })}
    
    <Container>
    {data.map((data, index)=>{ 
      return (<Slide key={index}>
         {index === current && (<>
    <Bd>
        <Ad>
            <H1>I MAKE THINGS</H1>
            <H2>NOT ONLY for the WEB</H2>
            <B>FRONT-END DEVELOPMENT,...</B>
        </Ad>
    </Bd></>)} </Slide>)  })}
    </Container>

    </HeroCon>
  )
}

export default Hero

const HeroCon= styled.div`
    display: flex ;
    align-items: center;
    position: relative ;
    height: 100vh ; z-index:-1 ;
    overflow-x: hidden; background-color: var(--backgrund);
    ::before{
        content: '';
        position: absolute;
        top:0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color:rgba(1,1,1,0.75);  
        z-index: 2; 
     }
`
const Slide = styled.div``

const ImgBackground= styled.div`
    display: flex ;
    position: absolute ;
    bottom:0 ;
    left:0 ;
    right:0;
    top:0 ;
    height:100% ; 
    
    transition:  all ease ;
    animation:${({curent})=>(curent ? 'opacity 0.3s ease' : 'opacity 0.3s ease')}; 

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
    z-index:3 ;
    margin-top:  '-50px'  ;
    position: relative ;
    justify-content: center ;
    @media screen and (max-width: 750px){
        margin-top: ${({curent})=>(curent ? '-60px' :'2px')} ;
    }

`
const Ad=styled.div`
    display: grid ;
    width: 100% ;
    grid-template-columns: repeat(1, 1fr) ;
    grid-template-rows: repeat(2, 1fr) ;
    z-index:3 ;
    position: relative ;

`
const H1= styled.div`
    display:flex ;
    justify-content:center ;
    text-align:center ;
    font-size: 50px ;
    font-family: monospace ;
    font-weight:bold ;
    color: #fff ;
    padding: 10px 0px 0px 0px ;
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
    color: rgb(200,200,200) ;
    padding: 5px 0px 10px 0px ;
    @media screen and (max-width: 800px){
        font-size: 32px ;
    }
    @media screen and (max-width: 500px){
        font-size: 20px ;
        
    }

`
const B= styled.div`
    display:flex ;
    justify-content:center ;
    font-size: 25px ;
    font-family: monospace ; 
    font-weight:bold ;
    color: #fff ;
    margin:14px 0px ;
    @media screen and (max-width: 800px){
        font-size: 20px ;
    }
    @media screen and (max-width: 500px){
        font-size: 14px ;    
        margin:5px 0px ;
    }
    @media screen and (max-width: 400px){
        font-size: 12.5px ;
    }
    @media screen and (max-width: 350px){
        font-size: 10px ;
    }
`