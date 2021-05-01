import React from "react";

interface PropsData {
    name: string;
    [key: string]: any;
}

interface Props {
    data: PropsData;
}

const ProjectCard: React.FC<Props> = (props) => {
    return (
        <div className="col">
            <div className="card">
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