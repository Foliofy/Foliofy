import React from "react";
import "./Form.css";
import Personal from "../Form/FormComponents/PersonalCompoenent/PersonalComponent";
import Education from "../Form/FormComponents/EducationComponent/EducationComponent";
import Experience from "../Form/FormComponents/ExperienceComponent/ExperienceComponent";
import Abilities from "../Form/FormComponents/AbilitiesComponent/AbilitiesComponent";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../header/Header";
import {BrowserRouter, Switch, Route, withRouter} from "react-router-dom";
import { connect } from "react-redux";

const form = (props) => {
  let showComponent = null;
  if (props.showEducation === true){
    showComponent = <Education />
  }
  if (props.showExperience === true){
    showComponent = <Experience />
  }
  if (props.showAbilities === true){
    showComponent = <Abilities />
  }
  if (props.showPortfolio === true){
    showComponent = <Portfolio />
  }
  return (
    <React.Fragment>
      <BrowserRouter>
         <Route component={Header} /> 
          <Switch>
            <Route  path="/Personal" component={Personal} />
            <Route  path="/Education" component={Education} />
            <Route  path="/Experience" component={Experience} />
            <Route  path="/Abilities" component={Abilities} />
          </Switch>
        </BrowserRouter>
       {showComponent} 
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
      showEducation: state.isEducation,
      showExperience: state.isExperience,
      showAbilities: state.isAbilities,
      showPortfolio: state.isPortfolio
  };
};

export default withRouter(connect(mapStateToProps)(form));
