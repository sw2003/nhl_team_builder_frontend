import React, { useState } from 'react';

import Navbar from "./components/navbar";
import PlayerBox from "./components/playerBox";
import { TextField } from "@mui/material";
import PlayerSearch from "./components/playerSearch";

function App() {
  const [isOpen, setVisiblity] = useState(false); 

  const specialWidth = {
    width: 'calc(100vw-4rem)' 
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="relative h-screen ml-16" style={specialWidth}>
        <div className="relative max-w-5xl w-full mx-auto max-h-12 h-full">
            <div className="absolute right-0 p-2">
              <button className="mr-2">Select Team</button>
              <span>0/100000💰</span>
            </div>
        </div>
        <h1 className='relative text-center bg-slate-700 p-2 text-white w-1/2 mx-auto'>Forwards</h1>
        <div className='w-5/6 mx-auto grid grid-cols-3 grid-row-3 text-center mt-2 text-white gap-4'>
            <span className='flex justify-center mb-2'>
              <p className='w-1/2 bg-slate-600'>LW</p>
            </span>
            <span className='flex justify-center mb-2'>
              <p className='w-1/2 bg-slate-600'>C</p>
            </span>
            <span className='flex justify-center mb-2'>
              <p className='w-1/2 bg-slate-600'>RW</p>
            </span>
     
            <PlayerBox isOpen={isOpen} setVisiblity={setVisiblity}></PlayerBox>
            <PlayerBox isOpen={isOpen} setVisiblity={setVisiblity}></PlayerBox>
            <PlayerBox isOpen={isOpen} setVisiblity={setVisiblity}></PlayerBox>
            <PlayerBox isOpen={isOpen} setVisiblity={setVisiblity}></PlayerBox>
            <PlayerBox isOpen={isOpen} setVisiblity={setVisiblity}></PlayerBox>
            <PlayerBox isOpen={isOpen} setVisiblity={setVisiblity}></PlayerBox>
            <PlayerBox isOpen={isOpen} setVisiblity={setVisiblity}></PlayerBox>
            <PlayerBox isOpen={isOpen} setVisiblity={setVisiblity}></PlayerBox>
            <PlayerBox isOpen={isOpen} setVisiblity={setVisiblity}></PlayerBox>

        </div>

      
      </div>
      <PlayerSearch isOpen={isOpen} setVisiblity={setVisiblity}></PlayerSearch>
    </>
  );
}

export default App;


/*
  <div className="w-3/4 mx-auto mt-8 flex justify-between">
          <PlayerBox isOpen={isOpen} setVisiblity={setVisiblity}></PlayerBox>
        </div>

*/