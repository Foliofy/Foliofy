import React from 'react';
import Cover from "./PortfolioComponents/CoverScreen/CoverScreen"
import AboutMe from "./PortfolioComponents/AboutMeScreen/AboutMeScreen"
import Education from "./PortfolioComponents/EducationScreen/EducationScreen"
import Experience from "./PortfolioComponents/ExperienceScreen/ExperienceScreen"
import Abilities from "./PortfolioComponents/AbilitiesScreen/AbilitiesScreen"
const portfolio = () => (
    <React.Fragment>
        <Cover />
        <AboutMe />
        <hr/>
        <Education />
        <hr/>
        <Experience />
        <hr />
        <Abilities />
    </React.Fragment>
)

export default portfolio;