import React from "react";
import MainInfo from "./MainInfo";
import ProjectGrid from "../Projects/ProjectGrid";


const MainBody: React.FC = () => {

    return (
        <div>

                <MainInfo/>

                <ProjectGrid/>
        </div>
    )
}

export default MainBody