import React, { useState, useContext } from 'react';
import PlayerBox from './playerBox';
import PlayerContext from '../PlayerContext';

function GoalieContainer({ isOpen, setVisiblity }) {
    const data = useContext(PlayerContext).goalieData;

    return (
        <div className='w-5/6 mx-auto grid grid-cols-3 grid-row-1 text-center text-white'>
            {
                data.map((plr) => {
                    return <PlayerBox 
                        key={plr.position}
                        isOpen={isOpen} 
                        setVisiblity={setVisiblity} 
                        playerName={plr.name} 
                        playerPosition={plr.position} 
                        savePct={plr.savePct} 
                        saves={plr.saves} 
                        wins={plr.wins} 
                        losses={plr.losses} 
                        goalsAgainstAverage={plr.goalsAgainstAverage}>
                    </PlayerBox>
                })
            }
        </div>
    )
}

export default GoalieContainer; 