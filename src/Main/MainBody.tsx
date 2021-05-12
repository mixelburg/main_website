import React from "react";
import MainInfo from "./MainInfo";
import ProjectGrid from "../Projects/ProjectGrid";


const MainBody: React.FC = () => {

    return (
        <div>

            <MainInfo/>

            <ProjectGrid/>

            <div style={{height: "40rem"}}>

            </div>
        </div>
    )
}

export default MainBody