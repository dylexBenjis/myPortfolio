import React from 'react'
import styled from 'styled-components'

const Burger = ({IsOpen}) => {
  return (
    <BurgerCon>
        <A IsOpen={IsOpen}/>
        <B IsOpen={IsOpen}/>
        <C IsOpen={IsOpen}/>
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
        background-color:  ${({IsOpen}) => (IsOpen ? 'red' : 'var(--text-primary)')};
        transition: all 0.3s ease-in-out ;
        
        transform: ${({IsOpen}) => (IsOpen ? 'rotate(-45deg) translate(-20%, 170% )' : '')};
`
const B = styled.div`
        display:flex ;
        width: 1.2rem ;
        height: 0.1rem;
        position:relative ;
        background-color: var(--text-primary) ;
        transition: all 0.1s ease-in-out ;
        transform: translateX(-5px) ;
        opacity: ${({IsOpen}) => (IsOpen ? '0' : '1')}
`
const C = styled.div`
        display:flex ;
        width: 1.2rem ;
        height: 0.1rem;
        position:relative ;
        background-color:  ${({IsOpen}) => (IsOpen ? 'red' : 'var(--text-primary)')};
        transition: all 0.3s ease-in-out ;
        transform: ${({IsOpen}) => (IsOpen ? 'rotate(45deg) translate(-20%, -170%)' : '')}
`