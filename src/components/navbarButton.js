import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import PlayerContext from '../PlayerContext';
import PlayerSearch from './playerSearch';

function NavbarButton({ icon ,path, name, setVisiblity}){
    const PContext = useContext(PlayerContext);
    const setMode = PContext.setMode; 


    const navigate = useNavigate();
    function onClick(){
        navigate(path);
        if (path === '/'){
            setMode('/forwards')
        }
        else{
            setMode(path); 
        }
        setVisiblity(false); 
    }

    return (
        <div onClick={()=>onClick()} className='h-12 w-12 flex justify-center items-center p-3 my-2 mx-auto bg-white hover:bg-green-200 text-black group transition-all duration-100'>
            {icon} 
            <span className='absolute left-20 scale-0 group-hover:scale-100 transition-all duration-300'>
                {name}
            </span>
        </div>
    )
}

export default NavbarButton; 