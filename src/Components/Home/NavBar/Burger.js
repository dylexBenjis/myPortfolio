import React from 'react'
import styled from 'styled-components'

const Burger = ({IsOpen,scrollNav, path, b}) => {
  
        return (
    <BurgerCon>
        <A IsOpen={IsOpen} scrollNav={scrollNav} path={path} backgroundColor={b}/>
        <B IsOpen={IsOpen} scrollNav={scrollNav} path={path} backgroundColor={b}/>
        <C IsOpen={IsOpen} scrollNav={scrollNav} path={path} backgroundColor={b}/>
    </BurgerCon>
  )
}

export default Burger

const BurgerCon = styled.div`
    display:flex ;
    width:1.2rem ;
    height:1.2rem ; 
    justify-content: space-evenly ;
    flex-direction: column ;


`
const A = styled.div`
        display:flex ;
        width: 1.2rem ;
        height: 0.1rem;         
        position:relative ;
        background-color:  ${({IsOpen,scrollNav,path,backgroundColor}) => (IsOpen ? 'red' : `${(scrollNav? 'var(--text-primary)' : `${(path ? `${backgroundColor ? 'black':'white'}`:'white')}`)}`)};
        transition: background-color 0.05s linear,transform 0.2s ease-in-out ;
        
        transform: ${({IsOpen}) => (IsOpen ? 'rotate(-45deg) translate(-25%, 190% )' : '')};
`
const B = styled.div`
        display:flex ;
        width: 1.2rem ;
        height: 0.1rem;
        position:relative ;
        background-color:  ${({IsOpen,scrollNav, path, backgroundColor}) => (IsOpen ? '' :  `${(scrollNav? 'var(--text-primary)' : `${(path? `${backgroundColor ? 'black':'white'}`:'white')}`)}`)};
        transition: ${({IsOpen}) => (IsOpen ? 'background-color 0.05s linear,opacity 0.2s ease-in-out' : 'background-color 0.05s linear,opacity 0.5s ease-in-out')}  ; ;
        transform: translateX(-5px) ;
        opacity: ${({IsOpen}) => (IsOpen ? '0' : '1')}
`
const C = styled.div`
        display:flex ;
        width: 1.2rem ;
        height: 0.1rem;
        position:relative ;
        background-color:   ${({IsOpen,scrollNav, path, backgroundColor}) => (IsOpen ? 'red' :  `${(scrollNav? 'var(--text-primary)' : `${(path? `${backgroundColor ? 'black':'white'}`:'white')}`)}`)};
        transition:background-color 0.05s linear, transform 0.2s ease-in-out ;
        transform: ${({IsOpen}) => (IsOpen ? 'rotate(45deg) translate(-20%, -155%)' : '')}
`