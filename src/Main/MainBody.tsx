import React from "react";
import InfoCard from "./InfoCard";
import ProjectGrid from "../Projects/ProjectGrid";


const MainBody: React.FC = () => {

    return (
        <div className="p-5">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <InfoCard/>
                </div>

                <div className="col">
                    <ProjectGrid/>
                </div>
            </div>
        </div>
    )
}

export default MainBody