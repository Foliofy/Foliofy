import React from "react";
import { Card, Container } from "react-bootstrap";
import styles from "./ExperienceMain.module.css";

const EducationMain = props => {
  let endDate = "";
  if (props.present === true) {
    endDate = "Present";
  } else {
    endDate = props.endDate;
  }
  return (
    <Container className={styles.Experience}>
      <h2 className={styles.ExperienceHead}>Experience</h2>
      <Card.Body>
        <Card.Title className>{props.orgName}</Card.Title>
        <Card.Subtitle className="mb-2">{props.title}</Card.Subtitle>
        <Card.Subtitle className="mb-2">
          {props.startDate} | {endDate}
        </Card.Subtitle>
        <hr />
        <Card.Subtitle className="mb-2">{props.tasks}</Card.Subtitle>
      </Card.Body>
    </Container>
  );
};

export default EducationMain;
