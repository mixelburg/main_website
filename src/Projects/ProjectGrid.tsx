import React, {useEffect, useState} from "react";
import ProjectCard from "./ProjectCard";
import IProject from "./IProject"

const getProjects = async (): Promise<IProject[] | null> => {
    const res = await fetch("http://mixelburg.com:5000/projects")
    console.log(res.status)
    if (!res.ok) return null;

    return await res.json()
}

const ProjectGrid: React.FC = () => {

    const [projects, setProjects] = useState<IProject[] | null>(null)


    useEffect(() => {
        getProjects().then(data => setProjects(data))
    }, [])


    return (
        <div className="d-flex flex-column bg-danger mt-5">
            <div className="align-self-center" style={{width: "50%"}}>

                <div className="text-white h2">
                    Projects.
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
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