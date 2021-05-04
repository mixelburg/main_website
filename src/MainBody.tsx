import React from "react";
import ProjectCard from "./ProjectCard";
import InfoCard from "./InfoCard";

interface Project {
    name: string;
    updated_at: string;
    [key: string]: any;
}

interface Props {
    data: Project[];
}

const MainBody: React.FC<Props> = (props) => {

    return (
        <>
            <div className="row">
                <div className="col">
                    <InfoCard/>

                </div>

                <div className="col">

                    <div className="row row-cols-1 row-cols-md-2 g-4 p-5">
                        {props.data.map(project => <ProjectCard data={project}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBody