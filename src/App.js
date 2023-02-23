import logo from './logo.svg';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Home from './Home.js';
import About from './About.js';
import NavBar from './NavBar';
import Zones from './Zones';
import UpdateDelete from './UpdateDelete';
import Monsters from './Monsters';

import './App.css';

function App() {
  const [zoneList, setZoneList] = useState([])
  const [monsterList, setMonsterList] = useState([])
  const [userInput, setUserInput] = useState('')

  useEffect(() => {fetch("http://localhost:9292/zones")
  .then(r => r.json())
  .then(z => setZoneList(z))}, [monsterList])

  function handleOnClick(e) {
  fetch(`http://localhost:9292/monsters`)
  .then(r => r.json())
  .then(z => {setMonsterList(z)})}

  function handleOnDelete(e) {
    fetch(`http://localhost:9292/monsters/${e.target.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(monsters => setMonsterList(monsters))
  }

  function handleChange(e) {
    setUserInput(e.target.value)
  }
  

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="zones" element={<Zones zones={zoneList} handleDelete={handleOnDelete} monsterList={monsterList} click={handleOnClick}/>} />
        <Route path="updateaddcreatures" element={<UpdateDelete userInput={userInput} handleChange={handleChange}/>} />
      </Routes>
    </div>
  );
}

export default App;
