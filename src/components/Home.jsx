// src/components/Home.jsx
import React from 'react';
import '../assets/styles/Home.css';

const Home = () => {
  console.log('Home component is being rendered');
  return (
    <div className="home-container">
      <div className="main-content">
        <div className="image-container">
        <img src="/images/boat.jpg" alt="Boat" className="top-image" />
        </div>
        <h1>"Gaming Isn't Just Fun—It Makes You Smarter!"</h1>
        <p className="styled-text">
          Researchers from the Manchester Museum of Science and Industry and 
          Western University in Canada teamed up as part of a study to find out 
          how playing games affects the way people's brains work.
        </p>
        <p className="styled-text">
          Around 1,000 people from all over the world took part in special brain tests
          and answered questions about their lifestyles as part of the study.
        </p>
        <p className="styled-text">
          The results showed that gamers performed better in memory, attention and 
          reasoning skills tests compared to those who did not play video games.
        </p>
        <p className="styled-text">
          Professor Adrian Owen, a scientist from Western University in Canada, thinks 
          this could be down to the types of games that people play these days.
        </p>
        <p className="styled-text">
          He said: "Typically, they are highly engaging, strategic and may enhance 
          visual attention and processing speed, and problem-solving abilities, through 
          intense repetition and practice."
        </p>
        <p className="styled-text">
          He said he was "surprised that video games improved" brain performance as 
          "we have shown conclusively in the past that computerised 'brain training' 
          games do not improve cognitive function".
        </p>
        <p className="styled-text">
          Cognitive function is the process of learning new things and understanding 
          them by using your thoughts, experiences, and senses.
        </p>
        <p className="styled-text">
          Playing action video games, can continually exercise your perceptual attention 
          with immediate feedback, under a variety of ever-changing contexts, and with 
          increasing levels of challenge.
        </p>
        <div className="image-container1">
          <img src="/images/2025.png" alt="Decision" style={{width: '120vh', height: 'auto', maxWidth: '100%'}}/>
        </div>
        <p className="styled-text">
          Why do these games work while others do not? Our games are designed with 
          six principles: focus on a well-specified target skill, provide repeated 
          practice, give immediate feedback, maintain increasing levels of challenge, 
          provide varying contexts for exercising the skill and make sure the game is 
          enjoyable.
        </p>
      </div>
    </div>
  );
};

export default Home;