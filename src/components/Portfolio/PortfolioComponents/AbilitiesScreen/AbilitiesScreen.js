import React from "react";
import { Container } from "react-bootstrap";
import styles from "./AbilitiesScreen.module.css";
import { connect } from "react-redux";
const abilities = props => {

  return (
    <Container className={styles.Abilities}>
      <div>
        <h2 className={styles.AbilitiesHead}>Abilities and Achievements</h2>
      </div>
      <div>
        {props.ability.skills.map(item => (
          <li key={new Date()}>{item}</li>
        ))}
      </div>
      <div>
        {props.ability.languages.map(item => (
          <li key={new Date()}>{item}</li>
        ))}
      </div>
      <div>{props.ability.achievements}</div>
      <div>
        {props.ability.hobbies.map(item => (
          <li key={new Date()}>{item}</li>
        ))}
      </div>
    </Container>
  );
};
const mapStateToProps = state => {
  return {
    ability: state.abilities
  };
};

export default connect(mapStateToProps)(abilities);
