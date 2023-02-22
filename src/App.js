import logo from './logo.svg';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Home from './Home.js';
import About from './About.js';
import NavBar from './NavBar';
import Monsters from './Monsters';
import './App.css';

function App() {
  [zoneList, setZoneList] = useState([])

  useEffect(fetch("http://localhost:9292/zones")
  .then(r => r.json())
  .then(z => setZoneList(z)))

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="zones" element={<Zone zones={zoneList}/>} />
      </Routes>
    </div>
  );
}

export default App;
