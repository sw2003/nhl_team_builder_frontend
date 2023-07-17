import {createContext, useState, useEffect} from 'react'

const PlayerContext = createContext();

export function PlayerProvider({children, teamName}){
    /*
    const forwards = [
        {position: 'LW1', name: 'Auston Matthews', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0},
        {position: 'C1', name: 'Auston Matthews', goals: 'N/A', assists: 'N/A', plusminus:'N/A',gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0},
        {position: 'RW1', name: 'Auston Matthews', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0},
        {position: 'LW2', name: 'Max Domi', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0},
        {position: 'C2', name: 'John Tavares', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0}, 
        {position: 'RW2', name: 'William Nylander', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0},
        {position: 'LW3', name: 'Max Domi', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0},
        {position: 'C3', name: 'David Kampf', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0}, 
        {position: 'RW3', name: 'Calle Jarnkrok', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0}, 
        {position: 'LW4', name: 'Sam Lafferty', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0}, 
        {position: 'C4', name: 'David Kampf', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0}, 
        {position: 'RW4', name: 'Sam Lafferty', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0}, 
    ]

    const defenders = [
        {position: 'L1', name: 'Auston Matthews', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0},
        {position: 'R1', name: 'Auston Matthews', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0},
        {position: 'L2', name: 'Auston Matthews', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0},
        {position: 'R2', name: 'Max Domi', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0},
        {position: 'L3', name: 'John Tavares', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0}, 
        {position: 'R3', name: 'William Nylander', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0},
        {position: 'L4', name: 'Max Domi', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0},
        {position: 'R4', name: 'David Kampf', goals: 'N/A', assists: 'N/A', plusminus:'N/A', gamesPlayed: 0, shots: 0, positionCode: '', team: '', timeOnIcePerGame: 0}, 
    ]
    */

    const goalies = [
        {position: 'G1', name: 'Linus Ullmark', savePct: 0, saves: 0, wins: 0, losses: 0, goalsAgainstAverage: 0},
        {position: 'G2', name: 'Linus Ullmark', savePct: 0, saves: 0, wins: 0, losses: 0, goalsAgainstAverage: 0},
        {position: 'G3', name: 'Linus Ullmark',  savePct: 0, saves: 0, wins: 0, losses: 0, goalsAgainstAverage: 0},
    ]

    const [forwardData, setForwardData] = useState([]); 
    const [defenderData, setDefenderData] = useState([]); 
    const [goalieData, setGoalieData] = useState(goalies); 

    const [selectedForward, setSelected] = useState({name: '', position: ''});

    const [mode, setMode] = useState('/forwards');

    useEffect(()=>{
        try {
            fetch('http://localhost:8000/api') 
                .then((res)=>res.json())
                .then((res)=>{
                    let counter = 0; 
                    let forwardList = [];
                    let defenderList = [];
                    for (let i = 0; i<res.length; i++){
                        if (counter < 12){
                            let positions = ['L', 'C', 'R'];

                            let line = 1;
                            if (Math.floor(counter / 3) === 0){
                                line = 1; 
                            }
                            else{
                                line += Math.floor(counter / 3); 
                            }
                            
                            res[i].linePosition = `${positions[i % 3]}${line}`

                            console.log(`${res[i].fullname} ${res[i].linePosition}`)
                            forwardList.push(res[i]); 
                        }
                        else{
                            let positions = ['LD', 'RD'];

                            let line = 1;
                            if (Math.floor(counter / 2) === 0){
                                line = 1; 
                            }
                            else{
                                line += Math.floor(counter / 2); 
                            }

                            res[i].linePosition = `${positions[i % 2]}${line}`
                            defenderList.push(res[i]); 
                        }
                        counter++; 
                    }

                    setForwardData(forwardList);
                    setDefenderData(defenderList); 
                }) 
        } catch (error){

        }



    }, [])
    
    return (
        <PlayerContext.Provider value={{
            forwardData,
            setForwardData,
            selectedForward,
            setSelected,
            defenderData,
            setDefenderData,
            goalieData,
            setGoalieData, 
            mode,
            setMode
            }}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContext; 