import React, { useState } from 'react';
import mcdavid from '../imgs/mcdavid.png'

function PlayerBox({isOpen, setVisiblity}){
    return (
        <div className='bg-slate-50 relative'>
            <img src={mcdavid} className=' w-2/6 mx-auto' alt="" />
            <p>Connor Mcdavid</p>
            <p className='mx-auto w-1/2 text-center cursor-pointer text-black' onClick={()=>setVisiblity(!isOpen)}>Change Player</p>
        </div>
    )
}

export default PlayerBox;