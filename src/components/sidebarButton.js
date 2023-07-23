import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import PlayerContext from '../PlayerContext';

function SidebarButton({ icon ,path, name, setVisiblity}){
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
        <div onClick={()=>onClick()} className='h-10 w-10 flex justify-center items-center p-3 my-2 mx-auto bg-black text-white hover:bg-green-200 group transition-all duration-300 rounded hover:rounded-3xl hover:text-black'>
            {icon}
            <span className='absolute left-16 scale-0 group-hover:scale-100 transition-all duration-300 pl-4 pr-4 pt-2 pb-2 bg-blue-950 border rounded border-white text-white z-40'>
                {name}
            </span>
        </div>
    )
}

export default SidebarButton; 