import React from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'
import {  Apps } from './projects'
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa'
import {BiLinkExternal} from 'react-icons/bi'

const github_={
  cursor:'pointer',
}

const Ddisplay=({id,title, src,descc, desc})=> {


  return(<Idflex><C> {title}</C><Id>  <A src={src} alt={title}></A>
                  <B><D>{descc}</D>
                  <F>{desc}</F>
                  <E><FaGithub style={github_}/> 
                  <BiLinkExternal style={github_}/>
                  </E>
                  </B>
               </Id> </Idflex>)

        
  }  

const WebApp= () => {

  return (
    <WebAppCon>
          <WrapperGrid>
                    
                    { 
                    Apps.map((q) => {
                      return(  <Ddisplay key={q.id} {...q} />) })
                    }
          
          </WrapperGrid>

  </WebAppCon>
)
}

export default WebApp;

const WebAppCon = styled.div`
  display: flex ;  z-index:5 ;


`
const WrapperGrid= styled.div`
display: grid ; 
align-items: flex-start ;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(1, 1fr) ;
column-gap: 15px ;
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
left:10px ;
height: 60% ;
width:50% ;
margin: 10px 0px ;
object-fit: cover ;
filter: invert(15%) sepia(55%) saturate(476%) hue-rotate(85deg) brightness(70%) contrast(150%) ;
transition: 0.5s all ease-in-out ;

:hover{
        filter:none ;
        z-index:999 ;
    }
`
const B = styled.div`
display: flex ;
flex-direction:column;
position: relative ;
right: 30px ;
width:50% ;
color: var(--text-primary) ;
grid-template-columns: repeat(1, 1fr);
gap: 10px ;
grid-template-rows: auto auto;
cursor: normal ;
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
