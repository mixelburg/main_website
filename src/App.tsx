import React, {useEffect, useState} from 'react';
import ProjectCard from "./ProjectCard";
import MainNavBar from "./MainNavBar";

interface Project {
    name: string;
    updated_at: string;
    [key: string]: any;
}

const getProjects = async (): Promise<Project[]> => {
    const response = await fetch("https://api.github.com/users/mixelburg/repos")
    return  await response.json()
}


const App: React.FC = () => {
    const addr = "https://st2.depositphotos.com/7600296/10994/v/950/depositphotos_109949504-stock-illustration-avatar-girl-icon-business-lady.jpg"

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
        <div>

            <MainNavBar/>

            <div className="row">
                <div className="col">
                    <div className="card m-5" style={{width: "28rem"}}>

                        <img src={addr} className="card-img-top rounded-circle" alt="..."/>

                        <div className="card-body">
                            some body
                        </div>
                    </div>
                </div>

                <div className="col">

                    <div className="row row-cols-1 row-cols-md-2 g-4 p-5">
                        {projects.map(project => <ProjectCard data={project}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
