import React from 'react';
import Cover from "./PortfolioComponents/CoverScreen/CoverScreen"
import AboutMe from "./PortfolioComponents/AboutMeScreen/AboutMeScreen"
import Education from "./PortfolioComponents/EducationScreen/EducationScreen"
const portfolio = (props) => (
    <React.Fragment>
        <Cover name={props.formData.name.value}/>
        <AboutMe aboutMe={props.formData.aboutMe.value}/>
        <Education eduQual={props.formData.education}/>
    </React.Fragment>
)

export default portfolio;