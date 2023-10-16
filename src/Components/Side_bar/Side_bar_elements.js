import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import {Link as LinkScroll} from 'react-router-dom'



export const SidebarCointainer = styled.aside`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: auto;
    background: var(--background);
    display: flex;
    margin-top: 60px ;
    transition: ${({scrollNav})=>( scrollNav ? '0.5s all ease-in-out': '0.5s all ease-in-out')};
    opacity: ${({IsOpen})=>(IsOpen ? '100%':'0')};
    top: ${({IsOpen})=>(IsOpen ? '0':'-100%')};

    @media screen and (min-width:700px){
        
    height: auto;
    }

`




export const SidebarWrapper= styled.div`
    color: #fff;
    margin: 5px 0px 25px 0px;
    width: 100% ;
`
export const SidebarMenu= styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: repeat(4, 30px);
    justify-content: center;
    row-gap:10px ;
`
export const SidebarLink= styled(LinkScroll)`
    display: flex;
    align-items: center; 
    justify-content: center;
    font-size: 0.9rem; font-family: monospace ;
    text-decoration: none; 
    list-style: none;
    transition: 0.2s ease-in-out;
    color: var(--text-primary);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent ; //remove button background blue color onClick  
`
export const SidebarLinks= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem; font-family: monospace ;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: var(--text-primary);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent ; //remove button background blue color onClick  
`