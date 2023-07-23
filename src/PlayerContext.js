import {createContext, useState, useEffect} from 'react'

const PlayerContext = createContext();

export function PlayerProvider({children, teamName}){
    const [forwardData, setForwardData] = useState([]); 
    const [defenderData, setDefenderData] = useState([]); 
    const [goalieData, setGoalieData] = useState([]); 

    const [selectedForward, setSelected] = useState({name: '', position: ''});

    const [mode, setMode] = useState('/forwards');

    const [team, setTeam] = useState('new-york-rangers'); 


    useEffect(()=>{
        try {
            fetch(`http://192.18.132.24:3000?teamname=${team}`) 
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