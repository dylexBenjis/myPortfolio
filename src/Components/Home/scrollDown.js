import React, { useEffect, useState } from 'react'
import './scrollDown.css'

const ScrollDown = () => {

    const[a1, setA1]= useState('');
    const[a2, setA2]= useState();

    useEffect(()=>{    
        if (window.innerWidth>=500){
        setA1('M15 20 L30 40 L45 20')
        }
        else{setA1('M20 30 L30 45 L40 30')}
        if (window.innerWidth>=500){
            setA2('M10 30 L30 55 L50 30')
        }
        else{setA2('M15 40 L30 60 L45 40')}
    },[])

  return (
    <div>
    <svg class='arrows'>
        <path class='a1' d={a1}></path>
        <path class='a2' d={a2}></path>
    </svg>
    </div>
  )
}

export default ScrollDown