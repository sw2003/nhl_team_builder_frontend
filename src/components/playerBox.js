import React, { useState, useContext } from 'react';
import mcdavid from '../imgs/mcdavid.png'
import PlayerContext from '../PlayerContext';
import { AiOutlineEdit } from 'react-icons/ai'

function PlayerBox({isOpen, setVisiblity, playerName, playerPosition, goals, assists, plusminus}){
    const FContext = useContext(PlayerContext);
    const selectedData = FContext.selectedForward;
    const setSelectedData = FContext.setSelected; 

    function onClick(){
        if (selectedData.name === ''){
            console.log(1); 
            setSelectedData({name: playerName, position: playerPosition});
            setVisiblity(true); 
            return; 
        }

        if (selectedData.name === playerName && selectedData.position === playerPosition){
            console.log(2); 
            setVisiblity(!isOpen);
            return; 
        }
        else{
            console.log(3); 
            setVisiblity(true); 
            setSelectedData({name: playerName, position: playerPosition})
            return; 
        }
    }

    return (
        <div className='bg-slate-50 relative group rounded-xl'>
            <img src={require(`../imgs/playerImages/${playerName}.jpeg`)} className=' w-[220px] h-[159px] mx-auto' alt="" />
            <p className='text-black group-hover:scale-125 group-hover:font-bold transition-all'>{playerName}</p>
          
            <AiOutlineEdit size={30} onClick={()=>onClick()} className='text-black absolute top-0 right-0 mr-2 mt-2 cursor-pointer group-hover:opacity-100 opacity-0 transition-all duration-200'></AiOutlineEdit>
            <div className=' w-[95%]  border-2 rounded-2xl overflow-hidden mx-auto'>
                <div className=' w-full bg-cyan-700'>2022-2023 SEASON STATS</div>
                <div className='grid grid-cols-3 gap-x-0.5 text-black'>
                    <div className='flex flex-col'>
                        <div className='font-light'>G</div>
                        <div className='font-bold'>{goals}</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-light'>A</div>
                        <div className='font-bold'>{assists}</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-light'>PTS</div>
                        <div className='font-bold'>{Number(goals) + Number(assists)}</div>
                    </div>
               


                </div>
            </div>
        </div>
    )
}

export default PlayerBox;