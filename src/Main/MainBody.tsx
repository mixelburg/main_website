import React from "react";
import MainInfo from "./MainInfo";
import ProjectGrid from "../Projects/ProjectGrid";
import AboutMe from "../About/AboutMe";


const MainBody: React.FC = () => {

    return (
        <div className="my-3">

            <MainInfo/>

            <ProjectGrid/>

            <AboutMe/>

        </div>
    )
}

export default MainBody