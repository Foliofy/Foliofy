import React from 'react';
import Cover from "./PortfolioComponents/CoverScreen/CoverScreen";
import AboutMe from "./PortfolioComponents/AboutMeScreen/AboutMeScreen";
import Education from "./PortfolioComponents/EducationScreen/EducationScreen";
import Abilities from "./PortfolioComponents/AbilitiesScreen/AbilitiesScreen"

const portfolio = () => (
    <React.Fragment>
        <Cover />
        <AboutMe />
        <Education />
        <Abilities />
    </React.Fragment>
)

export default portfolio;