import React from "react";
import {connect} from "react-redux";
import Education from "./Education/EducationMain";
const educationScreen = (props) => {
  return(
    props.eduComponent.map((eduObject) => {

        return eduObject.degree === "other" ? (
          <Education 
            key = {new Date()}
            instituteName={eduObject.instituteName} 
            degree={eduObject.degree}
            other={eduObject.other}
            speacialization={eduObject.speacialization}
            graduationStart={eduObject.graduationStart}
            graduationEnd={eduObject.graduationEnd}
            present={eduObject.present}
            percentage={eduObject.percentage}
            />
        ) : (
          <Education 
            key = {new Date()}
            instituteName={eduObject.instituteName} 
            degree={eduObject.degree} 
            speacialization={eduObject.speacialization}
            graduationStart={eduObject.graduationStart}
            graduationEnd={eduObject.graduationEnd}
            present={eduObject.present}
            percentage={eduObject.percentage}
            />
        )
        
    }
    
    )
  )
};

const mapStateToProps = state => {
  return{
    eduComponent: state.education.eduArray
  }
}

export default connect(mapStateToProps)(educationScreen);
