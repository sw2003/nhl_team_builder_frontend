import React, { useState, useContext } from 'react';
import { MdAddCircle } from 'react-icons/md'
import PlayerContext from '../PlayerContext';

function SearchResult(props) {
    /*
        Shared fields
    */
    const name = props?.name;
    const team = props?.team;
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

    function onClick(){
        const updatedForwardData = ForwardData.map((plr)=>{
            if (plr.position === selectedFPosition){
                return {
                    position: plr.position,
                    name: name, 
                    goals: goals, 
                    assists: assists, 
                    plusminus: plusminus,
                    shots: shots, 
                    positionCode: positionCode, 
                    timeOnIcePerGame: timeOnIcePerGame, 
                    gamesPlayed: gamesPlayed
                }
            }
            else{ 
                return plr; 
            }
        })       

        const updatedDefenderData = DefenderData.map((plr)=>{
            if (plr.position === selectedFPosition){
                return {
                    position: plr.position,
                    name: name, 
                    goals: goals, 
                    assists: assists, 
                    plusminus: plusminus,
                    shots: shots, 
                    positionCode: positionCode, 
                    timeOnIcePerGame: timeOnIcePerGame,
                    gamesPlayed: gamesPlayed
                }
            }
            else{ 
                return plr; 
            }
        })

        const updatedGoalieData = GoalieData.map((plr)=>{
            if (plr.position === selectedFPosition){
                return {position: plr.position, name: name, savePct: savePct, goalsAgainstAverage: goalsAgainstAverage, saves: saves, wins:wins, losses:losses}
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
        <div onClick={()=>onClick()} className=" relative text-white my-2 p-1 border mx-12 group cursor-pointer overflow-auto grow">
            <span>{name}</span>
            <span> {team}</span>
            <MdAddCircle className='inline-block absolute right-0 mr-2 scale-0 group-hover:scale-100 transition-all duration-300' size={20}></MdAddCircle>
        </div>
    )
}

export default SearchResult; 