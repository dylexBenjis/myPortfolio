import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
    background: ${({scrollNav,IsOpen})=>(scrollNav||IsOpen ? 'var(--background)' : 'transparent')} ;
    height: ${({scrollNav})=>(scrollNav ? '80px' : '100px')} ;
    width: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 100;
    top: 0px ;       
    transition: ${({ scrollNav, IsOpen }) => ((scrollNav || IsOpen) ? 'background 0.2s linear' : '')};//chkmates mobile view
    transition: height 0.2s ease, background 0.2 linear ;
  
    @media screen and (max-width:1300px){
        height: 60px

        }
`

export const Containerr= styled.div`
    width: 100vw;
    height: auto;
    margin-right: auto; 
    margin-left: auto; 
    padding: 0px 80px 0px 80px ;
    @media screen and (max-width:1300px){
      padding: 0px 30px 0px 30px ;
    }  
    @media screen and (max-width:768px){
      padding: 0px 30px 0px 30px ;
    }  
`
export const NavBarWrapper=styled.div` 
    display: flex;
    align-items: center ;
    justify-content: space-between;
    gap:5px;
    height: 100%;
    width: 100%;
    padding:16px 0px 24px 0px;
`
 
export const LogoWrapper= styled.div` 
    height: 100%;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
`

export const Logo=styled(Link)`
    cursor: pointer;
    transition: all 0.2s ease-in-out ;
    font-size:  ${({ scrollNav }) => (scrollNav ? '30px' : '40px')};
    font-family: Zen Dots;
    font-style:  ${({scrollNav})=>(scrollNav ? 'italic' : 'italic')};
    text-decoration: none;
    text-shadow:${({scrollNav})=>(scrollNav ? '0px 0px 2px blue' : '0px 0px 4px blue')} ;
    color: orangered;

    @media screen and (max-width:768px){
    font-size:  ${({scrollNav})=>(scrollNav ? '20px' : '30px')};
    }  

`
export const MobileIcon= styled.div`
display: none;
@media screen and (max-width: 1300px){
    display: flex;
    justify-content:right ; 
}
`

export const ButtonWrapper= styled.div`
    height: 100%;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
     @media screen and (max-width:1300px){
        height: 100%;
        width: 100px ;
    }

    
`
export const ThemeIcon = styled.div`
    font-size: 3rem ;
    border-radius: 70px;
    align-content: center ;
    justify-content: center;
    align-items: center;       
    @media screen and (max-width:1300px){
        font-size: 1.5rem;
    }
    @media screen and (max-width:768px){
     font-size: 0.9rem;
    }
    
`       

export const ResumeCon= styled.a`
    width: 8rem ;
    height: 3rem ;
    display:flex ;
    align-items: center ;
    font-size: 20px;
    justify-content:center ;
    cursor: pointer;
    background-color:var(--resume); 
    border: 2px solid rgb(50,50,50);
    text-decoration: none ;
    font-weight: var(--para-weight) ;
    color: var(--text-primary) ;
    :hover{
        transform: scale(1.083);
        transition: 0.1s all ease-in-out ;
        color: orangered;
    }
    @media screen and (max-width:1300px){
      font-size: 16px ;
      height:2.5rem ;
      width:6rem ;
    }
    @media screen and (max-width:768px){
     height: 2.5rem ;
     width: 6rem;
    }
`