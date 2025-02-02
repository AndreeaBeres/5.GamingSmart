import React from "react";
import "../assets/styles/Survival.css";
import survivalImage from "../assets/images/202501.jpg";
import subnauticaImage from "../assets/images/hero-image.jpg";
import groundedImage from "../assets/images/grounded.jpg";
import starveImage from "../assets/images/starve.jpg";
import minecraftImage from "../assets/images/minecraft.jpg";
import raftImage from "../assets/images/202409.jpg";

const Survival = () => {
  return (
    <div className="main-content">
      <div className="image-container">
        <img src={survivalImage} alt="Survival" className="top-image" />
      </div>
      <h1>Top 5 Survival Games You Must Try!</h1>
      <p className="styled-text">
        There's never been a better time to get into survival games on PC, as the recent 
        revival of the genre means Steam is now awash in some truly great games, both in 
        early access and in full release. 
      </p>

      <h2>5. Subnautica</h2>
      <div className="image-container1">
        <img src={subnauticaImage} alt="Subnautica" className="top-image" />
      </div>
      <p className="styled-text">
        Survival games don't come more alien than Subnautica, or less hospitable to human life, 
        and though a sequel, Subnautica: Below Zero, came out in 2023, it's still building upon 
        a foundation set by the original. Stuck on an underwater planet, you must delve below 
        the waves to find food and resources, eventually constructing your very own underwater 
        bases and submersible vehicles.
      </p>

      <h2>4. Grounded</h2>
      <div className="image-container2">
        <img src={groundedImage} alt="Grounded" className="top-image" />
      </div>
      <p className="styled-text">
        Grounded takes the 1980s-themed Honey I Shrunk The Kids scenario and pops you in a fairly normal 
        back garden, except that because you're a tiny mite, it's transformed "normal" into more of a 
        "bug-infested hellscape." With friends in tow, your aim is to raid these miniature science labs 
        to gather intel on just what's going on, as well as turn the mandibles and shells of your fallen 
        foes into nice pairs of pants and armor, a bit like Monster Hunter in a way.
      </p>

      <h2>3. Don't Starve</h2>
      <div className="image-container3">
        <img src={starveImage} alt="Don't Starve" className="top-image" />
      </div>
      <p className="styled-text">
        Keeping your belly full is a persistent concern in Don't Starve, but running out of nutritious grub 
        is far from the only threat facing any survivors unlucky enough to get trapped in this gothic wilderness. 
        Killer bees, territorial pig men, and giant, one-eyed birds can all send you to an early grave, but other 
        dangers are less tangible. Even your own mind can become an enemy, summoning shadowy hallucinations whose 
        attacks are all too real.
      </p>

      <h2>2. Minecraft</h2>
      <div className="image-container4">
        <img src={minecraftImage} alt="Minecraft" className="top-image" />
      </div>
      <p className="styled-text">
        Minecraft is best known for the creative endeavors it's inspired, like building all of Middle-Earth, but 
        there's a survival game in there too, full of deadly nights and Creepers waiting to blow up everything you've 
        worked so hard to create. Hunger, thirst, and death accompany you as you dig underground and explore infinite, 
        procedural worlds full of monsters and dungeons.
      </p>

      <h2>1. Raft</h2>
      <div className="image-container5">
        <img src={raftImage} alt="Raft" className="top-image" />
      </div>
      <p className="styled-text">
        Raft casts you out to sea. Trapped all alone (or with a bunch of friends if you play in co-op) on your titular 
        pile of wooden planks with no land as far as the eye can see, Raft is a bit like the video game equivalent of The 
        Life of Pi.
      </p>
      <p className="styled-text">
        Fortunately, Raft isn't just about defending your newfound home from the terrors of the deep. While hunger and thirst 
        levels must be perpetually topped up, Raft also lets you indulge your slightly sillier side, giving you the scope to craft 
        multi-story palaces if you so wish, replete with shark head trophies and any other bits and bobs you find floating in 
        the ocean. And goodness is there a lot of flotsam swimming about in Raft. Whatever happened to the wider world out there, 
        you'll find a lot of it's ended up in the sea.
        </p>
    </div>
  );
};

export default Survival;
