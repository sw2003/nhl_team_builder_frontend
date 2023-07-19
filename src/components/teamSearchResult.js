import React, { useContext } from 'react';
import TeamImage from './teamImage';
import PlayerContext from '../PlayerContext';

function TeamSearchResult({teamName, teamAbrv}){
    const playerContext = useContext(PlayerContext);
    const setTeam = playerContext.setTeam;  

    function onClick(teamname){
        setTeam(teamname); 
    }

    return (
        <div onClick={()=>onClick(teamName)} className='relative w-full bg-white border-t-2 border-black cursor-pointer flex justify-around group'>
            <h1 className='text-black text-center h-[25px] my-auto whitespace-nowrap text-sm group-hover:font-bold z-10'>{teamName}</h1>
            <TeamImage team={teamAbrv} size={25}></TeamImage>
        </div>
    )
}

export default TeamSearchResult; 