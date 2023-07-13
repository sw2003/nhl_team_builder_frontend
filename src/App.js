import React, { useState, createContext } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/navbar";
import PlayerSearch from "./components/playerSearch";
import ForwardContainer from './components/forwardContainer';
import DefenderContainer from './components/defenderContainer';

import { PlayerProvider } from './PlayerContext';


function App() {

  const [isOpen, setVisiblity] = useState(false);
  //const [playerData, setData] = useState(data);


  const specialWidth = {
    width: 'calc(100vw-4rem)'
  }

  return (
    <BrowserRouter>
      <>
        <PlayerProvider teamName='leafs'>
          <Navbar></Navbar>
          <div className="relative h-[125vh] ml-16" style={specialWidth}>
            <div className="relative max-w-5xl w-full mx-auto max-h-12 h-full">
              <div className="absolute right-0 p-2">
                <button className="mr-2">Select Team</button>
                <span>0/100000💰</span>
              </div>
            </div>

            <Routes>
              <Route path='/' element={
                <>
                  <h1 className='relative text-center bg-slate-700 p-2 text-white w-1/2 mx-auto border rounded'>Forwards</h1>
                  <ForwardContainer isOpen={isOpen} setVisiblity={setVisiblity}></ForwardContainer>
                </>
              }></Route>
              <Route path='/Defenders' element={
                <>
                  <h1 className='relative text-center bg-slate-700 p-2 text-white w-1/2 mx-auto border rounded'>Defenders</h1>
                  <DefenderContainer isOpen={isOpen} setVisiblity={setVisiblity}></DefenderContainer>
                </>
              }></Route>
            </Routes>

          </div>
          <PlayerSearch isOpen={isOpen} setVisiblity={setVisiblity}></PlayerSearch>
        </PlayerProvider>
      </>
    </BrowserRouter>
  );
}

export default App;


