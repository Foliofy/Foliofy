import React from 'react';
import {Card, Container} from "react-bootstrap";
import styles from "./EducationMain.module.css"

const EducationMain = (props) => {
    let degree = "";
    let endDate ="";
    if (props.degree === "other"){
        degree = props.other;
    }
    else{
        degree = props.degree;
    }
    if (props.present === true){
        endDate = "Present";
    }
    else{
        endDate = props.graduationEnd;
    }
    return (
        <Container className={styles.Education}>
            <h2 className={styles.EducationHead}>Education</h2>
        <Card.Body >
        <Card.Title className>{props.instituteName}</Card.Title>
        <Card.Subtitle className="mb-2">{degree}</Card.Subtitle>
        <Card.Subtitle className="mb-2">{endDate}</Card.Subtitle><hr />
        <Card.Subtitle className="mb-2">{props.speacialization}</Card.Subtitle>
        <Card.Subtitle className="mb-2">{props.graduationStart}</Card.Subtitle><hr/>
        <Card.Text>
            {props.percentage}
        </Card.Text>
        </Card.Body>
    </Container>
    )
};

export default EducationMain;