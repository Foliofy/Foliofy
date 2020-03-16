import React from "react";
import "./CoverScreen.css";
import {Container} from "react-bootstrap";
const cover = props => (
  <React.Fragment>
    <Container className="coverscreen">
      <h1 className="name">{props.name}</h1>
    </Container>
  </React.Fragment>
);

export default cover;
