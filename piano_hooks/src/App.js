import React, { useEffect } from "react";
import "./App.css";
import AudioPlayer from "./AudioPlayer";
function App() {
  const audioPlayer = AudioPlayer();

  useEffect(() => {
    audioPlayer.setInstrument("acoustic_grand_piano");
  }, []);

  const handleClick = (Note) => {
    audioPlayer.playNote(Note);
  };

  return (
    <div class="app-container">
<div class="piano-container">
   <button class="piano-natural-key" onClick={()=> handleClick("C1")}>
      <div class="piano-text">Q</div>
   </button>
   <div class="piano-accidental-key-wrapper">
      <button class="piano-accidental-key" onClick={()=> handleClick("C#1")}>
         <div class="piano-text">2</div>
      </button>
   </div>
   <button class="piano-natural-key  "onClick={()=> handleClick("D1")}>
      <div class="piano-text">W</div>
   </button>
   <div class="piano-accidental-key-wrapper">
      <button class="piano-accidental-key  "onClick={()=> handleClick("D#1")}>
         <div class="piano-text">3</div>
      </button>
   </div>
   <button class="piano-natural-key  "onClick={()=> handleClick("E1")}>
      <div class="piano-text">E</div>
   </button>
   <button class="piano-natural-key  "onClick={()=> handleClick("F2")}>
      <div class="piano-text">R</div>
   </button>
   <div class="piano-accidental-key-wrapper">
      <button class="piano-accidental-key  "onClick={()=> handleClick("F#2")}>
         <div class="piano-text">5</div>
      </button>
   </div>
   <button class="piano-natural-key  "onClick={()=> handleClick("G2")}>
      <div class="piano-text">T</div>
   </button>
   <div class="piano-accidental-key-wrapper">
      <button class="piano-accidental-key  "onClick={()=> handleClick("G#2")}>
         <div class="piano-text">6</div>
      </button>
   </div>
   <button class="piano-natural-key  "onClick={()=> handleClick("A2")}>
      <div class="piano-text">Y</div>
   </button>
   <div class="piano-accidental-key-wrapper">
      <button class="piano-accidental-key  "onClick={()=> handleClick("A#2")}>
         <div class="piano-text">7</div>
      </button>
   </div>
   <button class="piano-natural-key  "onClick={()=> handleClick("B2")}>
      <div class="piano-text">U</div>
   </button>
   <button class="piano-natural-key  "onClick={()=> handleClick("C3")}>
      <div class="piano-text">I</div>
   </button>
   <div class="piano-accidental-key-wrapper">
      <button class="piano-accidental-key  "onClick={()=> handleClick("C#3")}>
         <div class="piano-text">9</div>
      </button>
   </div>
   <button class="piano-natural-key  "onClick={()=> handleClick("D3")}>
      <div class="piano-text">O</div>
   </button>
   <div class="piano-accidental-key-wrapper">
      <button class="piano-accidental-key  "onClick={()=> handleClick("D#3")}>
         <div class="piano-text">0</div>
      </button>
   </div>
   <button class="piano-natural-key  "onClick={()=> handleClick("E3")}>
      <div class="piano-text">P</div>
   </button>
   <button class="piano-natural-key  "onClick={()=> handleClick("F4")}>
      <div class="piano-text">Z</div>
   </button>
   <div class="piano-accidental-key-wrapper">
      <button class="piano-accidental-key  "onClick={()=> handleClick("F#4")}>
         <div class="piano-text">S</div>
      </button>
   </div>
   <button class="piano-natural-key  "onClick={()=> handleClick("G4")}>
      <div class="piano-text">X</div>
   </button>
   <div class="piano-accidental-key-wrapper">
      <button class="piano-accidental-key  "onClick={()=> handleClick("G#4")}>
         <div class="piano-text">D</div>
      </button>
   </div>
   <button class="piano-natural-key  "onClick={()=> handleClick("A4")}>
      <div class="piano-text">C</div>
   </button>
   <div class="piano-accidental-key-wrapper">
      <button class="piano-accidental-key  "onClick={()=> handleClick("A#4")}>
         <div class="piano-text">F</div>
      </button>
   </div>
   <button class="piano-natural-key  "onClick={()=> handleClick("B4")}>
      <div class="piano-text">V</div>
   </button>
   <button class="piano-natural-key  "onClick={()=> handleClick("C5")}>
      <div class="piano-text">B</div>
   </button>
   <div class="piano-accidental-key-wrapper">
      <button class="piano-accidental-key  "onClick={()=> handleClick("C#5")}>
         <div class="piano-text">H</div>
      </button>
   </div>
   <button class="piano-natural-key  "onClick={()=> handleClick("D5")}>
      <div class="piano-text">N</div>
   </button>
   <div class="piano-accidental-key-wrapper">
      <button class="piano-accidental-key  "onClick={()=> handleClick("D#5")}>
         <div class="piano-text">J</div>
      </button>
   </div>
   <button class="piano-natural-key  "onClick={()=> handleClick("E5")}>
      <div class="piano-text">M</div>
   </button>
   <button class="piano-natural-key  "onClick={()=> handleClick("F6")}>
      <div class="piano-text">,</div>
   </button>
   <div class="piano-accidental-key-wrapper">
      <button class="piano-accidental-key  "onClick={()=> handleClick("F#6")}>
         <div class="piano-text">L</div>
      </button>
   </div>
   <button class="piano-natural-key  "onClick={()=> handleClick("G6")}>
      <div class="piano-text">.</div>
   </button>
   <div class="piano-accidental-key-wrapper">
      <button class="piano-accidental-key  "onClick={()=> handleClick("G#6")}>
         <div class="piano-text">;</div>
      </button>
   </div>
   <button class="piano-natural-key  "onClick={()=> handleClick("A6")}>
      <div class="piano-text">/</div>
   </button>
   <div class="piano-accidental-key-wrapper">
      <button class="piano-accidental-key  "onClick={()=> handleClick("A#6")}>
         <div class="piano-text">'</div>
      </button>
   </div>
   <button class="piano-natural-key  "onClick={()=> handleClick("B6")}>
      <div class="piano-text">A</div>
   </button>
</div>
</div>
  );
}

export default App;
