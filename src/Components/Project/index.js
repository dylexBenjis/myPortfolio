import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'
import {  appOne, apps, appTwo } from './projects'
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa'
import {BiLinkExternal} from 'react-icons/bi'
import OnClickImage from './onClickImage'
import Aos from 'aos';
import 'aos/dist/aos.css'



var appSrc = ''
const Ddisplay=({setAppSrc,id,title, src,descc, technologies, toggle, imageOpen, webLink})=> {



  return(<Idflex><C> {title}</C><Id onClick={()=>{appSrc=src}}> <A src={src} alt={title} onClick={toggle}></A>
                  <B><D>{descc}</D>
                  <F>{technologies}</F>
                  <E>
                  {/* <a href='#/' style={{textDecoration:'none', color:'green'}}>blog post</a> */}
                  <FaGithub style={{cursor:'pointer',}} /> 
                  <Linkk href={webLink} target='_blank'><BiLinkExternal style={{cursor:'pointer',}} /></Linkk>
                  </E>
                  </B>
               </Id> </Idflex>)

        
  }  

const WebApp= ({toggle, imageOpen}) => {

  Aos.init({
    easing:'ease-in-out',
    duration:1000,
});

console.log(appSrc)


  return (

  < >
    <Container>
      <MyWorksWrapper>
              <WebAppCon data-aos='zoom-in'>
          <WrapperGrid>
                    
          {apps.map((q) => {
          return (<Ddisplay key={q.id} {...q} imageOpen={imageOpen} toggle={toggle} />)
          })}
          </WrapperGrid>        
          </WebAppCon>
          </MyWorksWrapper>
    </Container>
      {toggle? <OnClickImage src={appSrc} imageOpen={imageOpen} toggle={toggle} />:false} 
          </>

)
}

export default WebApp;

const MyWorksWrapper= styled.div` 
    height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    
    margin-top: 20px ;
    @media screen and (max-width: 400px){
        margin-bottom: 50px ;
    } 

`
const WebAppCon = styled.div`
  display: flex ;  z-index:5 ;
  


`
const WrapperGrid= styled.div`
display: grid ; 
align-items: flex-start ;
grid-template-columns: 50% 50%;
grid-template-rows: repeat(1, 1fr) ;
column-gap: 10px ;
row-gap: 30px ; 
width: 100% ;
@media screen and (max-width:1300px){
  row-gap: 25px ;
}
@media screen and (max-width:600px){
  row-gap: 25px ;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1,1fr) ;
}

` 
const Idflex = styled.div`
height: auto; 
width:100% ;
display:flex ; 
flex-direction: column ;
` 
const Id = styled.div`
display: flex ;
height:100% ;
width: 100% ;
flex-direction: row ; 
transition: 0.2s transform ease;


`




const A = styled.img`
display: flex ;
position:relative ;
left: 10px ;
height: 60% ;background-color:rgba(150,150,150,0.3);
width:30% ;
margin: 10px 0px ;
object-fit: cover ;
filter: invert(15%) sepia(55%) saturate(476%) hue-rotate(85deg) brightness(70%) contrast(150%) ;
transition: 0.5s all ease-in-out ;

:hover{
        filter:none ;
        z-index:999 ;
    }

    @media screen and (max-width:920px){
 left:0px ;
}
`
const B = styled.div`
display: flex ;
flex-direction:column;
position: relative ;
right: 30px ;
width:70% ;
color: var(--text-primary) ;
grid-template-columns: repeat(1, 1fr);
gap: 5px ;
grid-template-rows: auto auto;
cursor: normal ;
@media screen and (max-width:920px){
 right:10px ;
}
`
const C = styled.div`
display: flex ;
position: relative ;
right: 30px ; color:  var(--text-primary-light) ;
margin-bottom:10px ;
 font-size: 27px ; font-family:monospace ;
 justify-content: right ;
text-align: right ;

@media screen and (max-width: 768px){
  font-size: 18px ;
}
@media screen and (max-width:920px){
 right:10px ;
}
`
const D = styled.div`
display: flex ; font-family: monospace ;
flex-direction: row ;
gap: 3px ;
font-size : 16px ;
padding: 5px ;
color: var(--text-primary);
 background-color:var(--navBarLin) ;
align-content: center ;
 justify-content: center ;

 @media screen and (max-width: 768px){
  font-size: 14px ;
}
`
const E = styled.div`
display:flex ; 
gap:1rem ; color: var(--text-primary-light);
justify-content: right ;

@media screen and (max-width: 768px){
  font-size: 12px ;
}
`
const F = styled.div`
display:flex ;
font-size: 14px ;
 color: var(--text-primary-light);
justify-content: right ;
text-align: right ;

@media screen and (max-width: 768px){
  font-size: 10px ;
}
`
const Linkk = styled.a`
  text-decoration: none ;
  color: var(--text-primary-light);
`


// import React from 'react'
// import styled from 'styled-components'
// import { Container } from '../../GlobalLayout'
// import {  Apps } from './projects'


// //WebApps iterates thorough webapp, mobileapp and diy in './Element'


          

// const WebApps = () => {

//   return (
//     <WebAppCon>
//       <Container>
//         <Wrapper>
         
//         </Wrapper>
//       </Container>
//     </WebAppCon>
//   )
// }

// export default WebApps

// const WebAppCon = styled.div` background-color:red ; z-index:5 ;
//   margin: 50px 0px 50px 0px ; cursor: pointer; 
//   @media screen and (max-width:1300px){
//   margin: 50px 0px 50px 0px ;
//     }

// `
// const Wrapper = styled.div`
  


// `
