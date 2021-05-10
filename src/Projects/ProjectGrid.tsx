import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectGrid: React.FC = () => {

    const p = {
        title: "Some title",
        short_desc: "short description",

    }

    return (
        <div className="d-flex flex-column bg-danger mt-5">
            <div className="align-self-center" style={{width: "50%"}}>

                <div className="text-white h2">
                    Projects.
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <ProjectCard {...p}/>
                    <ProjectCard {...p}/>
                    <ProjectCard {...p}/>
                    <ProjectCard {...p}/>
                    <ProjectCard {...p}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectGrid