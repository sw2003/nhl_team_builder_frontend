import React, { useState, useEffect, useContext } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import PlayerContext from '../PlayerContext'
import { useNavigate } from "react-router-dom";
import TeamButton from './teamButton';


function HamburgerNav({setVisiblity}) {
    const navigate = useNavigate();

    const [ hamburgerBool, setHamBool] = useState(false)
    const [ hamburgerOpen, setHamburger] = useState(false); 
    const [ hamburgerDebounce, setHamDebounce] = useState(false);

    const PContext = useContext(PlayerContext);
    const setMode = PContext.setMode; 

  
    useEffect(()=>{
      if (hamburgerBool){
        setHamDebounce(true);
        const timer = setTimeout(()=>{
          setHamburger(true); 
        }, 300)
        return ()=>clearTimeout(timer); 
      }
      else{
        setHamburger(false) 
        const timer = setTimeout(()=>{
          setHamDebounce(false);
        }, 300) 
        return ()=>clearTimeout(timer); 
      }
    }, [hamburgerBool])

    function onClickRoute(path){
        if (path === '/forwards'){
            navigate('/');
        }
        else{
            navigate(path);
        }
        setMode(path); 
        setVisiblity(false)
    }


    return (
        <>
            <div className='fixed w-full h-8 bg-blue-950 z-50 md:h-10'>
                <div className='absolute right-0 h-full w-10 flex justify-center items-center z-10'>
                    <RxHamburgerMenu className='text-white' size={30} onClick={() => setHamBool(!hamburgerBool)}></RxHamburgerMenu>
                </div>
                <span className='text-white ml-2 font-Roboto font-normal italic'>NHL TEAMEDITS23</span>

            </div>
            <div className={`fixed w-full h-screen bg-blue-950 z-40 ${!hamburgerDebounce ? 'hidden' : 'block'} ${hamburgerOpen ? 'scale-y-100' : 'scale-y-0'} transition-all origin-top duration-300 touch-none	`}>
                <div className='h-1/3 w-full'></div>
                <div className='w-full flex flex-col text-white ml-2'>
                    <div onClick={()=>{onClickRoute('/forwards')}} className={`group select-none transition-all duration-1000 mb-2 ${hamburgerOpen ? 'translate-x-5' : 'translate-x-0'} cursor-pointer hover:-translate-x-1`}>
                        Forwards 
                        <AiOutlineArrowLeft className='inline-block group-hover:opacity-100 opacity-0 ml-2' size={25}></AiOutlineArrowLeft>
                    </div>
                    <div onClick={()=>{onClickRoute('/Defenders')}} className={`group select-none transition-all duration-1000 mb-2 ${hamburgerOpen ? 'translate-x-5' : 'translate-x-0'} cursor-pointer hover:-translate-x-1`}>
                        Defenders 
                        <AiOutlineArrowLeft className='inline-block group-hover:opacity-100 opacity-0 ml-2' size={25}></AiOutlineArrowLeft>
                    </div>
                    <div onClick={()=>{onClickRoute('/Goalies')}} className={`group select-none transition-all duration-1000 mb-2 ${hamburgerOpen ? 'translate-x-5' : 'translate-x-0'} cursor-pointer hover:-translate-x-1`}>
                        Goalies 
                        <AiOutlineArrowLeft className='inline-block group-hover:opacity-100 opacity-0 ml-2' size={25}></AiOutlineArrowLeft>
                    </div>
                </div>
                <TeamButton></TeamButton>
            </div>
        </>
    )
}

export default HamburgerNav; 