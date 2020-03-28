import React from "react";
import { Container } from "react-bootstrap";
import "./AboutMeScreen.css";
import { connect } from "react-redux";
const aboutMe = props => (
  <Container className="AboutMe">
    <h2 className="AboutMeHead">About Me</h2>
    <h6 className="AboutMeHead">{props.prsnl.aboutMe}</h6>
  </Container>
);

const mapStateToProps = state => {
  return {
    prsnl: state.personal
  };
};

export default connect(mapStateToProps)(aboutMe);
