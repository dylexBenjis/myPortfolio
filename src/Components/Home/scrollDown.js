import React, { useEffect, useState } from 'react'
import './scrollDown.css'
import styled from 'styled-components';

const ScrollDown = () => {

    const[a1, setA1]= useState('');
    const[a2, setA2]= useState('');
    const[a3, setA3]= useState('');

    //for svg path 
    useEffect(()=>{    
        setA1('M17.5 35 L22.5 40 L27.5 35')
        setA2('M17.5 40 L22.5 45 L27.5 40')
        setA3('M17.5 45 L22.5 50 L27.5 45')
    },[])

  return (
  //   <div class="arrow-container animated fadeInDown">
  // <div class="arrow-2">
  //   <i>
    <div>
      <Mouse>   
        <svg className='arrows'>
            <path className='a1' d={a1}></path>
            <circle cx="22.5" cy="20" r="2" stroke="gray" stroke-width="3" fill="gray" />
            <path className='a2' d={a2}></path>
            <path className='a3' d={a3}></path>

        </svg>
      </Mouse>    
    </div>
    // <div>
    //   <Mouse>

    //   </Mouse>
    // </div>
//     {/* </i>
//   </div>
//    <div class="arrow-1 "></div>
// </div>  */}

  )
}

export default ScrollDown


const Mouse = styled.div`
  display: flex;
  height: 65px;
  width: 49px;
  position:absolute;
  color:red;
  border: 2px solid var(--jobHighlited);
  border-radius: 40%;
`