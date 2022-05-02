import React from 'react';

import { Song, Track, Instrument } from 'reactronica';

const SynthInstrument = ({notes}) => {
    return(
        <>
        <Instrument
        type="synth"
        notes={notes}
        onLoad={(buffers) => {
            // Runs when all samples are loaded
        }}
        /></>
    )
}

export default SynthInstrument;