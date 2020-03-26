import React from "react";
import "./Form.css";
import Personal from "../Form/FormComponents/PersonalCompoenent/PersonalComponent";
import Education from "../Form/FormComponents/EducationComponent/EducationComponent";
import Experience from "../Form/FormComponents/ExperienceComponent/ExperienceComponent";
import { connect } from "react-redux";

const form = (props) => {
  let showComponent = <Personal />;
  if (props.showEducation === true){
    showComponent = <Education />
  }
  if (props.showExperience === true){
    showComponent = <Experience />
  }
  return (
    <React.Fragment>
      {showComponent}
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
      showEducation: state.isEducation
  };
};

export default connect(mapStateToProps)(form);
