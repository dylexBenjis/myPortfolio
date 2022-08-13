import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './zoom.css'


const OnClickImage = ({src,imageOpen, toggle, animate, setAnimate}) => {




  return (
    <div onClick={setAnimate}>
    <OnClickImageCon imageOpen={imageOpen} onClick={toggle}>
        <ImageCon src={src} animate={animate}/>
    </OnClickImageCon>

    </div>

  )
}

export default OnClickImage

const OnClickImageCon = styled.div`
    display:flex ;
    position:fixed ;
    top:0 ;
    bottom: 0;
    right:0 ;
    left:0 ; background-color: rgba(1,1,1,0.9) ;
    height:100vh ;
    width:100vw ;
    align-items:center ;
    justify-content:center ;
    opacity: ${(({imageOpen})=>imageOpen ? '100%':'0')};
    z-index: ${(({imageOpen})=>imageOpen ? '100':'0')};
`
export const ImageCon = styled.img`
    display:flex;
    height:calc(100vh/1.6) ;
    width:calc(100vw/2) ;
    animation: ${({animate})=>(animate?'zoom 0.5s ease':'')};
    @media screen and (max-width:920px){
        height:calc(100vh/4) ;
        width:100vw;
    @media  (max-height:1400px){
        height: calc(100vh/2.5)
    }
    @media  (max-height:920px){
        height: calc(100vh/2)
    }
    }
    @media screen and (max-width:500px){
        height:calc(100vh/4) ;
        width:100vw;
    @media  (max-height:1400px){
        height: calc(100vh/2.5)
    }
    @media  (max-height:920px){
        height: calc(100vh/3.5)
    }
    @media  (max-height:650px){
        height: calc(100vh/3)
    }
    }


`