import React, {useEffect, useState} from 'react';
import MainNavBar from "./MainNavBar";
import MainBody from "./MainBody";

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

            <MainBody data={projects}/>
        </div>
    );
}

export default App;
