import React, { useEffect, useState } from 'react'
import './scrollDown.css'
import styled from 'styled-components';

const ScrollDown = () => {

    const[a1, setA1]= useState('');
    const[a2, setA2]= useState('');
    const[a3, setA3]= useState('');

    //for svg path 
    useEffect(()=>{    
        setA1('M2.5 15 L7.5 20 L12.5 15')
        setA2('M2.5 20 L7.5 25 L12.5 20')
        setA3('M2.5 25 L7.5 30 L12.5 25')
    },[])

  return (
  //   <div class="arrow-container animated fadeInDown">
  // <div class="arrow-2">
  //   <i> 
        <svg className='arrows'>
            <path className='a1' d={a1}></path>
            <circle cx="7.5" cy="5" r="2" stroke="gray" stroke-width="3" fill="gray" />
            <path className='a2' d={a2}></path>
            <path className='a3' d={a3}></path>

        </svg>
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


