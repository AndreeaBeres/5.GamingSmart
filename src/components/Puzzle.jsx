import React from "react";
import "../assets/styles/Puzzle.css"; // Adjust the path to your CSS file
import witnessImage from "../assets/images/witness.jpg";
import puzzleImage from "../assets/images/puzzle.jpg";
import babaImage from "../assets/images/baba.jpg";
import monumentImage from "../assets/images/monum.jpg";
import tetrisImage from "../assets/images/tetros.jpg";
import portalImage from "../assets/images/Portal.jpg";

const Puzzle = () => {
  return (
    <div>
      <div className="topbar" id="topbar">
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
      <div className="main-content">
        <div className="image-container">
          <img src={witnessImage} alt="The Witness" className="top-image" />
        </div>
        <h1>Top 5 Puzzle Games You Must Try!</h1>
        <p className="styled-text">
          These games combine clever mechanics, immersive worlds, and challenging puzzles that will 
          put your problem-solving skills to the test while providing hours of entertainment.
        </p>

        <h2>5. The Witness</h2>
        <div className="image-container1">
          <img src={puzzleImage} alt="The Witness" className="top-image" />
        </div>
        <p className="styled-text">
          The Witness is a first-person puzzle game set on a mysterious island, where players must solve a series of intricate puzzles to unlock 
          new areas and uncover the island's secrets. Each puzzle is based on a line-drawing mechanic that requires you to think critically and 
          observe your environment for clues. Its minimalist design and complex puzzles make it an unforgettable experience.
        </p>

        <h2>4. Baba is You</h2>
        <div className="image-container2">
          <img src={babaImage} alt="Baba Is You" className="top-image" />
        </div>
        <p className="styled-text">
          Baba Is You is a unique and highly creative puzzle game where players manipulate the rules of the game world itself. By changing the 
          words that define the game mechanics (such as "Baba is You" or "Wall is Stop"), players must solve puzzles by thinking outside the box. 
          Its innovative concept and mind-bending challenges make it one of the most original puzzle games available.
        </p>

        <h2>3. Monument Valley</h2>
        <div className="image-container3">
          <img src={monumentImage} alt="Monument Valley" className="top-image" />
        </div>
        <p className="styled-text">
          Monument Valley is an artistic puzzle game where players guide a character through a world of impossible architecture and optical illusions. 
          The game's beautiful design, soothing music, and clever puzzles make it a relaxing and visually stunning experience. Its simple mechanics 
          and intriguing world are perfect for puzzle enthusiasts.
        </p>

        <h2>2. Tetris Effect</h2>
        <div className="image-container4">
          <img src={tetrisImage} alt="Tetris Effect" className="top-image" />
        </div>
        <p className="styled-text">
          Tetris is a classic puzzle game that challenges players to fit falling shapes together to form complete lines. Tetris Effect takes the 
          classic formula and adds stunning visuals and music that change based on the player's performance. The game's soothing atmosphere, 
          combined with its addicting gameplay, makes it a relaxing yet stimulating experience.
        </p>

        <h2>1. Portal Series</h2>
        <div className="image-container5">
          <img src={portalImage} alt="Portal Series" className="top-image" />
        </div>
        <p className="styled-text">
          The Portal series is famous for its unique mechanic: the portal gun. Players solve puzzles by creating portals that allow them to travel 
          between locations, manipulate objects, and reach otherwise inaccessible areas. The game's witty narrative, engaging puzzles, and the 
          memorable AI, GLaDOS, make it a must-play for puzzle lovers.
        </p>
      </div>
    </div>
  );
};

export default Puzzle;
