import {createContext, useState, useEffect} from 'react'

const PlayerContext = createContext();

export function PlayerProvider({children, teamName}){


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

    const [team, setTeam] = useState('new-york-rangers'); 


    useEffect(()=>{
        try {
            fetch(`http://localhost:8000/api?teamname=${team}`) 
                .then((res)=>res.json())
                .then((res)=>{
                    let counter = 0; 
                    let forwardList = [];
                    let defenderList = [];
                    let goalieList = []; 
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

                            forwardList.push(res[i]); 
                        }
                        else if (counter < 18){
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
                        else{


                            res[i].linePosition = `G${counter}`
                            


                            goalieList.push(res[i])
                        }
                        counter++; 
                    }

                    setForwardData(forwardList);
                    setDefenderData(defenderList); 
                    setGoalieData(goalieList); 
                }) 
        } catch (error){
            console.log(error) 
        }

    }, [team])
    
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
            setMode,
            setTeam
            }}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContext; 