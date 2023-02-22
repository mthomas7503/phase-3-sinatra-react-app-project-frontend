import logo from './logo.svg';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Monsters from './Monsters';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
