import React, { useState, useContext } from 'react';
import PlayerBox from './playerBox';
import PlayerContext from '../PlayerContext'

function DefenderContainer({isOpen, setVisiblity}) {
    const data = useContext(PlayerContext).defenderData

    return (
        <div className='w-4/6 mx-auto grid grid-cols-2 grid-row-4 text-center mt-2 text-white gap-4'>
            <span className='flex justify-center mb-2'>
                <p className='w-1/2 bg-slate-600 border rounded'>LD</p>
            </span>
            <span className='flex justify-center mb-2'>
                <p className='w-1/2 bg-slate-600 border rounded'>RD</p>
            </span>
            {
                data.map((plr) => {
                    return <PlayerBox key={plr.position} isOpen={isOpen} setVisiblity={setVisiblity} playerName={plr.name} playerPosition={plr.position} goals={plr.goals} assists={plr.assists} plusminus={plr.plusminus}></PlayerBox>
                })
            }
        </div>
    )
}

export default DefenderContainer; 