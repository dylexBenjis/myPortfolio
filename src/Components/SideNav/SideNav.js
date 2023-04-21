import styled from 'styled-components';
import { NavLink as LinkS } from 'react-router-dom'
import { Link } from 'react-scroll';

export const SideNavv= styled.div`

`

export const Container= styled.div`
    width:100vw ;
    height: 100vh; 
    align-items: center ;
    justify-content:center ;
    align-self: center ;
    display: flex ; z-index:2 ;
    position: fixed ;
    bottom: 0px ;

`
export const SideNavWrapper = styled.div`
    display: flex ;
    position: absolute ;
    left: 80px ;
    align-items: center ;
    justify-content:center ;
    @media screen and (max-width:1300px){
        display:none ;
    }
`
export const FooterWrapper = styled.div`
    display: flex ;
    flex-direction: row ;
    position: absolute ;
    height:auto ;
    width:auto ;
    right:50px;
    bottom: 10px ;
    align-items: center ;
    justify-content:center ; 
    @media screen and (max-width:1300px){
            transform: rotate(90deg) ; 
            flex-direction: column ;
            left: calc(100px - 100vw); 
            bottom: 50px ;
        }
        @media screen and (max-width:600px){
            left: calc(80px - 100vw); 
            bottom: 50px ;
        }
`
export const SocialWrapper = styled.div`
    display: flex ;
    flex-direction: column ;
    position: absolute ;
    height:auto ;
    width:50px ; 
    right:20px;
    bottom: 10px ;
    align-items: center ;
    justify-content:center ;
    &:after{
        content: '';
        display: flex  ;
        width:3px ;
        height: 90px ;
        margin: 0px 0px 0px 0px;
        background-color: var(--text-primary-light);
        @media screen and (max-width:1300px){
            width: 1.5px ;
        }
        @media screen and (max-width:600px){
            width: 0.75px;
        }
    }        
    @media screen and (max-width:1300px){
            right: 20px;
            width: 32px ;
        }
        @media screen and (max-width:600px){
            right: 5px;
            width: 20px ;
        }

`

export const A = styled.div`
    display: flex;
    flex-direction:column ;
    height:auto ;
    row-gap:2px ;
    align-items: center ;
    justify-content:center ;
    position: fixed ;
    color:green,
`
export const Icon= styled.div`
    display: flex ;
    height: 55px ;
    width: 150px ;
    align-items: center ;
    justify-content:right ; 
`
export const Home = styled(LinkS)`
    display: flex ;
    height: 100% ;
    width: ${({home})=>(home?'120px':'50px')} ;
    align-items: center ;
    justify-content:space-between ;
    text-decoration: none ;
    position:fixed ;
    padding-left: 20px ;
    padding-right: 5px ;
    cursor: pointer;
    transition: width 0.2s ease-out ;
    color: var(--text-primary) ;
    background-color: var(--navBarLineSolid);

    //for active classname
    &.active{
        color: orangered ; 
        width: 120px ;
    }
                
`
export const HomeText = styled.div`
    opacity:${({home})=>(home?'1':'0')} ;
    transition: ${({home})=>(home?'opacity 0.35s ease-in-out':'opacity 0.05s ease-in-out')} ;
`

export const Project = styled(LinkS)`
    display: flex ;
    height: 100% ;
    width:  ${({project})=>(project?'120px':'50px')};
    align-items: center ;
    text-decoration: none ;
    justify-content:space-between ;
    position:fixed ;
    padding-left: 20px ;
    padding-right: 5px ;
    cursor: pointer;transition: 0.2s all ease-in-out ;
    color: var(--text-primary) ;
    background-color: var(--navBarLineSolid);

    //for active classname
    &.active{
        color: orangered ; 
        width: 120px ;
    }
                
`
export const ProjectText = styled.div`
    opacity:${({project})=>(project?'1':'0')} ;
    transition: ${({project})=>(project?'opacity 0.35s ease-in-out':'opacity 0.05s ease-in-out')} ;
`

export const Blog = styled(LinkS)`
    display: flex ;
    height: 100% ;
    width:  ${({blog})=>(blog?'120px':'50px')} ;
    text-decoration: none ;
    align-items: center ;
    justify-content:space-between ;
    position:fixed ;
    padding-left: 20px ;
    padding-right: 5px ;
    cursor: pointer;transition: 0.2s all ease-in-out ;
    color: var(--text-primary) ;
    background-color: var(--navBarLineSolid);

    //for active classname
    &.active{
        color: orangered ; 
        width: 120px ;
    }
                   
`
export const BlogText = styled.div`
    opacity:${({blog})=>(blog?'1':'0')} ;
    transition: ${({blog})=>(blog?'opacity 0.35s ease-in-out':'opacity 0.05s ease-in-out')} ;
`
export const GoUp = styled(Link)`
    display: flex ;
    flex-direction: column ;
    position: fixed ;
    background-color:rgba(39,200,72,0.2) ;
    color: var(--text-primary) ;
    height:3rem ;
    width: 3rem ; 
    right:${({scroll})=>(scroll?'100px':'-60px')};
    bottom: 70px ;
    font-size: 1rem ;
    border-radius:10px ;
    align-items: center ;
    justify-content:center ;
    z-index:10 ;
    transition: 0.1s all ease-in-out ;
    cursor: pointer;
    @media screen and (max-width:1300px){
            right: ${({scroll})=>(scroll?'3rem':'-3rem')};
            font-size: 0.7rem ;
        }
        @media screen and (max-width:600px){
            right: ${({scroll})=>(scroll?'1.7rem':'-3rem')};
            bottom:50px;
        }
        :hover{
            transform: scale(1.1) ;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
        }

`