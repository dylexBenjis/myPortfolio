import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Container } from '../../../GlobalLayout';
import { FaLink } from 'react-icons/fa'

import WebApp from '../../Project';
import Aos from 'aos';
import 'aos/dist/aos.css'


const height = window.innerHeight;
console.log(height)

const properHeight = height - 120;

console.log(properHeight)

const MyWorks = ({toggle,}) => {
    Aos.init({
        easing:'ease-in-out',
        duration:1000,
    });
  return (
      <MyWorksContainer id='project'>
          <Container>
              <MyWorksWrapper>
                  <TextWrapper data-aos='fade-right'>
                  <Text>some featured projects</Text> 
                  </TextWrapper>
                   <A data-aos='zoom-in' >
                   <WebApp />
                   </A>
              </MyWorksWrapper>

          </Container>
      </MyWorksContainer>
  )
};

export default MyWorks;

const MyWorksContainer= styled.div` 
    width: 100%; 
    margin-bottom: 20px ; 

`
const MyWorksWrapper= styled.div` 
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    margin-top: 120px ;
    @media screen and (max-width: 400px){
        margin-bottom: 50px ;
    } 

`
const TextWrapper= styled.div`
    font-size: 30px;
    font-weight: var(--para-weight);
    color: var(--text-primary);
    margin-bottom: 45px;
    display: flex ;z-index:5;
    flex-direction: row ;
    gap:5px ;    cursor: pointer;
    
 @media screen and (max-width: 768px){
  font-size: 25px ;
}
    
`
const Text= styled.div`
    border-left: 3px solid green ; padding: 0px 0px 0px 15px;
    text-decoration: none ; font-family:monospace ;
    color: green;
 
`
const A = styled.div`
    z-index:5 ;
`