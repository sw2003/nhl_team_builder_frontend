import React, { useState } from 'react';
import NavbarButton from './navbarButton';
import { BiMessageAltAdd } from 'react-icons/bi' 

function Navbar({ setVisiblity }){
    return (
        <div className='fixed top-0 left-0 h-screen w-16 m-0 
        flex flex-col bg-blue-950 z-10'>
            <NavbarButton icon={<BiMessageAltAdd size={50}/>} setVisiblity={setVisiblity} path='/' name='Forwards'></NavbarButton>
            <NavbarButton icon={<BiMessageAltAdd size={50}/>} setVisiblity={setVisiblity} path='/Defenders' name='Defenders'></NavbarButton>
            <NavbarButton icon={<BiMessageAltAdd size={50}/>} setVisiblity={setVisiblity} path='/Goalies' name='Goalies'></NavbarButton>
        </div>
    )
}


export default Navbar; 