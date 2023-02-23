import logo from './logo.svg';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Home from './Home.js';
import About from './About.js';
import NavBar from './NavBar';
import Zones from './Zones';
import Monsters from './Monsters';
import './App.css';

function App() {
  const [zoneList, setZoneList] = useState([])
  const [monsterList, setMonsterList] = useState([])

  useEffect(() => {fetch("http://localhost:9292/zones")
  .then(r => r.json())
  .then(z => setZoneList(z))}, [monsterList])

  function handleOnClick(e) {
  fetch(`http://localhost:9292/monsters`)
  .then(r => r.json())
  .then(z => {setMonsterList(z)})}
  

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="zones" element={<Zones zones={zoneList} monsterList={monsterList} click={handleOnClick}/>} />
        <Route path="Monsters" elements={<Monsters monsters={monsterList}/>} />
      </Routes>
    </div>
  );
}

export default App;
