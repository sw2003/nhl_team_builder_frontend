import React, { useState, useContext } from 'react';
import mcdavid from '../imgs/mcdavid.png'
import ForwardContext from '../ForwardContext';

function PlayerBox({isOpen, setVisiblity, playerName, playerPosition}){
    const FContext = useContext(ForwardContext);
    const selectedData = FContext.selectedForward;
    const setSelectedData = FContext.setSelected; 

    function onClick(){
        if (selectedData.name === ''){
            setSelectedData({name: playerName, position: playerPosition});
            setVisiblity(true); 
            return; 
        }

        if (selectedData.name === playerName){
            setVisiblity(!isOpen);
            return; 
        }
        else{
            setVisiblity(true); 
            setSelectedData({name: playerName, position: playerPosition})
            return; 
        }
    }



    return (
        <div className='bg-slate-50 relative'>
            <img src={mcdavid} className=' w-2/6 mx-auto' alt="" />
            <p className='text-black'>{playerName}</p>
            <p className='text-black'>64G/99A</p>
            <p className='text-black'>7x11M</p>
            <p className='mx-auto w-1/2 text-center cursor-pointer text-black border-2 bg-red-300 border-black hover:bg-red-500 rounded	transition-all' onClick={()=>onClick()}>Change Player</p>
        </div>
    )
}

export default PlayerBox;