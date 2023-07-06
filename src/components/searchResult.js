import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md'

function SearchResult({name, team}) {
    return (
        <div className=" relative text-white my-2 p-1 border mx-12 group cursor-pointer">
            <span>{name}</span>
            <span> {team}</span>
            <MdAddCircle className='inline-block absolute right-0 mr-2 scale-0 group-hover:scale-100 transition-all duration-300' size={20}></MdAddCircle>
        </div>
    )
}


export default SearchResult; 