import React from "react";
import { connect } from "react-redux";
import Experience from "./Experience/ExperienceMain";

const experienceScreen = props => {
  return props.expComponent.map((expObject, index) => {
    return (
      <Experience
        key={index}
        title={expObject.title}
        orgName={expObject.orgName}
        startDate={expObject.startDate}
        endDate={expObject.endDate}
        present={expObject.present}
        tasks={expObject.tasks}
      />
    );
  });
};

const mapStateToProps = state => {
  return {
    expComponent: state.experience.expArray
  };
};

export default connect(mapStateToProps)(experienceScreen);
