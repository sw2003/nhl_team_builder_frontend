import React, { useState, useEffect } from 'react';
import TeamSearchResult from './teamSearchResult';


function TeamButton(){

    const [debounceIsOpen, setDebounceIsOpen] = useState(false); 
    const [isOpen, setIsOpen] = useState(debounceIsOpen); 
    const [bool, setBool] = useState(false); 

    const teams = [
        {teamname: 'anaheim-ducks', abrv: 'ANA'}, 
        {teamname: 'arizona-coyotes', abrv: 'ARI'}, 
        {teamname: 'boston-bruins', abrv: 'BOS'}, 
        {teamname: 'buffalo-sabres', abrv: 'BUF'}, 
        {teamname: 'carolina-hurricanes', abrv: 'CAR'}, 
        {teamname: 'columbus-blue-jackets', abrv: 'CBJ'}, 
        {teamname: 'calgary-flames' , abrv: 'CGY'},
        {teamname: 'chicago-blackhawks', abrv: 'CHI'}, 
        {teamname: 'colorado-avalanche', abrv: 'COL'}, 
        {teamname: 'dallas-stars', abrv: 'DAL'}, 
        {teamname: 'detroit-red-wings', abrv: 'DET'},
        {teamname: 'edmonton-oilers', abrv: 'EDM'}, 
        {teamname: 'florida-panthers', abrv: 'FLA'}, 
        {teamname: 'los-angeles-kings', abrv: 'LAK'}, 
        {teamname: 'minnesota-wild', abrv: 'MIN'}, 
        {teamname: 'montreal-canadiens', abrv: 'MTL'}, 
        {teamname: 'new-jersey-devils', abrv: 'NJD'}, 
        {teamname: 'nashville-predators', abrv: 'NSH'}, 
        {teamname: 'new-york-islanders', abrv: 'NYI'},
        {teamname: 'new-york-rangers', abrv: 'NYR'}, 
        {teamname: 'ottawa-senators', abrv: 'OTT'}, 
        {teamname: 'philadelphia-flyers', abrv: 'PHI'}, 
        {teamname: 'pittsburgh-penguins', abrv: 'PIT'}, 
        {teamname: 'seattle-kraken', abrv: 'SEA'},
        {teamname: 'san-jose-sharks', abrv: 'SJS'}, 
        {teamname: 'st-louis-blues', abrv: 'STL'}, 
        {teamname: 'tampa-bay-lightning', abrv: 'TBL'}, 
        {teamname: 'toronto-maple-leafs', abrv: 'TOR'}, 
        {teamname: 'vancouver-canucks', abrv: 'VAN'}, 
        {teamname: 'vegas-golden-knights', abrv: 'VGK'}, 
        {teamname: 'winnipeg-jets', abrv: 'WPG'}, 
        {teamname: 'washington-capitals', abrv: 'WSH'}
    ]

    useEffect(()=>{
        if (bool){
            setDebounceIsOpen(true); 
            const timer = setTimeout(()=>{
                setIsOpen(true); 
            }, 300)
            return ()=>clearTimeout(timer); 
        }
        else{
            setIsOpen(false); 
            const timer = setTimeout(()=>{
                setDebounceIsOpen(false); 
            }, 300)
            return ()=>clearTimeout(timer); 
        }
    }, [bool])

    function onClick(teamName){
        console.log("upperlevel click"); 
    }


    return (
        <div className='' onMouseLeave={()=>setBool(false)}>
            <div onMouseEnter={()=>setBool(true)} className='relative w-52 bg-slate-500 rounded-md group z-10'>
                <div className='cursor-pointer rounded-md mt-2 text-center text-white border-b-2 border-black'>Select Team</div>
            </div>        
            <div className={`relative w-52 h-72 bg-slate-500 flex flex-col  ${!debounceIsOpen ? 'hidden': 'block'} ${isOpen ? 'scale-y-100': 'scale-y-0'} transition-all origin-top duration-300 rounded border border-black -top-2 z-0 overflow-scroll text-white text-center`}>
                {
                    teams.map((team)=><TeamSearchResult key={team.teamname} teamName={team.teamname} teamAbrv={team.abrv} onClick={onClick}/>)


                }
            </div>
        </div>

    )
}

export default TeamButton; 