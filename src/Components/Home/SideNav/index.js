import React, { useEffect, useState } from 'react'
import {SideNavv,Container ,SideNavWrapper, A, Icon, IconsWrapper, FooterWrapper, FooterWrapper1, SocialWrapper} from './SideNav'
import { FaProjectDiagram, FaGithub, FaFacebook,FaTwitter, FaYoutube } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const SideNav = () => {

  const path1= '/dylex_app';
  const path2 = '/dylex_app/project'
  const location = useLocation('');
  console.log(location.pathname);
  const className1 = path1===location.pathname ? 'active':'';
  const className2 = path2===location.pathname ? 'active':'';

  const Iconstyle={
    height : '50%',
    width : '50%',
  }
  console.log(path1)
  return (
    <SideNavv>
      <Container>
        <SideNavWrapper>
          <A>        
            <Icon>
              <IconsWrapper to='' href='/dylex_app' className={className1}>
                <GoHome style={Iconstyle}/>
              </IconsWrapper>
            </Icon>
            <Icon>
              <IconsWrapper to='project' className={className2}>
                <FaProjectDiagram style={Iconstyle} />
              </IconsWrapper>
            </Icon>
          </A>
        </SideNavWrapper>
          <SocialWrapper>
            <Iccon><FaGithub/></Iccon>
            <Iccon3><FaFacebook/></Iccon3>
            <Iccon1><FaTwitter/></Iccon1>
            <Iccon2><FaYoutube/></Iccon2>
          </SocialWrapper>
        <FooterWrapper>
        <TextFooter>
              built by dylexBenji
        </TextFooter>
        </FooterWrapper>
      </Container>
    </SideNavv>
  )
}

export default SideNav

const TextFooter= styled.div`
    font-size: 16px; font-family: monospace ;
    color: var(--text-primary-light);
    margin-top  : 20px ;
    display: flex;
    @media screen and (max-width:1300px){
            font-size: 14px ;
            margin-top:20px ;
        }
    @media screen and (max-width:600px){
            font-size: 10px ;
            margin-top:25px ;
        }
    
`

const Iccon = styled.div`
    font-size: 25px;
    font-weight: var(--para-weight);
    color: var(--text-primary-light);
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
const Iccon1 = styled.div`
    font-size: 25px;
    font-weight: var(--para-weight);
    color: var(--text-primary-light);
    margin-bottom: 20px;
    display: flex; cursor: pointer;
    :hover{
      color: skyblue ;
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
const Iccon3 = styled.div`
    font-size: 25px;
    font-weight: var(--para-weight);
    color: var(--text-primary-light);
    margin-bottom: 20px;
    display: flex; cursor: pointer;
    :hover{
      color: blue ;
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
const Iccon2 = styled.div`
    font-size: 25px;
    font-weight: var(--para-weight);
    color: var(--text-primary-light);
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