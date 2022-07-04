import styled from 'styled-components';
import { Link as LinkS } from 'react-router-dom'

export const SideNavv= styled.div`

`

export const Container= styled.div`
    width:100vw ;
    height: 100vh; 
    align-items: center ;
    justify-content:center ;
    align-self: center ;
    display: flex ; z-index:1 ;
    position: fixed ;
    bottom: 0px ;

`
export const SideNavWrapper = styled.div`
    display: flex ;
    position: absolute ;
    height:80px ;
    width:200px ;
    left: 10px ;
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
            right: 10px;
            width: 32px ;
        }
        @media screen and (max-width:600px){
            right: 5px;
            width: 20px ;
        }

`

export const A = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr) ;
    row-gap:0px ;
    align-items: center ;
    justify-content:center ;
    position: fixed ;
`
export const Icon= styled.div`
    display: flex ;
    height: 60px ;
    width:60px ;
    align-items: center ;
    justify-content:center ; 
`
export const IconsWrapper = styled(LinkS)`
    display: flex ;
    height: inherit ;
    width: inherit ;
    align-items: center ;
    justify-content:center ;
    position:fixed ;
    cursor: pointer;transition: 0.2s all ease-in-out ;
    color: var(--text-primary) ;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, var(--navBarLine) 100%),
                linear-gradient(180deg, rgba(0,0,0,0) 0%, var(--navBarLine) 100%),
                linear-gradient(180deg, rgba(0,0,0,0) 0%, var(--navBarLine) 100%),
                linear-gradient(180deg, var(--navBarLine) 0%, transparent 100%);
    :hover {
        transform: scalex(1.083);
        
    }    
    :active {
        transform: scale(0.85);
    }
    &.active{
        color: orangered ;
        transform: scalex(1.083) ;
    }

               
`