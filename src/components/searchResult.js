import React, { useState, useContext } from 'react';
import { MdAddCircle } from 'react-icons/md'
import ForwardContext from '../ForwardContext';

function SearchResult({name, team}) {
    const FContext = useContext(ForwardContext);
    const selectedFData = FContext.selectedForward; 
    const selectedFName = selectedFData.name; 
    const selectedFPosition = selectedFData.position; 

    const ForwardData = FContext.forwardData; 
    const setForwardData = FContext.setForwardData; 

    function onClick(){
        const updatedForwardData = ForwardData.map((plr)=>{
            if (plr.position === selectedFPosition){
                return {position: plr.position, name: name}
            }
            else{ 
                return plr; 
            }
        })       
        setForwardData(updatedForwardData);
    }

    return (
        <div onClick={()=>onClick()} className=" relative text-white my-2 p-1 border mx-12 group cursor-pointer">
            <span>{name}</span>
            <span> {team}</span>
            <MdAddCircle className='inline-block absolute right-0 mr-2 scale-0 group-hover:scale-100 transition-all duration-300' size={20}></MdAddCircle>
        </div>
    )
}


export default SearchResult; 