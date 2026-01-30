import React from "react";
import "./App.css";
import img from "./Daemon_bugInTheIce.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>Grace Cochran</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <ol>
                <li>
                    Step 1: Learn CSS, HTML, and JS/TS from this class and
                    others
                </li>
                <li>Step 2: Make a Neocities page with the knowledge gained</li>
                <li>Step 3: Feel Self Fulfilled</li>
            </ol>
            <img
                src={img}
                style={{ width: "300px", height: "auto" }}
                alt="An image of Daemon from the video game Date Everything. They are seen with their lower body stuck under a sheet of lake ice, a shocked expression on its face."
            />
            <div style={{ width: 900, height: 40, backgroundColor: "red" }}>
                <Container>
                    <Row>
                        <Col>Columns to</Col>
                        <Col> be colored red</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
