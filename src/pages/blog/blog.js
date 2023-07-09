import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'
import { blogData } from './blogData'


//this is component for blog. Clickable links to published articles.

const Blog = () => {
  return (
    <BlogCon>
        <Container>
            { blogData.map((q)=>{
                   return (
                //    <BlogBox key={q}>
                //    <Head style={{fontWeight:'normal'}}>{q}</Head>
                //     <ul style={{listStyleType:'square', marginTop:'5px', marginLeft:'20px', zIndex:'2'}}>
                //     {(q).map((q)=>{ 
                //         return (       
                             <Li key={q.link}>  <Link to={q.link} style={{textDecoration:'none', color:'var(--blogLink)', cursor:'pointer'}}>{q.link}</Link></Li>
                    //     )
                    // })} 
                    // </ul>                   
                       // </BlogBox>
                   )
                })
            }
        </Container>
    </BlogCon>
  )
}

export default Blog

const BlogCon = styled.div`
    margin-top:120px ;
    z-index:2 ;
    @media screen and (max-width: 600px){
        margin-top:90px ;
    } 

`
const BlogBox = styled.div`
    display:flex ;
    flex-direction:column ;
    color:var(--text-primary);
    margin-bottom:40px ;
`
const Head = styled.h2`
    @media screen and (min-width: 600px){
        font-size: 30px ;        
    }

`
const Li = styled.li`
    margin-top:10px ;
`