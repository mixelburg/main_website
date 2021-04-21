import React, {useEffect, useState} from 'react';
import ProjectCard from "./ProjectCard";

const getProjects = async () => {
    const response = await fetch("https://api.github.com/users/mixelburg/repos")
    return  await response.json()
}

function App() {
    const addr = "https://st2.depositphotos.com/7600296/10994/v/950/depositphotos_109949504-stock-illustration-avatar-girl-icon-business-lady.jpg"

    const [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects().then(data => {
            // @ts-ignore
            data.sort((a, b) => new Date(a["updated_at"]) - new Date(b["updated_at"]))
            setProjects(data.reverse().slice(0, 6))
        })
    }, [])

    return (
        <div>
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
