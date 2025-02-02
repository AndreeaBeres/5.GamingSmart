import React from "react";
import "../assets/styles/Strategy.css";
import strategyImage from "../assets/images/maxresdefault.jpg";
import aoeImage from "../assets/images/a41.png";
import totalWarImage from "../assets/images/beib.jpg";
import starcraftImage from "../assets/images/gamef.jpg";
import civilizationImage from "../assets/images/sa1.jpg";
import xcomImage from "../assets/images/v1a.jpg";

const Strategy = () => {
  return (
    <div className="main-content">
      <div className="image-container">
        <img src={strategyImage} alt="Strategy" className="top-image" />
      </div>
      <h1>Top 5 Strategy Games You Must Try!</h1>
      <p className="styled-text">
        Strategy games have long been a favorite genre for players who enjoy challenging their minds with tactical decision-making and long-term planning. These games combine various elements, including resource management, military tactics, and diplomatic maneuvering, to provide deeply immersive experiences.
      </p>
      
      <h2>5. Age of Empires IV</h2>
      <div className="image-container1">
        <img src={aoeImage} alt="Age of Empires IV" className="top-image" />
      </div>
      <p className="styled-text">
        Age of Empires IV brings classic real-time strategy to modern audiences with diverse civilizations, historical accuracy, and large-scale battles.
      </p>
      
      <h2>4. Total War: Three Kingdoms</h2>
      <div className="image-container2">
        <img src={totalWarImage} alt="Total War: Three Kingdoms" className="top-image" />
      </div>
      <p className="styled-text">
        Set in ancient China, this game combines large-scale tactical battles with political intrigue, historical figures, and diplomacy.
      </p>
      
      <h2>3. Starcraft II</h2>
      <div className="image-container3">
        <img src={starcraftImage} alt="Starcraft II" className="top-image" />
      </div>
      <p className="styled-text">
        A staple in competitive strategy gaming, Starcraft II offers fast-paced action and gripping campaigns with three distinct factions.
      </p>
      
      <h2>2. Sid Meier's Civilization VI</h2>
      <div className="image-container4">
        <img src={civilizationImage} alt="Sid Meier's Civilization VI" className="top-image" />
      </div>
      <p className="styled-text">
        Build and expand your empire in Civilization VI, competing against historical leaders in a race for world domination.
      </p>
      
      <h2>1. XCOM 2</h2>
      <div className="image-container5">
        <img src={xcomImage} alt="XCOM 2" className="top-image" />
      </div>
      <p className="styled-text">
        Lead the resistance against an alien occupation in XCOM 2, featuring tactical combat, soldier permadeath, and strategic planning.
      </p>
    </div>
  );
};

export default Strategy;
