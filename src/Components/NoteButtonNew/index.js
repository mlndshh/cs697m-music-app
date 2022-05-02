import React from 'react';
import "./NoteButton.css";
import { Button } from 'react-bootstrap';
import {Howl, Howler} from 'howler';

const NoteButtonNew = ({spritename, sound}) => {
    return(
        <>
        <Button
            className="note-button"
            onTouchStart={() => sound.play(spritename)}
            //onClick={() => sound.play(spritename)}
        >
            {spritename}
        </Button>
        </>
    )
}

export default NoteButtonNew;