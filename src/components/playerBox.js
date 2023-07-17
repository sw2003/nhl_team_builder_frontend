import React, { useState, useContext, lazy} from 'react';
import mcdavid from '../imgs/mcdavid.png'
import PlayerContext from '../PlayerContext';
import { AiOutlineEdit } from 'react-icons/ai'
import PlayerImage from './playerImage';

function PlayerBox(props) {
    const isOpen = props.IsOpen;
    const setVisiblity = props.setVisiblity;

    const playerName = props.playerName;

    const playerPosition = props.playerPosition;
    const goals = props?.goals;
    const assists = props?.assists;
    const plusminus = props?.plusminus;
    const gamesPlayed = props?.gamesPlayed; 
    const shots = props?.shots; 
    const positionCode = props?.positionCode; 
    const team = props?.team; 
    const timeOnIcePerGame = props?.timeOnIcePerGame; 

    const savePct = props?.savePct;
    const saves = props?.saves;
    const wins = props?.wins;
    const losses = props?.losses;
    const goalsAgainstAverage = props?.goalsAgainstAverage;


    const FContext = useContext(PlayerContext);
    const selectedData = FContext.selectedForward;
    const setSelectedData = FContext.setSelected;

    function onClick() {
        if (selectedData.name === '') {
            setSelectedData({ name: playerName, position: playerPosition });
            setVisiblity(true);
            return;
        }

        if (selectedData.name === playerName && selectedData.position === playerPosition) {
            setVisiblity(!isOpen);
            return;
        }
        else {
            setVisiblity(true);
            setSelectedData({ name: playerName, position: playerPosition });
            return;
        }
    }



    

    return (
        <div className='bg-slate-50 relative group rounded-xl'>
            <PlayerImage playerPosition={playerPosition} name={playerName}></PlayerImage>
            {/*<img src={playerPosition?.charAt(0) === 'G' && playerName ? require(`../imgs/goalieImages/${playerName}.jpeg`) : require(`../imgs/playerImages/${playerName}.jpeg`)} className=' w-[220px] h-[159px] mx-auto' alt="" />*/}
            <p className='text-black group-hover:scale-125 group-hover:font-bold transition-all text-center'>{playerName}</p>

            <AiOutlineEdit size={30} onClick={() => onClick()} className='text-black absolute top-0 right-0 mr-2 mt-2 cursor-pointer group-hover:opacity-100 opacity-0 transition-all duration-200'></AiOutlineEdit>
            <div className=' w-[95%]  border-2 rounded-2xl overflow-hidden mx-auto text-center'>
                <div className=' w-full bg-cyan-700'>2022-2023 SEASON STATS</div>
                <div className={`grid ${typeof(goals) === "number" ? 'grid-cols-4' : 'grid-cols-6'} gap-x-0.5 text-black`}>
                    <div className='flex flex-col'>
                        <div className='font-light text-sm'>{typeof(goals) === "number" ? 'G' : 'SV%'}</div>
                        <div className='font-bold text-lg'>{typeof(goals) === "number" ? goals : parseFloat(savePct?.toFixed(3))}</div>
                    </div>
                    <div className='flex flex-col border-l-2'>
                        <div className='font-light text-sm'>{typeof(goals) === "number" ? 'A' : 'GAA'}</div>
                        <div className='font-bold text-lg'>{typeof(goals) === "number"? assists : parseFloat(goalsAgainstAverage?.toFixed(2))}</div>
                    </div>
                    <div className='flex flex-col border-l-2'>
                        <div className='font-light text-sm'>{typeof(goals) === "number" ? 'PTS' : 'W'}</div>
                        <div className='font-bold text-lg'>{typeof(goals) === "number" ? Number(goals) + Number(assists) : wins}</div>
                    </div>
                    <div className='flex flex-col border-l-2'>
                        <div className='font-light text-sm'>{typeof(goals) === "number" ? '+/-' : 'L'}</div>
                        <div className='font-bold text-lg'>{typeof(goals) === "number" ? plusminus : losses}</div>
                    </div>
                    
                    {   
                    
                        typeof(goals) !== "number" && (<>
                            <div className='flex flex-col'>
                                <div className='font-light'>L</div>
                                <div className='font-bold'>{losses}</div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='font-light'>SV</div>
                                <div className='font-bold'>{saves}</div>
                            </div>
                        </>)
                    
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default PlayerBox;