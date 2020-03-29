import React from 'react';
import Cover from "./PortfolioComponents/CoverScreen/CoverScreen"
import AboutMe from "./PortfolioComponents/AboutMeScreen/AboutMeScreen"
import Education from "./PortfolioComponents/EducationScreen/EducationScreen"
import Experience from "./PortfolioComponents/ExperienceScreen/ExperienceScreen"
const portfolio = () => (
    <React.Fragment>
        <Cover />
        <AboutMe />
        <hr/>
        <Education />
        <hr/>
        <Experience />
    </React.Fragment>
)

export default portfolio;