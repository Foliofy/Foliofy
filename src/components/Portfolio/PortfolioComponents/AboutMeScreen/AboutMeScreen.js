import React from "react";
import { Container } from "react-bootstrap";
import "./AboutMeScreen.css";

const aboutMe = (props) => (
    <Container className='AboutMe'>
       <h2 className="AboutMeHead">About Me</h2>
       <h6 className="AboutMeHead">{props.aboutMe}</h6> 
    </Container>
)

export default aboutMe;