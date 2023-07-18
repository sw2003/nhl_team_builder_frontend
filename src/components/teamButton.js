import React, { useState } from 'react';

function TeamButton(){
    const [isOpen, setIsOpen] = useState(false); 


    return (
        <div className='' onMouseLeave={()=>setIsOpen(false)}>
            <div onMouseEnter={()=>setIsOpen(true)} className='relative w-44 bg-slate-500 rounded-md group z-10'>
                <div className='cursor-pointer rounded-md mt-2 text-center text-white border-b-2 border-black'>Select Team</div>
            </div>        
            <div className={`relative w-44 h-72 bg-slate-500 flex flex-col  ${!isOpen ? 'scale-y-0': 'scale-y-100'} transition-all origin-top duration-300 rounded border border-black -top-2 z-0 overflow-scroll text-white text-center`}>
                <div className='w-full p-4 bg-slate-500 border-t-2 border-black cursor-pointer hover:-translate-x-4 transition-all'>
                    <span className=''>Calgary Flames</span>
                </div>
                <div className='w-full p-4 bg-slate-500 border-t-2 border-black cursor-pointer hover:-translate-x-4 transition-all'>
                    <span className=''>Edmonton Oilers</span>
                </div>
                <div className='w-full p-4 bg-slate-500 border-t-2 border-black cursor-pointer hover:-translate-x-4 transition-all'>
                    <span className=''>Montreal Canadiens</span>
                </div>
                <div className='w-full p-4 bg-slate-500 border-t-2 border-black cursor-pointer hover:-translate-x-4 transition-all'>
                    <span className=''>Ottawa Senators</span>
                </div>                                
                <div className='w-full p-4 bg-slate-500 border-t-2 border-black cursor-pointer hover:-translate-x-4 transition-all'>
                    <span className=''>Toronto Maple Leafs</span>
                </div>
                <div className='w-full p-4 bg-slate-500 border-t-2 border-black cursor-pointer hover:-translate-x-4 transition-all'>
                    <span className=''>Winnipeg Jets</span>
                </div>
                <div className='w-full p-4 bg-slate-500 border-t-2 border-black cursor-pointer hover:-translate-x-4 transition-all'>
                    <span className=''>Vancouver Canucks</span>
                </div>
            </div>
        </div>

    )
}

export default TeamButton; 