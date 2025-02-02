// src/components/Topbar.jsx
import React from 'react';
import '../assets/styles/Topbar.css';

const Topbar = () => {
  console.log('Topbar component is being rendered');
  return (
    <div className="topbar">
      <div className="title">
        <a href="/"><h1>Gaming Smart</h1></a>
      </div>
      <nav>
        <ul>
          <li><a href="/survival">Survival</a></li>
          <li><a href="/puzzle">Puzzle</a></li>
          <li><a href="/rhythm">Rhythm</a></li>
          <li><a href="/strategy">Strategy</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Topbar;