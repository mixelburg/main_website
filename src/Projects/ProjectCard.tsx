import React from "react";
import {Project} from "./IProject";

interface Props {
    data: Project;
}

const openProject = (html_url: string) => {
    window.open(html_url);
}

const ProjectCard: React.FC<Props> = (props) => {
    console.log(props)

    return (
        <div className="col">
            <div className="card stretched-link" role="button" onClick={() => openProject(props.data.html_url)} >
                <div className="card-body">
                    <h5 className="card-title">{props["data"]["name"]}</h5>
                    <p className="card-text">This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard