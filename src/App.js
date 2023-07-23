import React, { useState, createContext, useEffect } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Sidebar from "./components/sidebar";
import PlayerSearch from "./components/playerSearch";
import ForwardContainer from './components/forwardContainer';
import DefenderContainer from './components/defenderContainer';
import GoalieContainer from './components/goalieContainer';
import TeamButton from './components/teamButton';

import { PlayerProvider } from './PlayerContext';
import HamburgerNav from './components/hamburgerNav';


function App() {

  const [isOpen, setVisiblity] = useState(false);
  //const [playerData, setData] = useState(data);

  /*
  const specialWidth = {
    width: 'calc(100vw-3rem)'
  }
  */ 


  return (
    <BrowserRouter>
      <div className='overscroll-none'>
        <PlayerProvider teamName='leafs'>
            <HamburgerNav setVisiblity={setVisiblity}></HamburgerNav>
            <Routes>
              <Route path='/' element={
                <>
                  {/*<h1 className='relative text-center bg-slate-700 p-2 text-white w-1/2 mx-auto border rounded'>Forwards</h1>*/}
                  <ForwardContainer isOpen={isOpen} setVisiblity={setVisiblity}></ForwardContainer>
                </>
              }></Route>
              <Route path='/Defenders' element={
                <>
                  <DefenderContainer isOpen={isOpen} setVisiblity={setVisiblity}></DefenderContainer>
                </>
              }></Route>
              <Route path='/Goalies' element={
                <>
                  <GoalieContainer isOpen={isOpen} setVisiblity={setVisiblity}></GoalieContainer>
                </>
              }></Route>
            </Routes>
          <PlayerSearch isOpen={isOpen} setVisiblity={setVisiblity}></PlayerSearch>
        </PlayerProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;


