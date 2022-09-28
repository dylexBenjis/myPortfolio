import React from 'react'
import styled from 'styled-components'
import {CgSpinnerTwo} from 'react-icons/cg'
const LoadingLayout = () => {
  return (
    <LoadingCon>
        <Spinner >D</Spinner>
    </LoadingCon>
  )
}

export default LoadingLayout

const LoadingCon = styled.div`
    height:100vh ;
    width:100vw ;
    display:flex ;
    position:fixed ;
    top:0 ;
    right:0 ;
    left:0 ;
    bottom:0 ;
    align-items:center ;
    justify-content:center ;
    background-color: var(--background) ;
    @keyframes spinner{
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
`
const Spinner  = styled.div`
    width:120px ;
    height:120px ;
 
    color:#3f3f;
    animation: spinner 1.5s linear infinite; font-size:20px;
`
