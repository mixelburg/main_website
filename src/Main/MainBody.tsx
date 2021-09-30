import React from "react";
import Info from "../MainBody/Info/Info";
import ProjectGrid from "../MainBody/Projects/ProjectGrid";
import AboutMe from "../MainBody/About/AboutMe";
import ContactMe from "../MainBody/Contact/ContactMe";
import FadeInSection from "../util/FadeIn/FadeInSection";


const MainBody: React.FC = () => {

    return (
        <div className="my-3">
            <Info/>

            <FadeInSection>
                <ProjectGrid/>
            </FadeInSection>

            <FadeInSection>
                <AboutMe/>
            </FadeInSection>

            <FadeInSection>
                <ContactMe/>
            </FadeInSection>
        </div>
    )
}

export default MainBody
