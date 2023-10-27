import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'
import {  appOne, apps, appTwo } from './projects'
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa'
import {BiLinkExternal} from 'react-icons/bi'
import OnClickImage from './onClickImage'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Text, TextWrapper } from '.'



var appSrc = '';
const Ddisplay=({setAppSrc,id,title, src,descc, technologies, setAnimateTrue, Toggle, imageOpen, webLink, githubLink})=> {


  return(<Idflex><C> {title}</C><div onClick={setAnimateTrue}><Id onClick={()=>{appSrc=src; }}> <A src={src} alt={title} onClick={Toggle}></A>
                  <B><D>{descc}</D>
                  <F>{technologies}</F>
                  <E>
                  <Linkk href={githubLink} target='_blank'><FaGithub style={{cursor:'pointer',}} /> </Linkk>
                  <Linkk href={webLink} target='_blank'><BiLinkExternal style={{cursor:'pointer',}} /></Linkk>
                  </E>
                  </B>
               </Id></div> </Idflex>)

        
  }  

const WebApp= ({Toggle, imageOpen}) => {

  Aos.init({
    easing:'ease-in-out',
    duration:1000,
});


const [animate, setAnimate] = useState(false)

const setAnimateTrue=()=>{
  setAnimate(true)
}
const setAnimateFalse=()=>{
  setAnimate(false)
  }
  console.log(animate)

  return (

  <SoftwareProjectDiv SoftwareProjectDiv>
    <Container>
        <MyWorksWrapper>
                <TextWrapper data-aos='fade-right'>
                    <Text>featured software projects</Text> 
                </TextWrapper>          
        <WebAppCon data-aos='zoom-in'>
          <WrapperGrid>
                    
          {apps.map((q) => {
          return (<Ddisplay key={q.id} {...q} imageOpen={imageOpen} Toggle={Toggle} setAnimateTrue={setAnimateTrue}/>)
          })}
          </WrapperGrid>        
        </WebAppCon>
      </MyWorksWrapper>
    </Container>
    {imageOpen ? <OnClickImage src={appSrc} imageOpen={imageOpen} Toggle={Toggle} animate={animate} setAnimateFalse={setAnimateFalse} />: null} 
  </SoftwareProjectDiv>

)
}

export default WebApp;


const SoftwareProjectDiv = styled.div`
  margin-top: 100px;
`

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
  display: flex ;  
  z-index:5 ;
  margin-top:15px;
  


`
const WrapperGrid= styled.div`
display: grid ; 
align-items: flex-start ;
grid-template-columns: 50% 50%;
grid-template-rows: repeat(1, 1fr) ;
column-gap: 10px ;
row-gap: 35px ; 
width: 100% ;

@media screen and (max-width:600px){
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
@media screen and (max-width:700px){
  flex-direction:column ;
}

`




const A = styled.img`
display: flex ;
position:relative ;
left: 10px ;
height: 60% ;
background-color:rgba(150,150,150,0.3);
width:30% ;
margin: 10px 0px ;
object-fit: cover ;
filter: invert(15%) sepia(55%) saturate(476%) hue-rotate(85deg) brightness(70%) contrast(150%) ;
transition: 0.5s all ease-in-out ;

:hover{
        filter:none ;
        transform: scale(1.3) ;
        z-index:99 ;
        background-color: rgb(150,150,150);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

      @media screen and (max-width:700px){
        transform: none ;
      }
    }

    @media screen and (max-width:700px){
      height:40% ;
      width:100% ;
      margin:0 ;
      left:0 ;
    }
`
const B = styled.div`
display: flex ;
flex-direction:column;
position: relative ;
right: 30px ;
width:70% ;
color: var(--text-primary) ;
gap: 10px ;
cursor: normal ;
@media screen and (max-width:700px){
      height:60% ;
      width:100% ;
      right:0 ;
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
  font-size: 22px ;
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
padding: 15px 20px;
color: var(--text-primary);
 background-color:var(--navBarLin) ;
align-content: center ;
 justify-content: center ;
 box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.3);
 @media screen and (max-width: 768px){
  font-size: 16px ;
  box-shadow: none ;
}
`
const E = styled.div`
display:flex ; 
gap:1rem ; color: var(--text-primary-light);
justify-content: right ;
font-size: 20px;
`
const F = styled.div`
display:flex ;
width:100% ;
font-size: 14px ;
color: var(--text-primary-light);
justify-content: right ;
text-align: right ;

@media screen and (max-width: 768px){
  font-size: 16px ;
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
