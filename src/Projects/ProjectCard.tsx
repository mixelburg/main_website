import React from "react";
import ProjectCardModal from "./ProjectCardModal";
import IProject from "./IProject";


const ProjectCard: React.FC<IProject> = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    // modal controls
    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="col">
            <article className="card" style={{cursor: "pointer"}} onClick={showModal}>
                <img src="https://gauracs.me/wp-content/uploads/2020/08/pc-4.png" className="card-img-top" alt="..."/>
                    <div className="card-body p-1">
                        <div className="card-title h4 mb-1">{props.title}</div>
                        <div className="card-text h5">{props.short_desc}</div>
                    </div>
            </article>
            <ProjectCardModal data={props} isOpen={isOpen} hideModal={hideModal}/>
        </div>
    )
}

export default ProjectCard