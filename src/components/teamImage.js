import React, { useState } from 'react';

function TeamImage({team, size, elePosition}){
    try{
        return <img 
        src={require(`../imgs/teamImages/${team}.png`)} 
        alt="" 
        className={`w-8 h-8 object-contain ${elePosition} ${elePosition !== 'absolute' && `group-hover:-translate-x-3`} transition-all duration-200`}
        />

    }catch(error){
        return <div className='absolute w-[25px] h-[25px]'></div>
    }
}

export default TeamImage; 