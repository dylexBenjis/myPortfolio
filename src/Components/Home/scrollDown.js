import React, { useEffect, useState } from 'react'
import './scrollDown.css'

const ScrollDown = () => {

    const[a1, setA1]= useState('');
    const[a2, setA2]= useState('');
    const[a3, setA3]= useState('');

    useEffect(()=>{    
        if (window.innerWidth>=500){
        setA1('M20 20 L30 30 L40 20')
        }
        else{setA1('M20 20 L30 30 L40 20')}
        if (window.innerWidth>=500){
            setA2('M20 30 L30 40 L40 30')
        }
        else{setA2('M20 30 L30 40 L40 30')}
        if (window.innerWidth>=500){
          setA3('M20 40 L30 50 L40 40')
      }
      else{setA3('M20 40 L30 50 L40 40')}
    },[])

  return (
  //   <div class="arrow-container animated fadeInDown">
  // <div class="arrow-2">
  //   <i>
    <div>
    <svg className='arrows'>
        <path className='a1' d={a1}></path>
        <path className='a2' d={a2}></path>
        <path className='a3' d={a3}></path>
    </svg>
    </div>
//     {/* </i>
//   </div>
//    <div class="arrow-1 "></div>
// </div>  */}

  )
}

export default ScrollDown