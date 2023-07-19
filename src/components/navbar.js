import React, { useState } from 'react';
import NavbarButton from './navbarButton';
import { BiMessageAltAdd } from 'react-icons/bi' 
import { TbHexagonLetterF } from 'react-icons/tb'
import { TbHexagonLetterD } from 'react-icons/tb'
import { TbHexagonLetterG } from 'react-icons/tb'



function Navbar({ setVisiblity }){
    return (
        <div className='fixed top-0 left-0 h-screen w-20 m-0 
        flex flex-col bg-blue-950 z-10'>
            <NavbarButton icon={<TbHexagonLetterF size={50}/>} setVisiblity={setVisiblity} path='/' name='Forwards'></NavbarButton>
            <NavbarButton icon={<TbHexagonLetterD size={50}/>} setVisiblity={setVisiblity} path='/Defenders' name='Defenders'></NavbarButton>
            <NavbarButton icon={<TbHexagonLetterG size={50}/>} setVisiblity={setVisiblity} path='/Goalies' name='Goalies'></NavbarButton>
        </div>
    )
}


export default Navbar; 