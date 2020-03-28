import React from "react";
import "./CoverScreen.css";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
const cover = props => (
  <React.Fragment>
    <Container className="coverscreen">
      <h1 className="name">{props.prsnl.fullName}</h1>
      <h3 className="Tagline">{props.prsnl.headline}</h3>
    <h4 className="Tagline">
      E-mail : {props.prsnl.email} | Contact : {props.prsnl.phoneNum}
    </h4>
    </Container>
    
  </React.Fragment>
);

const mapStateToProps = state => {
  return {
    prsnl: state.personal
  };
};

export default connect(mapStateToProps)(cover);
