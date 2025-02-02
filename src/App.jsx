import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './components/Topbar.jsx';
import Home from './components/Home.jsx';
import Survival from "./components/Survival";
import Strategy from "./components/Strategy";
import Puzzle from "./components/Puzzle";
import Rhythm from "./components/Rhythm"

const App = () => {
  console.log('App component is being rendered');
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/survival" element={<Survival />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/rhythm" element={<Rhythm />} />
      </Routes>
    </Router>
  );
};

export default App;
