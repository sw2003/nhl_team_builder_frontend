import React, { useState, useContext } from 'react';
import PlayerBox from "./playerBox";
import ForwardContext from '../ForwardContext';


function PlayerContainer({isOpen, setVisiblity}) {
    const data = useContext(ForwardContext).forwardData; 

    return (
        <div className='w-5/6 mx-auto grid grid-cols-3 grid-row-3 text-center mt-2 text-white gap-4'>
            <span className='flex justify-center mb-2'>
                <p className='w-1/2 bg-slate-600'>LW</p>
            </span>
            <span className='flex justify-center mb-2'>
                <p className='w-1/2 bg-slate-600'>C</p>
            </span>
            <span className='flex justify-center mb-2'>
                <p className='w-1/2 bg-slate-600'>RW</p>
            </span>
            {
                data.map((plr) => {
                    return <PlayerBox key={plr.position} isOpen={isOpen} setVisiblity={setVisiblity} playerName={plr.name} playerPosition={plr.position}></PlayerBox>
                })
            }
          
        </div>
    )
}

export default PlayerContainer;

/*
  {
                data.map((plr) => {
                    return <PlayerBox key={plr.position} isOpen={isOpen} setVisiblity={setVisiblity}></PlayerBox>
                })
            }

*/