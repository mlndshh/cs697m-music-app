import React from 'react';
import NoteButton from "../NoteButton"
import { Container, Row, Col } from 'react-bootstrap';

const Synth = ({notes, setNotes}) => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <NoteButton notes={notes} setNotes={setNotes} note="C4" label="C4" ></NoteButton>    
                </Col>
                <Col>
                    <NoteButton notes={notes} setNotes={setNotes} note="D4" label="D4" ></NoteButton>    
                </Col>
            </Row>
            <Row>
                <Col>
                    <NoteButton notes={notes} setNotes={setNotes} note="E4" label="E4" ></NoteButton>    
                </Col>
                <Col>
                    <NoteButton notes={notes} setNotes={setNotes} note="F4" label="F4" ></NoteButton>    
                </Col>
            </Row>
            <Row>
                <Col>
                    <NoteButton notes={notes} setNotes={setNotes} note="G4" label="G4" ></NoteButton>    
                </Col>
                <Col>
                    <NoteButton notes={notes} setNotes={setNotes} note="A4" label="A4" ></NoteButton>    
                </Col>
            </Row>
            <Row>
                <Col>
                    <NoteButton notes={notes} setNotes={setNotes} note="B4" label="B4" ></NoteButton>    
                </Col>
                <Col>
                    <NoteButton notes={notes} setNotes={setNotes} note="C5" label="C5" ></NoteButton>    
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Synth;