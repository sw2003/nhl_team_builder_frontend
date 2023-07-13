import React, { useState, useContext } from 'react';
import { MdAddCircle } from 'react-icons/md'
import PlayerContext from '../PlayerContext';

function SearchResult({name, team, goals, assists, plusminus}) {
    const FContext = useContext(PlayerContext);
    const selectedFData = FContext.selectedForward; 
    const selectedFName = selectedFData.name; 
    const selectedFPosition = selectedFData.position; 

    const ForwardData = FContext.forwardData; 
    const setForwardData = FContext.setForwardData; 

    const DefenderData = FContext.defenderData;
    const setDefenderData = FContext.setDefenderData; 

    function onClick(){
        const updatedForwardData = ForwardData.map((plr)=>{
            if (plr.position === selectedFPosition){
                return {position: plr.position, name: name, goals: goals, assists: assists, plusminus: plusminus}
            }
            else{ 
                return plr; 
            }
        })       

        const updatedDefenderData = DefenderData.map((plr)=>{
            if (plr.position === selectedFPosition){
                return {position: plr.position, name: name, goals: goals, assists: assists, plusminus: plusminus}
            }
            else{ 
                return plr; 
            }
        })

        setForwardData(updatedForwardData);
        setDefenderData(updatedDefenderData);
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