import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../GlobalLayout';
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import Aos from 'aos';
import 'aos/dist/aos.css'
import softwareImage from '../../Images/software.jpg'
import hardwareImage from '../../Images/hardware.jpg'
import { Link } from 'react-router-dom';


// const height = window.innerHeight;

// const properHeight = height - 120;

// console.log(properHeight)


const MyWorks = ({Toggle, imageOpen}) => {
    
    Aos.init({
        easing:'ease-in-out',
        duration:1000,
    });


    const [software, setSoftware] = useState('false')
    const funcHovered1 = () => {
        setSoftware('hovered')
    };
    const funcNothovered1 = () => {
        setSoftware('')
    }

    //hardware project button logic
    const [hardware, setHardware] = useState('false')
    const funcHovered2 = () => {
        setHardware('hovered')
    };
    const funcNothovered2 = () => {
        setHardware('')
    }

  return (
    <MyWorksContainer>
        <Container id='project'>
            <MyWorksWrapper>
                <TextWrapper data-aos='fade-right'>
                    <Text>projects</Text> 
                </TextWrapper> 
                <ProjectButtonDiv>
                    
                    <ProjectButton to='/project/software_projects' className={software} onMouseEnter={funcHovered1} onMouseLeave={funcNothovered1}>
                        <ProjectButtonPicture src={softwareImage}/>
                        <ProjectButtonText>
                            software
                        </ProjectButtonText>
                        <ProjectButtonArrow className={software}>
                            <MdOutlineArrowForwardIos/>
                        </ProjectButtonArrow>
                    </ProjectButton>
                      
                   <ProjectButton to='' className={hardware} onMouseEnter={funcHovered2} onMouseLeave={funcNothovered2}>
                        <ProjectButtonPicture src={hardwareImage}/>
                        <ProjectButtonText>
                            hardware
                        </ProjectButtonText>
                        <ProjectButtonArrow className={hardware}>
                            <MdOutlineArrowForwardIos/>
                        </ProjectButtonArrow>
                  </ProjectButton> 
                </ProjectButtonDiv> 
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
export const MyWorksWrapper= styled.div` 
    height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    margin-top: 120px ;
    @media screen and (max-width: 600px){
        margin-top:90px ;
    } 
    @media screen and (max-width: 400px){
        margin-bottom: 50px ;
    } 

`
export const TextWrapper= styled.div`
    font-size: 30px;
    font-weight: var(--para-weight);
    color: var(--text-primary);
    margin-bottom: 5px;
    display: flex ;z-index:5;
    flex-direction: row ;
    gap:5px ;    cursor: pointer;
    
 @media screen and (max-width: 768px){
  font-size: 25px ;
}
    
`
export const Text= styled.div`
    border-left: 3px solid green ; padding: 0px 0px 0px 15px;
    text-decoration: none ; font-family: Zen Dots, monospace ;
    color: green;
 
`

const ProjectButtonDiv = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 18px;
    row-gap: 12px;
    margin-top: 20px;

    @media screen and (max-width:800px){
      grid-template-columns: repeat(1,1fr);
      row-gap: 25px;
    }

`
const ProjectButton = styled(Link)`
    display:grid;
    grid-template-columns: 40% 40% 20%;
    height: 100px;
    background: var(--projectButtonBackground);
    cursor: pointer;
    z-index: 10;
    text-decoration: none; 
    clip-path: polygon(20px 0%, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0% 20px);

    &.hovered{
        background: var(--projectButtonBackgroundHovered)
    }
        
    @media screen and (max-width:800px){
      height:80px;
    }

    transition: background 0.2s ease;
    
`
const ProjectButtonPicture = styled.img`
    height:100px ;
    width:100% ;
    object-fit: cover;        
    @media screen and (max-width:800px){
      height:80px;
    }
`

const ProjectButtonText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: var(--text-primary);
`

const ProjectButtonArrow = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    color: var(--text-primary);

    &.hovered{
        transform:scale(1.4);
    }

    transition: transform 0.2s ease ;
`