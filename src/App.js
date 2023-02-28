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
  const [userInputName, setUserInputName] = useState('')
  const [userInputZone, setUserInputZone] = useState('')
  const [userInputInfo, setUserInputInfo] = useState('')

  useEffect(() => {fetch("http://localhost:9292/zones")
  .then(r => r.json())
  .then(z => setZoneList(z))}, [])

  useEffect(() => {fetch("http://localhost:9292/monsters")
    .then(r => r.json())
    .then((m) => {setMonsterList(m)})}, [])

  function handleOnClick() {
    document.getElementById('monsters').hidden = false
  }

  function handleOnDelete(e) {
    fetch(`http://localhost:9292/monsters/${e.target.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(monsters => setMonsterList(monsters))
  }

  function handleNameAdd(e) {
    setUserInputName(e.target.value)
    console.log(e.target)
  }
  
  function handleInfoAdd(e){
    setUserInputInfo(e.target.value)
  }

  function handleZoneAdd(e) {
    setUserInputZone(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newMonster = {
      name: userInputName,
      zone: userInputZone,
      info: userInputInfo
    }
    fetch('http://localhost:9292/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify(newMonster)
    })
    .then(r => r.json)
    .then(monsters => setMonsterList(monsters))
    setUserInputInfo('');
    setUserInputName('');
    setUserInputZone('')
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="zones" element={<Zones zones={zoneList} handleDelete={handleOnDelete} monsterList={monsterList} click={handleOnClick}/>} />
        <Route path="updateaddcreatures" 
          element={<UpdateDelete 
          zone={userInputZone} 
          handleZoneAdd={handleZoneAdd} 
          name={userInputName} 
          handleNameAdd={handleNameAdd}
          info={userInputInfo}
          handleInfoAdd={handleInfoAdd}
          handleSubmit={handleSubmit}/>} />
      </Routes>
    </div>
  );
}

export default App;
