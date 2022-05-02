import React from 'react';
import "./NoteButton.css";
import { Button } from 'react-bootstrap';

const NoteButton = ({notes, setNotes, note, label}) => {

    const setThisNote = (note) => {
        let test = [
          ...notes,
          {name:note}
        ]
        setNotes(test)
    }
    const removeThisNote = (note) => {
        const toFind = {name:note}
        const index = notes.indexOf(toFind)
        let test = [...notes]
        test.splice(index)
        setNotes(test)
    }

    return(
        <>
        <Button
            className="note-button"
            // onMouseDown={() => setThisNote("C3")}
            // onMouseUp={() => setNotes([])}
            onTouchStart={() => setThisNote(note)}
            onTouchEnd={() => removeThisNote(note)}
        >
            {label}
        </Button>
        </>
    )
}

export default NoteButton;