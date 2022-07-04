import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
    background: ${({scrollNav,IsOpen})=>(scrollNav||IsOpen ? 'var(--background)' : 'transparent')} ;
    height: ${({scrollNav})=>(scrollNav ? '90px' : '120px')} ;
    width: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 10;
    top: 0px ;       
    transition: ${({scrollNav})=>( scrollNav ? '0.3s all linear': ' ')};
  
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
    align-content: center ;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding:16px 0px 24px 0px;
`
 
export const LogoWrapper= styled.div` 
    height: 100%;
    width: auto;
    display: flex;
    justify-content: left;
    align-items: center;

`
export const Logo1=styled.img`
    cursor: pointer;
    width: ${({scrollNav})=>(scrollNav? '150px' : '220px')};
    height: ${({scrollNav})=>(scrollNav? '40px' : '58px')};
    transition: 0.2s all ease-in-out ;   
    @media screen and (max-width:1300px){
    width: ${({scrollNav})=>(scrollNav? '80px' : '95px')};
    height: ${({scrollNav})=>(scrollNav? '30px' : '38px')};
    }
`
export const MobileIcon= styled.div`
display: none;
@media screen and (max-width: 768px){
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
    font-size: 2rem ;
    border-radius: 70px;
    align-content: center ;
    justify-content: center;
    align-items: center;    
    @media screen and (max-width:768px){
     font-size: 0.9rem;
    }
    
`       

export const Resume= styled(Link)`
    width: 110% ;
    height: 100% ;
    display:flex ;
    align-items: center ;
    font-size: 16px;
    justify-content:center ;
    cursor: pointer;
    background-color:var(--resume); 
    border: 0px ;
    text-decoration: none ;
    font-weight: var(--para-weight) ;
    color: var(--text-primary) ;
    :hover{
        transform: scale(1.083);
        transition: 0.1s all ease-in-out ;
        color: red;
    }
    @media screen and (max-width:1300px){
      font-size: 16px ;
      height:90% ;
      width:130% ;
    }
`

export const A= styled.div`
    display: grid; 
    height: 100%;
    grid-template-columns: 90px 40px ;
    column-gap: 50px ; 
    align-items: center ;
    @media screen and (max-width:1300px){
        grid-template-columns: 55px 25px ;
        column-gap: 35px;
    }
`