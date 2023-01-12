import React from 'react'
import {ThemeIcon } from './NavBarElements'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import styled from 'styled-components'

const DarkModeComp = ({changeBtnIcon, ChangeTheme, scrollNav}) => {

  return (
    <ThemeIcon onClick={ChangeTheme}> 
    {changeBtnIcon ? <DarkModeStyle scrollNav={scrollNav}><MdDarkMode/></DarkModeStyle>:<DarkModeStyle scrollNav={scrollNav}><MdOutlineLightMode onClick={ChangeTheme}/></DarkModeStyle>}
</ThemeIcon>
  )
}


export default DarkModeComp

const DarkModeStyle = styled.div`
  color: var(--theme-icon);
  display:flex ;
  align-items:center ;
  justify-content:center ;
  transition: all 1s ease ;
`