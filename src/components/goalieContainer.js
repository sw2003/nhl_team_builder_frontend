import React, { useState, useContext } from 'react';
import PlayerBox from './playerBox';
import PlayerContext from '../PlayerContext';
import ullmark from '../imgs/ullmark.png'
import { Link } from "react-router-dom";



function GoalieContainer({ isOpen, setVisiblity }) {
    const data = useContext(PlayerContext).goalieData;

    return (
        <div>
            <div className='w-full h-20 z-0'>
                <img src={ullmark} alt="" className='absolute w-full opacity-50 md:hidden'/>
            </div>
            <div className='w-5/6 md:w-1/4 md:h-[80vh] md:gap-6 mx-auto flex flex-col text-center text-white'>
                {
                    data.map((plr) => {
                        return <PlayerBox 
                            key={plr.linePosition}
                            isOpen={isOpen} 
                            setVisiblity={setVisiblity} 
                            playerName={plr.fullname} 
                            playerPosition={'G'} 
                            savePct={plr.savePct} 
                            saves={plr.saves} 
                            wins={plr.wins} 
                            losses={plr.losses} 
                            goalsAgainstAverage={plr.goalsAgainstAverage}
                            team={plr.team}
                            linePosition={plr.linePosition}
                            >
                        </PlayerBox>
                    })
                }
            </div>
            <div className='w-full h-28 bg-blue-950'>
                <div className='w-full h-1/4'></div>
                <div className='flex justify-around text-white '>
                    <div className='hover:scale-125 transition-all select-none'><Link to='/'>Forwards</Link></div>
                    <div className='hover:scale-125 transition-all select-none'><Link to='/Defenders'>Defenders</Link></div>
                    <div className='hover:scale-125 transition-all select-none'><Link to='/Goalies'>Goalies</Link></div>
                </div>
            </div>
        </div>
    )
}

export default GoalieContainer; 