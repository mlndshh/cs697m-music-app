import './App.css';
import React from 'react';
import NoteButtonNew from './Components/NoteButtonNew';
import { Container, Row, Col } from 'react-bootstrap';
import {Howl, Howler} from 'howler';


const Test = () => {
    const sound = new Howl(
        {
          "src": [
            "/drumkits/lofi/lofi.webm",
            "/drumkits/lofi/lofi.mp3"
          ],
          "sprite": {
            "closedhat": [
              0,
              214.28571428571428
            ],
            "kick": [
              1999.9999999999998,
              375.0113378684807
            ],
            "openhat": [
              4000,
              697.6870748299317
            ],
            "crash": [
              6000,
              4250
            ],
            "sample1": [
              12000,
              10666.666666666664
            ],
            "sample2": [
              24000,
              11162.789115646263
            ],
            "snare1": [
              37000,
              799.9999999999972
            ],
            "snare2": [
              39000,
              406.2585034013608
            ]
          }
        }
      );
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <NoteButtonNew spritename={"sample1"} sound={sound}></NoteButtonNew>    
                </Col>
                <Col>
                    <NoteButtonNew spritename={"sample2"} sound={sound}></NoteButtonNew>    
                </Col>
            </Row>
            <Row>
                <Col>
                    <NoteButtonNew spritename={"snare1"} sound={sound}></NoteButtonNew>    
                </Col>
                <Col>
                    <NoteButtonNew spritename={"snare2"} sound={sound}></NoteButtonNew>    
                </Col>
            </Row>
            <Row>
                <Col>
                    <NoteButtonNew spritename={"openhat"} sound={sound}></NoteButtonNew>    
                </Col>
                <Col>
                    <NoteButtonNew spritename={"closedhat"} sound={sound}></NoteButtonNew>    
                </Col>
            </Row>
            <Row>
                <Col>
                    <NoteButtonNew spritename={"crash"} sound={sound}></NoteButtonNew>    
                </Col>
                <Col>
                    <NoteButtonNew spritename={"kick"} sound={sound}></NoteButtonNew>    
                </Col>
            </Row>
        </Container>
        {/* <button onClick={() =>sound.play("snare1")}>hi</button> */}
        </>
    )
}

export default Test;