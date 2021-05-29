import React from "react";
import Info from "../MainBody/Info/Info";
import ProjectGrid from "../MainBody/Projects/ProjectGrid";
import AboutMe from "../MainBody/About/AboutMe";
import ContactMe from "../MainBody/Contact/ContactMe";


const MainBody: React.FC = () => {

    return (
        <div className="my-3">
            <Info/>

            <ProjectGrid/>

            <AboutMe/>

            <ContactMe/>
        </div>
    )
}

export default MainBody