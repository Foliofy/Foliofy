import React from "react";
import { Container } from "react-bootstrap";
import styles from "./AbilitiesScreen.module.css";
import { connect } from "react-redux";
import {Form,Col} from "react-bootstrap";
const abilities = props => {

  return (
    <Container className={styles.Abilities}>
      
      <div>
        <h2 className={styles.AbilitiesHead}>Abilities and Achievements</h2>
      </div>
      <Form.Row className={styles.AbilitiesDisplay}>
      <div as={Col}>
        <h6 className={styles.AbilitiesHead}>Skills</h6>
          {props.ability.skills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div >
      <div as={Col}>
      <h6 className={styles.AbilitiesHead}>Languages</h6>
        {props.ability.languages.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
      <div as={Col}>
      <h6 className={styles.AbilitiesHead}>Hobbies</h6>
        {props.ability.hobbies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
      </Form.Row>
      <hr />
      <h6 className={styles.AbilitiesHead}>Achievements</h6>
      <div>{props.ability.achievements}</div>
      
    </Container>
  );
};
const mapStateToProps = state => {
  return {
    ability: state.abilities
  };
};

export default connect(mapStateToProps)(abilities);
