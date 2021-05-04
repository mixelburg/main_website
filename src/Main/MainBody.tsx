import React from "react";
import InfoCard from "./InfoCard";
import ProjectGrid from "../Projects/ProjectGrid";

interface Props {

}

const MainBody: React.FC<Props> = (props) => {

    return (
        <div className="bg-danger px-5">
            <div className="row">
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