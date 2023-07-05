import React, { useState } from 'react';


function NavbarButton({ icon }){
    return (
        <div className='h-12 w-12 flex justify-center items-center p-3 my-2 mx-auto bg-white hover:bg-green-200 text-black group transition-all duration-300'>
            {icon} 
            <span className='absolute left-20 scale-0 group-hover:scale-100 transition-all duration-300'>
                Testing
            </span>
        </div>
    )
}

export default NavbarButton; 