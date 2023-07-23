import React, { useState } from 'react';
import SidebarButton from './sidebarButton';
import { BiMessageAltAdd } from 'react-icons/bi' 
import { TbHexagonLetterF } from 'react-icons/tb'
import { TbHexagonLetterD } from 'react-icons/tb'
import { TbHexagonLetterG } from 'react-icons/tb'



function SideBar({ setVisiblity }){
    return (
        <div className='fixed top-0 left-0 h-screen w-12 m-0 
        flex flex-col bg-blue-950 z-10'>
            <SidebarButton icon={<TbHexagonLetterF size={50}/>} setVisiblity={setVisiblity} path='/' name='Forwards'></SidebarButton>
            <SidebarButton icon={<TbHexagonLetterD size={50}/>} setVisiblity={setVisiblity} path='/Defenders' name='Defenders'></SidebarButton>
            <SidebarButton icon={<TbHexagonLetterG size={50}/>} setVisiblity={setVisiblity} path='/Goalies' name='Goalies'></SidebarButton>
        </div>
    )
}


export default SideBar; 