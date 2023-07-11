import {createContext, useState, useEffect} from 'react'

const ForwardContext = createContext();

export function ForwardProvider({children, teamName}){
    const data = [
        {position: 'LW1', name: 'Tyler Betruzzi'}, 
        {position: 'C1', name: 'Auston Matthews'},
        {position: 'RW1', name: 'Mitch Marner'},
        {position: 'LW2', name: 'Max Domi'},
        {position: 'C2', name: 'John Tavares'}, 
        {position: 'RW2', name: 'William Nylander'},
        {position: 'LW3', name: 'Matthew Knies'}, 
        {position: 'C3', name: 'David Kampf'}, 
        {position: 'RW3', name: 'Calle Jarnkrok'}, 
        {position: 'LW4', name: 'Sam Lafferty'}, 
        {position: 'C4', name: 'Pontus Holmerg'},
        {position: 'RW4', name: 'Ryan Reeves'}
    ]

    const [forwardData, setForwardData] = useState(data); 
    const [selectedForward, setSelected] = useState({name: '', position: ''});


  

    
    return (
        <ForwardContext.Provider value={{forwardData, setForwardData, selectedForward, setSelected}}>{children}</ForwardContext.Provider>
    )
}

export default ForwardContext; 