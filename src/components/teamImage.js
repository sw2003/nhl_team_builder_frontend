import React, { useState } from 'react';

function TeamImage({team}){

    try{
        return <img src={require(`../imgs/teamImages/${team}.png`)} alt="" className='absolute w-[50px] h-[50px] object-contain'/>

    }catch(error){
        return <div className='absolute w-[25px] h-[25px]'></div>
    }
}

export default TeamImage; 