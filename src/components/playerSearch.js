import React, { useState, useEffect, useContext } from 'react';
import { AiOutlineCaretDown } from "react-icons/ai"
import SearchResult from './searchResult';
import { nanoid } from 'nanoid';
import PlayerContext from '../PlayerContext';

function PlayerSearch({ isOpen, setVisiblity }) {
    const [input, setInput] = useState('');
    const [debouncedInput, setDebouncedInput] = useState('');
    const [playerList, setPlayerList] = useState([]);

    const mode = useContext(PlayerContext).mode; 

    useEffect(()=>{
        setInput(''); 
        setDebouncedInput('');
        setPlayerList([]); 
    }, [mode, setInput, setDebouncedInput, setPlayerList])
    

    useEffect(() => {
        const timer = setTimeout(() => setInput(debouncedInput), 1000)
        return () => clearTimeout(timer);
    }, [debouncedInput])



    useEffect(() => {
        const options = {
            method: 'GET',
        }

        if (input !== '') {
            fetch(`http://192.18.132.24:4000/api/search?prefix=${input}&mode=${mode}`, options)
                .then((res) => res.json())
                .then((res) => {
                    setPlayerList(res);
                });
        }
    }, [input]);

    return (
        <div className={`flex justify-center items-center`}>
            <div className={`fixed w-full max-h-96 h-full max-w-2xl bottom-[-10px] z-20 bg-blue-950 transition-all duration-500 rounded-lg ${!isOpen && 'scale-y-0'} origin-bottom touch-none`}>
                <div className="absolute top-0 right-0 text-white">
                    <AiOutlineCaretDown className="mt-1 mr-1 cursor-pointer	" size={40} onClick={() => setVisiblity(!isOpen)}></AiOutlineCaretDown>
                </div>

                <div className="flex justify-center">
                    <input className=' w-3/4 mx-auto mt-2 p-1 mb-2 rounded-lg' type="text" value={debouncedInput} onChange={(e) => setDebouncedInput(e.target.value)} />
                </div>

                <div className="w-full flex flex-col">
                    <div className='overflow-scroll h-[45vh]'>
                        {
                            mode === '/forwards' || mode === '/Defenders' ? 
                            playerList.map((player) => {
                                return (
                                    <SearchResult key={nanoid()} 
                                                  name={player.fullname} 
                                                  team={player.team} 
                                                  goals={player.goals} 
                                                  assists={player.assists} 
                                                  plusminus={player.plusMinus}
                                                  gamesPlayed={player.gamesPlayed}
                                                  shots={player.shots}
                                                  positionCode={player.positionCode}
                                                  timeOnIcePerGame={player.timeOnIcePerGame}
                                                  caphit={player.caphit} 
                                                  >
                                    </SearchResult>
                                )
                            }) : 
                            playerList.map((player) => {
                                return (
                                    <SearchResult key={nanoid()} 
                                        name={player.fullname} 
                                        team={player.team} 
                                        saves={player.saves} 
                                        goalsAgainstAverage={player.goalsAgainstAverage} 
                                        wins={player.wins} losses={player.losses} 
                                        savePct={player.savePct}>
                                    </SearchResult>
                                )
                            }) 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerSearch; 