import React, { useState } from 'react';
import NavbarButton from './navbarButton';
import { BiMessageAltAdd } from 'react-icons/bi' 

function Navbar(){
    return (
        <div className='fixed top-0 left-0 h-screen w-16 m-0 
        flex flex-col bg-blue-950'>
            <NavbarButton icon={<BiMessageAltAdd size={50}/>}></NavbarButton>
            <NavbarButton icon={<BiMessageAltAdd size={50}/>}></NavbarButton>
            <NavbarButton icon={<BiMessageAltAdd size={50}/>}></NavbarButton>
        </div>
    )
}


export default Navbar; 