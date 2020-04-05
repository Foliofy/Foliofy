import React from "react";
import { connect } from "react-redux";
import { Navbar } from "react-bootstrap";
import linkedIn from "../../../../assets/images/linked.png";
import github from "../../../../assets/images/GitHub.png"

const footerPort = props => {
  let footerContent = (
    <Navbar bg="dark" variant="dark">
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Made with FOLIOFY</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
  if (props.prsnl.linkedinUrl !== "" && props.prsnl.githubUrl !== "") {
    footerContent = (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href={props.prsnl.linkedinUrl}>
          <img
            alt="LinkedIn"
            src={linkedIn}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Brand href = {props.prsnl.githubUrl}>
        <img
            alt="Github"
            src={github}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Made with FOLIOFY</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  } else if (props.prsnl.linkedinUrl !== "" && props.prsnl.githubUrl === "") {
    footerContent = (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href={props.prsnl.linkedinUrl}>
          <img
            alt="LinkedIn"
            src={linkedIn}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Made with FOLIOFY</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  } else if (props.prsnl.linkedinUrl === "" && props.prsnl.githubUrl !== "") {
    footerContent = (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href={props.prsnl.githubUrl}>
          <img
            alt="Github"
            src={github}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Made with FOLIOFY</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  return (
    footerContent
  );
};

const mapStateToProps = state => {
  return {
    prsnl: state.personal
  };
};

export default connect(mapStateToProps)(footerPort);
