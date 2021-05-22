import React from "react";
import MainInfo from "./MainInfo";
import ProjectGrid from "../Projects/ProjectGrid";
import AboutMe from "../About/AboutMe";
import ContactMe from "../Contact/ContactMe";


const MainBody: React.FC = () => {

    return (
        <div className="my-3">

            <MainInfo/>

            <ProjectGrid/>

            <AboutMe/>

            <ContactMe/>

        </div>
    )
}

export default MainBody