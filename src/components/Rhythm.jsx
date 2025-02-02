import React from "react";
import "../assets/styles/Rhythm.css"; // Adjust the path as needed
import eyeImage from "../assets/images/eye1.png";
import necroImage from "../assets/images/2ta.jpg";
import jdImage from "../assets/images/jd23.jpg";
import guitarImage from "../assets/images/Guitar.jpg";
import osuImage from "../assets/images/1ba.jpg";
import beatSaberImage from "../assets/images/Beat.jpeg";

const Rhythm = () => {
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
          <img src={eyeImage} alt="rhythm" className="top-image" />
        </div>
        <h1>Top 5 Rhythm Games You Must Try!</h1>
        <p className="styled-text">
          If you're a fan of rhythm-based challenges and love music, these games will certainly get your heart 
          pumping and your fingers moving!
        </p>

        <h2>5. Crypt of the NecroDancer</h2>
        <div className="image-container1">
          <img src={necroImage} alt="Crypt of the NecroDancer" className="top-image" />
        </div>
        <p className="styled-text">
          A unique blend of rhythm and dungeon-crawling gameplay, Crypt of the NecroDancer has players moving 
          through dungeons to the beat of the music. Every action in the game, from attacking to moving, must 
          be synced to the rhythm, creating a challenging and rewarding experience.
        </p>

        <h2>4. Just Dance Series</h2>
        <div className="image-container2">
          <img src={jdImage} alt="Just Dance Series" className="top-image" />
        </div>
        <p className="styled-text">
          The Just Dance franchise has long been the go-to rhythm game for players who enjoy dancing to popular 
          songs. Players must mimic on-screen choreography while keeping up with the rhythm of the music. Its 
          fun, energetic vibe makes it a great game for parties and gatherings.
        </p>

        <h2>3. Guitar Hero / Rock Band</h2>
        <div className="image-container3">
          <img src={guitarImage} alt="Guitar Hero / Rock Band" className="top-image" />
        </div>
        <p className="styled-text">
          While these two franchises have been around for a while, they remain some of the most iconic rhythm games. 
          Players use guitar, bass, drums, or microphone peripherals to match notes to songs, making it one of the 
          most immersive music gaming experiences. Whether you're shredding guitar solos or drumming to your 
          favorite tunes, these games deliver hours of fun.
        </p>

        <h2>2. Osu!</h2>
        <div className="image-container4">
          <img src={osuImage} alt="Osu!" className="top-image" />
        </div>
        <p className="styled-text">
          Osu! is a free-to-play rhythm game that features a variety of game modes, but its most popular mode 
          is a simple, yet challenging, click-and-drag system. Players must click circles, follow sliders, and 
          spin objects in sync with the music. The game's strong community continuously creates user-generated 
          levels, making it endless in replay value.
        </p>

        <h2>1. Beat Saber</h2>
        <div className="image-container5">
          <img src={beatSaberImage} alt="Beat Saber" className="top-image" />
        </div>
        <p className="styled-text">
          Beat Saber is a revolutionary rhythm game where players slice through blocks with lightsabers, syncing 
          with the beat of the music. Its simple concept has gained massive popularity, with a vast library of music 
          across genres. The VR experience adds a sense of immersion, making it one of the most engaging rhythm games available.
        </p>
      </div>
    </div>
  );
};

export default Rhythm;
