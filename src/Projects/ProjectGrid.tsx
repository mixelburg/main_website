import React, {useEffect, useState} from "react";
import ProjectCard from "./ProjectCard";
import {Project} from "./IProject";

const getProjects = async (): Promise<Project[]> => {
    const response = await fetch("https://api.github.com/users/mixelburg/repos")
    return  await response.json()
}

const ProjectGrid: React.FC = () => {
    const [projects, setProjects]: [Project[], any] = useState([])

    useEffect(() => {
        getProjects().then(data => {
            data.sort((a, b) => {
                const d1: any = new Date(a["updated_at"])
                const d2: any = new Date(b["updated_at"])
                return d1 - d2;
            })
            setProjects(data.reverse().slice(0, 6))
        })
    }, [])


    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {projects.map(project => <ProjectCard data={project} key={project.id}/>)}
            </div>
        </>
    )
}

export default ProjectGrid