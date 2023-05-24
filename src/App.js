import logo from './logo.svg';
import './App.css';
// import React, {useEffect, useState} from React
import { NavLink, Routes, Route, Router } from "react-router-dom"
import NavBar from './NavBar';
import Teams from './Teams';
import Players from './Players';
import Homepage from './Homepage';
import Games from './Games';

function App() {
  return (
    <div className="App">
      
        <NavBar />
        
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/Players" element={<Players />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Games" element={<Games />} />
        </Routes>
      


    </div>
  );
}

export default App;
