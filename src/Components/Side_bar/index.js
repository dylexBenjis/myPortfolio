import React from 'react'
import { Container } from '../../GlobalLayout/index'
import DarkModeComp from '../../Components/NavBar/DarkModeComp'
import { 
    SidebarCointainer,
    Icon,
    CloseIcon, 
    SidebarMenu,
    SidebarLink,
    SidebarWrapper,
    SidebarLinks,} from './Side_bar_elements'


const Side_bar = ({IsOpen, scrollNav, toggle, ChangeTheme, changeBtnIcon}) => {
    return (
        <SidebarCointainer IsOpen={IsOpen} scrollNav={scrollNav}>
            <Container>

                <SidebarWrapper>
                    <SidebarMenu>
                            <SidebarLink to='/' onClick={toggle}>Home</SidebarLink>
        

                            <SidebarLink to='project' onClick={toggle}>Projects</SidebarLink>

                            <SidebarLink to='blog' onClick={toggle}>Blog</SidebarLink>
        

                            <SidebarLinks  onClick={()=>{ChangeTheme();toggle();}} > Change Theme &nbsp; <DarkModeComp  changeBtnIcon={changeBtnIcon} ChangeTheme={ChangeTheme} /></SidebarLinks>

        
                    </SidebarMenu>
                </SidebarWrapper>
            </Container>
        </SidebarCointainer>
    )
}

export default Side_bar
