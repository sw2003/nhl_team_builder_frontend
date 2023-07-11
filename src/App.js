import React, { useState, createContext } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/navbar";
import PlayerSearch from "./components/playerSearch";
import PlayerContainer from './components/playerContainer';

import { ForwardProvider } from './ForwardContext';


function App() {

  const [isOpen, setVisiblity] = useState(false);
  //const [playerData, setData] = useState(data);


  const specialWidth = {
    width: 'calc(100vw-4rem)'
  }

  return (
    <BrowserRouter>
      <>
        <Navbar></Navbar>
        <ForwardProvider teamName='leafs'>
          <div className="relative h-screen ml-16" style={specialWidth}>
            <div className="relative max-w-5xl w-full mx-auto max-h-12 h-full">
              <div className="absolute right-0 p-2">
                <button className="mr-2">Select Team</button>
                <span>0/100000💰</span>
              </div>
            </div>

            <Routes>
              <Route path='/' element={
                <>
                  <h1 className='relative text-center bg-slate-700 p-2 text-white w-1/2 mx-auto'>Forwards</h1>
                  <PlayerContainer isOpen={isOpen} setVisiblity={setVisiblity}></PlayerContainer>
                </>
              }></Route>
              <Route path='/Defense' element={
                <>
                  <h1 className='relative text-center bg-slate-700 p-2 text-white w-1/2 mx-auto'>Defenders</h1>
                  <PlayerContainer isOpen={isOpen} setVisiblity={setVisiblity}></PlayerContainer>
                </>
              }></Route>
            </Routes>

          </div>
          <PlayerSearch isOpen={isOpen} setVisiblity={setVisiblity}></PlayerSearch>
        </ForwardProvider>
      </>
    </BrowserRouter>
  );
}

export default App;


