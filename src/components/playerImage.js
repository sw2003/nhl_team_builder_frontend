import React, { useState } from 'react';

function PlayerImage({playerPosition, name}){
    try {
        return <img src={playerPosition?.charAt(0) === 'G' && name ? require(`../imgs/goalieImages/${name}.jpeg`) : 
        require(`../imgs/playerImages/${name}.jpeg`)} className=' w-[220px] h-[159px] mx-auto' alt="" />    
    
    } catch (exception){
        return (<div className='w-[220px] h-[159px] mx-auto'>no image


        </div>)
    }
}

export default PlayerImage; 