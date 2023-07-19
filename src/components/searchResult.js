import React, { useState, useContext } from 'react';
import { MdAddCircle } from 'react-icons/md'
import PlayerContext from '../PlayerContext';

function SearchResult(props) {

    /*
        Shared fields
    */
    const name = props?.name;
    const team = props?.team.split(',')[0];

    const gamesPlayed = props?.gamesPlayed; 


    /*
        Skater Fields
    */

    const goals = props?.goals;
    const assists = props?.assists;
    const plusminus = props?.plusminus;  
    const shots = props?.shots; 
    const positionCode = props?.positionCode; 
    const timeOnIcePerGame = props?.timeOnIcePerGame; 
    const caphit = props?.caphit; 
    
    /*
        Goalie Fields
    */

    const savePct = props?.savePct;
    const saves = props?.saves; 
    const goalsAgainstAverage = props?.goalsAgainstAverage; 
    const wins = props?.wins; 
    const losses = props?.losses; 

    const FContext = useContext(PlayerContext);
    const selectedFData = FContext.selectedForward; 
    const selectedFName = selectedFData.name; 
    const selectedFPosition = selectedFData.position; 

    const ForwardData = FContext.forwardData; 
    const setForwardData = FContext.setForwardData; 

    const DefenderData = FContext.defenderData;
    const setDefenderData = FContext.setDefenderData; 

    const GoalieData = FContext.goalieData; 
    const setGoalieData = FContext.setGoalieData;
    
    const mode = FContext.mode; 

    function onClick(){
        const updatedForwardData = ForwardData.map((plr)=>{
            if (plr?.linePosition === selectedFPosition){
                return {
                    linePosition: plr?.linePosition,
                    fullname: name, 
                    team: team, 
                    goals: goals, 
                    assists: assists, 
                    plusMinus: plusminus,
                    shots: shots, 
                    positionCode: positionCode, 
                    timeOnIcePerGame: timeOnIcePerGame, 
                    gamesPlayed: gamesPlayed,
                    caphit: caphit
                }
            }
            else{ 
                return plr; 
            }
        })       

        const updatedDefenderData = DefenderData.map((plr)=>{
            if (plr?.linePosition === selectedFPosition){
                return {
                    linePosition: plr?.linePosition,
                    fullname: name, 
                    team: team, 
                    goals: goals, 
                    assists: assists, 
                    plusMinus: plusminus,
                    shots: shots, 
                    positionCode: positionCode, 
                    timeOnIcePerGame: timeOnIcePerGame, 
                    gamesPlayed: gamesPlayed,
                    caphit: caphit
                }
            }
            else{ 
                return plr; 
            }
        })

        const updatedGoalieData = GoalieData.map((plr)=>{
            if (plr?.linePosition === selectedFPosition){
                return {
                    linePosition: plr.linePosition, 
                    fullname: name, 
                    savePct: savePct, 
                    goalsAgainstAverage: goalsAgainstAverage, 
                    saves: saves, 
                    wins:wins, 
                    losses:losses, 
                    team: team
                }
            }
            else{ 
                return plr; 
            }
        })


        setForwardData(updatedForwardData);
        setDefenderData(updatedDefenderData);
        setGoalieData(updatedGoalieData); 
    }

    return (
        <div onClick={()=>onClick()} className=" relative text-black my-2 p-1 border mx-8 group cursor-pointer overflow-auto grow rounded-lg bg-white">
            <div className=' w-full h-full flex justify-between items-center'>
                <div className='inline-block w-2/5'>
                    <span className='inline-block mr-1 group-hover:font-bold transition-all'>{name} {positionCode === 'R' || positionCode === 'L' ? `${positionCode}W`: positionCode}</span>
                    <span className='inline-block'>{team}</span>
                    <img src={require(`../imgs/teamImages/${team}.png`)} className='w-8 h-8 inline-block object-contain	'  alt="" />
                </div>
                <span>

                {mode==='/forwards' || mode ==='/Defenders'? `${goals}G | `: `${parseFloat(savePct?.toFixed(3))}SV% `} 
                {mode==='/forwards' || mode==='/Defenders' ? `${assists}A | `: `${wins}W `} 
                {mode==='/forwards' || mode==='/Defenders' ? `${timeOnIcePerGame?.toFixed(2)} TOI | `: `${losses}L `} 

                </span>
                <MdAddCircle className='inline-block mr-2 transition-all duration-30 group-hover:scale-100 scale-0' size={20}></MdAddCircle>
            </div>
        </div>
    )
}

export default SearchResult; 


/*
            <span>{name}</span>
            <span> {team}</span>
            <img src={require(`../imgs/teamImages/${team}.png`)} className='w-8 h-8 inline-block object-contain	'  alt="" />
            <MdAddCircle className='inline-block absolute right-0 mr-2 scale-0 group-hover:scale-100 transition-all duration-300' size={20}></MdAddCircle>

*/