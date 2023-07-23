import React, { useState, useContext, lazy} from 'react';
import mcdavid from '../imgs/mcdavid.png'
import PlayerContext from '../PlayerContext';
import { AiOutlineEdit } from 'react-icons/ai'
import PlayerImage from './playerImage';
import TeamImage from './teamImage';

function PlayerBox(props) {
    const isOpen = props.isOpen;
    const setVisiblity = props.setVisiblity;

    const playerName = props.playerName;

    const playerPosition = props.playerPosition;
    const goals = props?.goals;
    const assists = props?.assists;
    const plusminus = props?.plusminus;
    const gamesPlayed = props?.gamesPlayed; 
    const shots = props?.shots; 
    const positionCode = props?.positionCode; 
    const linePosition = props?.linePosition;
    let team = props?.team.split(',')[0]; 
    if (props?.team.split(',').length > 1){
        team = props?.team.split(',')[1]; 
    }

    const timeOnIcePerGame = props?.timeOnIcePerGame; 
    const caphit = props?.caphit

    let savePct = props?.savePct;
    const saves = props?.saves;
    const wins = props?.wins;
    const losses = props?.losses;
    let goalsAgainstAverage = props?.goalsAgainstAverage;

    try {
        savePct = parseFloat(savePct?.toFixed(3));
        goalsAgainstAverage = parseFloat(goalsAgainstAverage?.toFixed(2)); 
    } catch (error) {
        savePct = 'N/A'; 
        goalsAgainstAverage = 'N/A'; 
    }


    const FContext = useContext(PlayerContext);
    const selectedData = FContext.selectedForward;
    const setSelectedData = FContext.setSelected;

    function onClick() {
        if (selectedData.name === '') {
            console.log(1) 
            console.log(linePosition); 
            setSelectedData({ name: playerName, position: linePosition });
            setVisiblity(true);
            return;
        }

        if (selectedData.name === playerName && selectedData.position === linePosition) {
            console.log(2) 
            setVisiblity(!isOpen);
            return;
        }
        else {
            console.log(3) 
            setVisiblity(true);
            setSelectedData({ name: playerName, position: linePosition });
            return;
        }
    }


    return (
        <div className='bg-white relative group rounded-xl border touch-pan-y '>
            <TeamImage team={team} size={10} elePosition={'absolute'}></TeamImage>
            <div className='absolute left-[50px] h-[50px] text-black flex justify-center items-center font-bold text-xl hidden md:block'>{positionCode}</div>
            <div className='absolute top-0 right-0 text-black mt-2 mr-2 font-bold text-sm xl:text-base group-hover:hidden hidden md:block'>{caphit}</div>
            <PlayerImage playerPosition={playerPosition} name={playerName}></PlayerImage>
            <p className='text-black group-hover:scale-125 group-hover:font-bold transition-all text-center text-xs whitespace-nowrap'>{playerName}</p>

            <AiOutlineEdit size={30} onClick={() => onClick()} className='text-black absolute top-0 right-0 mr-2 mt-2 cursor-pointer group-hover:opacity-100 opacity-0 transition-all duration-200'></AiOutlineEdit>

            <div className='w-[95%] border-2 rounded-2xl overflow-hidden mx-auto text-center mb-2'>
                <div className=' w-full bg-cyan-700 text-[8px] whitespace-nowrap'>SEASON STATS</div>
                <div className={`grid ${typeof(goals) === "number" ? 'grid-cols-4' : 'grid-cols-6'} gap-x-0.5 text-black`}>
                    <div className='flex flex-col'>
                        <div className='font-light text-xs'>{typeof(goals) === "number" ? 'G' : 'SV%'}</div>
                        <div className='font-light text-xs'>
                            {typeof(goals) === "number" ? goals : savePct}
                        </div>
                    </div>
                    <div className='flex flex-col border-l-2'>
                        <div className='font-light text-xs'>{typeof(goals) === "number" ? 'A' : 'GAA'}</div>
                        <div className='font-light text-xs'>{typeof(goals) === "number"? assists : goalsAgainstAverage}</div>
                    </div>
                    <div className='flex flex-col border-l-2'>
                        <div className='font-light text-xs'>{typeof(goals) === "number" ? 'PTS' : 'W'}</div>
                        <div className='font-light text-xs'>{typeof(goals) === "number" ? Number(goals) + Number(assists) : wins}</div>
                    </div>
                    <div className='flex flex-col border-l-2'>
                        <div className='font-light text-xs'>{typeof(goals) === "number" ? '+/-' : 'L'}</div>
                        <div className='font-light text-xs'>{typeof(goals) === "number" ? plusminus : losses}</div>
                    </div>
                    {   
                        typeof(goals) !== "number" && (<>
                            <div className='flex flex-col'>
                                <div className='font-light text-xs'>L</div>
                                <div className='font-light text-xs'>{losses}</div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='font-light text-xs'>SV</div>
                                <div className='font-light text-xs'>{saves}</div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    )
}

export default PlayerBox;