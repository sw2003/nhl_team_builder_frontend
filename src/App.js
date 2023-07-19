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
import GoalieContainer from './components/goalieContainer';
import TeamButton from './components/teamButton';

import { PlayerProvider } from './PlayerContext';


function App() {

  const [isOpen, setVisiblity] = useState(false);
  //const [playerData, setData] = useState(data);


  const specialWidth = {
    width: 'calc(100vw-5rem)'
  }

  return (
    <BrowserRouter>
      <>
        <PlayerProvider teamName='leafs'>
          <Navbar setVisiblity={setVisiblity}></Navbar>
          <div className="relative h-[125vh] ml-20 bg-slate-50" style={specialWidth}>
            <div className="relative max-w-5xl w-full mx-auto max-h-12 h-full">
              <div className="absolute right-0 top-0 z-30">
                <TeamButton></TeamButton>
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
              <Route path='/Goalies' element={
                <>
                  <h1 className='relative text-center bg-slate-700 p-2 text-white w-1/2 mx-auto border rounded'>Goalies</h1>
                  <GoalieContainer isOpen={isOpen} setVisiblity={setVisiblity}></GoalieContainer>
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


