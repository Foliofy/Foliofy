import React from "react";
import { connect } from "react-redux";
import {Navbar} from "react-bootstrap";
import linkedIn from "../../../../assets/images/linked.png"
const footerPort = (props) => {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom">
        <Navbar.Brand href={props.prsnl.linkedinUrl}>
          <img
            alt="LinkedIn"
            src={linkedIn}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          LinkedIn 
        </Navbar.Brand>
      </Navbar>
    )
}

const mapStateToProps = state => {
    return {
        prsnl: state.personal
    }
}

export default connect(mapStateToProps)(footerPort);