import React, { useState } from 'react';
import placeholder from '../imgs/placeholder.png'

function PlayerImage({playerPosition, name}){
    try {
        return <img src={playerPosition?.charAt(0) === 'G' && name ? require(`../imgs/goalieImages/${name}.jpeg`) : 
        require(`../imgs/playerImages/${name}.jpeg`)} className=' object-cover mx-auto  overscroll-none md:h-[126px] md:w-[92px]' alt="" />    
    
    } catch (exception){
        return <img src={placeholder} alt=""  className=' object-cover mx-auto overscroll-none md:h-[126px] md:w-[92px]'/>
    }
}

export default PlayerImage; 