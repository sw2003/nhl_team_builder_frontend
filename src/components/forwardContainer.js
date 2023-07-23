import React, { useState, useContext } from 'react';
import PlayerBox from "./playerBox";
import PlayerContext from '../PlayerContext';
import auston from '../imgs/auston.png'
import { Link } from "react-router-dom";



function ForwardContainer({ isOpen, setVisiblity }) {
    const data = useContext(PlayerContext).forwardData;

    return (
        <div className=''>
            <div className='w-full h-20 z-0'>
                <img src={auston} alt="" className='absolute w-full opacity-50 md:hidden'/>
            </div>
            <h1 className='text-white mx-auto bg-slate-600 w-1/2 rounded text-center mb-4 hidden md:block'>Forwards</h1>

            <div className=' w-[95vw] md:w-[65vw] md:gap-5 mx-auto grid grid-cols-3 grid-row-3 text-center mt-2 text-white gap-1 z-20'>
                <span className='flex justify-center mb-2 z-20'>
                    <p className='w-1/2 bg-slate-600 border rounded'>LW</p>
                </span>
                <span className='flex justify-center mb-2 z-20'>
                    <p className='w-1/2 bg-slate-600 border rounded'>C</p>
                </span>
                <span className='flex justify-center mb-2 z-20'>
                    <p className='w-1/2 bg-slate-600 border rounded'>RW</p>
                </span>
                {
                    data.map((plr) => {
                        return <PlayerBox
                            key={plr.linePosition || plr.position}
                            isOpen={isOpen}
                            setVisiblity={setVisiblity}
                            playerName={plr.fullname}
                            playerPosition={plr.positionCode}
                            goals={plr.goals}
                            assists={plr.assists}
                            plusminus={plr.plusMinus}
                            shots={plr.shots}
                            positionCode={plr.positionCode}
                            team={plr.team}
                            timeOnIcePerGame={plr.timeOnIcePerGame}
                            caphit={plr.caphit}
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

export default ForwardContainer;

