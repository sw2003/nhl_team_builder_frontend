import {createContext, useState, useEffect} from 'react'

const PlayerContext = createContext();

export function PlayerProvider({children, teamName}){
    const forwards = [
        {position: 'LW1', name: 'Auston Matthews', goals: 'N/A', assists: 'N/A', plusminus:'N/A'},
        {position: 'C1', name: 'Auston Matthews', goals: 'N/A', assists: 'N/A', plusminus:'N/A'},
        {position: 'RW1', name: 'Auston Matthews', goals: 'N/A', assists: 'N/A', plusminus:'N/A'},
        {position: 'LW2', name: 'Max Domi', goals: 'N/A', assists: 'N/A', plusminus:'N/A'},
        {position: 'C2', name: 'John Tavares', goals: 'N/A', assists: 'N/A', plusminus:'N/A'}, 
        {position: 'RW2', name: 'William Nylander', goals: 'N/A', assists: 'N/A', plusminus:'N/A'},
        {position: 'LW3', name: 'Max Domi', goals: 'N/A', assists: 'N/A', plusminus:'N/A'},
        {position: 'C3', name: 'David Kampf', goals: 'N/A', assists: 'N/A', plusminus:'N/A'}, 
        {position: 'RW3', name: 'Calle Jarnkrok', goals: 'N/A', assists: 'N/A', plusminus:'N/A'}, 
        {position: 'LW4', name: 'Sam Lafferty', goals: 'N/A', assists: 'N/A', plusminus:'N/A'}, 
        {position: 'C4', name: 'David Kampf', goals: 'N/A', assists: 'N/A', plusminus:'N/A'}, 
        {position: 'RW4', name: 'Sam Lafferty', goals: 'N/A', assists: 'N/A', plusminus:'N/A'}, 
    ]

    const defenders = [
        {position: 'L1', name: 'Auston Matthews', goals: 'N/A', assists: 'N/A', plusminus:'N/A'},
        {position: 'R1', name: 'Auston Matthews', goals: 'N/A', assists: 'N/A', plusminus:'N/A'},
        {position: 'L2', name: 'Auston Matthews', goals: 'N/A', assists: 'N/A', plusminus:'N/A'},
        {position: 'R2', name: 'Max Domi', goals: 'N/A', assists: 'N/A', plusminus:'N/A'},
        {position: 'L3', name: 'John Tavares', goals: 'N/A', assists: 'N/A', plusminus:'N/A'}, 
        {position: 'R3', name: 'William Nylander', goals: 'N/A', assists: 'N/A', plusminus:'N/A'},
        {position: 'L4', name: 'Max Domi', goals: 'N/A', assists: 'N/A', plusminus:'N/A'},
        {position: 'R4', name: 'David Kampf', goals: 'N/A', assists: 'N/A', plusminus:'N/A'}, 
    ]

    const [forwardData, setForwardData] = useState(forwards); 
    const [selectedForward, setSelected] = useState({name: '', position: ''});

    const [defenderData, setDefenderData] = useState(defenders); 
    const [mode, setMode] = useState('forward');

    useEffect(()=>{
        console.log("context ran"); 
    })
    
    return (
        <PlayerContext.Provider value={{
            forwardData,
            setForwardData,
            selectedForward,
            setSelected,
            defenderData,
            setDefenderData,
            mode,
            setMode
            }}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContext; 