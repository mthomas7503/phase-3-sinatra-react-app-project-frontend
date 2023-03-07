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
  const [userNameUpdate, setUserNameUpdate] = useState('')
  const [userInfoUpdate, setUserInfoUpdate] = useState('')
  const [userZoneUpdate, setUserZoneUpdate] = useState('')
 
  useEffect(() => {fetch("http://localhost:9292/zones")
  .then(r => r.json())
  .then(z => setZoneList(z))}, [])

  useEffect(() => {fetch("http://localhost:9292/monsters")
    .then(r => r.json())
    .then((m) => {setMonsterList(m)})}, [])

  function handleOnDelete(e) {
    fetch(`http://localhost:9292/monsters/${e.target.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(monsters => setMonsterList(monsters))
  }

  function handleNameAdd(e) {
    setUserInputName(e.target.value)

  }
  
  function handleInfoAdd(e){
    setUserInputInfo(e.target.value)
  }

  function handleZoneAdd(e) {
    setUserInputZone(e.target.value)
  }

  function handleInfoUpdate(e) {
    setUserInfoUpdate(e.target.value)
  }
  
  function handleZoneUpdate(e){
    setUserZoneUpdate(e.target.value)
  }

  function handleNameUpdate(e) {
    setUserNameUpdate(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newMonster = {
      name: userInputName,
      zone: userInputZone,
      info: userInputInfo
    }
    fetch('http://localhost:9292/updateaddmonster', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newMonster)
    })
    .then(r => r.json())
    .then((monsters) => {console.log(monsters); setMonsterList(monsters)})
    setUserInputInfo('');
    setUserInputName('');
    setUserInputZone('')
  }

 function handleUpdateSubmit(e) {
  e.preventDefault();
  const updateInfo = {name: userNameUpdate, info: userInfoUpdate}

fetch('http://localhost:9292/updateaddmonster', {
  method: 'PATCH',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(updateInfo)
})
.then(r => r.json())
.then(monsters => setMonsterList(monsters))
.catch(error => alert("Monster not found!"))
 }


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="zones" element={<Zones zones={zoneList} handleDelete={handleOnDelete} monsterList={monsterList}/>} />
        <Route path="updateaddmonster" 
          element={<UpdateDelete 
          zone={userInputZone} 
          handleZoneAdd={handleZoneAdd} 
          name={userInputName} 
          handleNameAdd={handleNameAdd}
          info={userInputInfo}
          handleInfoAdd={handleInfoAdd}
          handleSubmit={handleSubmit}
          zoneUpdate={userZoneUpdate}
          handleZoneUpdate={handleZoneUpdate}
          nameUpdate={userNameUpdate}
          handleNameUpdate={handleNameUpdate}
          infoUpdate={userInfoUpdate}
          handleInfoUpdate={handleInfoUpdate}
          handleUpdateSubmit={handleUpdateSubmit}/>}/>
      </Routes>
    </div>
  );
}

export default App;
