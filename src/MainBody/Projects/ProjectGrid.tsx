import React, {useEffect, useState} from "react";
import ProjectCard from "./ProjectCard";
import IProject from "./IProject"
import "../../static/index.css"
import useWindowSize from "../../util/useWindowSize";
import TextHR from "../../util/TextHR";
import main_config from "../../main_config";

const getProjects = async (): Promise<IProject[] | null> => {
    const res = await fetch(`${main_config.serverAddr}projects`)
    if (!res.ok) return null;

    return await res.json()
}

const ProjectGrid: React.FC = () => {
    const [projects, setProjects] = useState<IProject[] | null>(null)
    const windowSize = useWindowSize()
    const size = windowSize.width > main_config.breakPoint ? "50%" : "90%"

    useEffect(() => {
        getProjects().then(data => setProjects(data))
    }, [])

    return (
        <div className="d-flex flex-column mt-3">
            <div className="align-self-center" style={{width: size}}>

                <TextHR text={"Projects"}/>

                <div className="row row-cols-1 row-cols-sm-2 g-4">
                    {
                        projects ? projects.map(project => <ProjectCard {...project} key={project._id}/>)
                            : <h3>[!] error loading data from server</h3>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectGrid