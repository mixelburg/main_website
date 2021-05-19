import React, {useEffect, useState} from "react";
import ProjectCard from "./ProjectCard";
import IProject from "./IProject"
import "../static/index.css"

const getProjects = async (): Promise<IProject[] | null> => {
    const res = await fetch("https://mixelburg.com:5000/projects")
    if (!res.ok) return null;

    return await res.json()
}

const ProjectGrid: React.FC = () => {

    const [projects, setProjects] = useState<IProject[] | null>(null)


    useEffect(() => {
        getProjects().then(data => setProjects(data))
    }, [])


    return (
        <div className="d-flex flex-column mt-3">
            <div className="align-self-center" style={{width: "50%"}}>

                <div className="text-white h2">
                    Projects<span className="text-info">.</span><span className="blink_me">|</span>
                </div>

                <hr style={{width: "30%", color: "lightblue", height: "4px"}}/>

                <div className="row row-cols-md-2 g-4">
                    {
                        projects ? projects.map(project => <ProjectCard {...project} key={project._id}/>)
                            : <h3>[!] error loading data from server</h3>
                    }
                    {
                        projects ? projects.map(project => <ProjectCard {...project} key={project._id}/>)
                            : <h3>[!] error loading data from server</h3>
                    }
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