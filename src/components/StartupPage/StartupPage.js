import React from "react";
import "./StartupPage.css";
import {Button} from "react-bootstrap";

const startupPage = (props) => {

    return (
        <div className="App">
          <h1 className="Company-Text">Foliofy</h1>
          <h4 className="Company-TagLine">
            Instant portfolio generator{" "}
            <span role="img" aria-label="cool" style={{ fontSize: "2rem" }}>
              😎
            </span>
          </h4>
          <Button className="Start-Button" onClick={props.changed}>
            Let's Start!
          </Button>
        </div>
    );
}

export default startupPage;