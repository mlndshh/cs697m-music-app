import './App.css';
import React from 'react';

import { Song, Track, Instrument } from 'reactronica';
import Synth from './Components/Synth';
import SynthInstrument from './Components/Synth/instrument';
import Test from './Test';

const App = () => {
  const [notes, setNotes] = React.useState([]);

  return (
    <>
    <div id="main-body">
        {/* <Synth notes={notes} setNotes={setNotes} /> */}
        <Test />
        <div id="menu">
            <div className="menu-item" id="home-icon">Home</div>
            <div className="menu-item" id="profile-icon">Profile</div>
            <div className="menu-item" id="explore-icon">explore</div>
        </div>
        
    </div>
    <Song>
    <Track>
        <SynthInstrument notes={notes} />
        {/* <Instrument
        type="sampler"
        samples={{
            C4: "/sounds/piano/C4.mp3",
            D4: "/sounds/piano/D4.mp3"
        }}
        notes={notes}
        onLoad={(buffers) => {
            // Runs when all samples are loaded
        }}
        /> */}
    </Track>
    </Song>
    </>
  );
};

export default App;