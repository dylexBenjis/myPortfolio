import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { Container } from '../../../GlobalLayout';
import src1 from '../../../Images/img4.jpg'
import src2 from '../../../Images/img1.jpg'
import './anim.css'
import Resume from '../NavBar/resume';

const data= [
    { id:0,src: src1,
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
            {data.map((data)=>{ 
      return (<Slide key={data.id}>
         {data.id === current && (<> <ImgBackground curent={curent}>
        <Img src={data.src}/>
    </ImgBackground></>)} </Slide>)  })}
    
    <Container>
    <Bd>
        <Ad>
            <H1>I BUILD THINGS</H1>
            <H2>NOT ONLY for THE WEB</H2>
            <B ><Resume/></B>
        </Ad>
    </Bd> 
    </Container>

    </HeroCon>
  )
}

export default Hero

const HeroCon= styled.div`
    display: flex ;
    align-items: center;
    height: 100vh ; z-index:1 ;
    overflow-x: hidden; background-color: var(--backgrund);
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
    
    transition:  all ease ;
    animation:${({curent})=>(curent ? 'opacity 0.1s ease' : 'opacity 0.1s ease')}; 

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
const B= styled.div`
    display:flex  ;
    justify-content:center ; 
    cursor: pointer;
    z-index:20000;
    @media screen and (min-width: 768px){
        display: none ;
    }

`