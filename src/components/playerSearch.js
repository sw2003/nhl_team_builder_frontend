import React, { useState, useEffect } from 'react';
import { AiOutlineCaretDown } from "react-icons/ai"
import SearchResult from './searchResult';
import { nanoid } from 'nanoid';

function PlayerSearch({ isOpen, setVisiblity }) {
    const [input, setInput] = useState('');
    const [debouncedInput, setDebouncedInput] = useState('');
    const [playerList, setPlayerList] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => setInput(debouncedInput), 1000)
        return () => clearTimeout(timer);
    }, [debouncedInput])

    const options = {
        method: 'GET',
    }

    useEffect(() => {
        if (input !== '') {
            fetch(`http://localhost:4000/json?prefix=${input}`, options)
                .then((res) => res.json())
                .then((res) => {
                    setPlayerList(res);
                });
        }
    }, [input]);

    return (
        <div className={`flex justify-center items-center`}>
            <div className={`fixed w-full max-h-96 max-w-2xl bottom-0 z-20 bg-blue-950 ml-16 transition-all duration-500 ${!isOpen && 'scale-y-0'}`}>
                <div className="absolute top-0 right-0 text-white">
                    <AiOutlineCaretDown className="mt-1 mr-1 cursor-pointer	" size={40} onClick={() => setVisiblity(!isOpen)}></AiOutlineCaretDown>
                </div>

                <div className="flex justify-center">
                    <input className=' w-3/4 mx-auto mt-2 p-1 mb-2' type="text" value={debouncedInput} onChange={(e) => setDebouncedInput(e.target.value)} />
                </div>

                <div className="w-full flex flex-col">
                    {
                        playerList.map((player) => {
                            return (
                                <SearchResult key={nanoid()} name={player.name} team={player.team}></SearchResult>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PlayerSearch; 