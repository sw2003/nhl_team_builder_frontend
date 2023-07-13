import React, { useState, useContext } from 'react';
import PlayerBox from "./playerBox";
import PlayerContext from '../PlayerContext';


function ForwardContainer({isOpen, setVisiblity}) {
    const data = useContext(PlayerContext).forwardData; 

    return (
        <div className='w-5/6 mx-auto grid grid-cols-3 grid-row-3 text-center mt-2 text-white gap-4'>
            <span className='flex justify-center mb-2'>
                <p className='w-1/2 bg-slate-600 border rounded'>LW</p>
            </span>
            <span className='flex justify-center mb-2'>
                <p className='w-1/2 bg-slate-600 border rounded'>C</p>
            </span>
            <span className='flex justify-center mb-2'>
                <p className='w-1/2 bg-slate-600 border rounded'>RW</p>
            </span>
            {
                data.map((plr) => {
                    return <PlayerBox key={plr.position} isOpen={isOpen} setVisiblity={setVisiblity} playerName={plr.name} playerPosition={plr.position} goals={plr.goals} assists={plr.assists} plusminus={plr.plusminus}></PlayerBox>
                })
            }
        </div>
    )
}

export default ForwardContainer;

