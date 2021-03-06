import React from "react";
import ProjectCardModal from "./ProjectCardModal";
import IProject from "./IProject";
import TextWithDot from "../../util/TextWithDot";
import "./Projects.css"
import main_config from "../../main_config";

const ProjectCard: React.FC<IProject> = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const photo_url = `${main_config.serverAddr}projects/${props._id}/photos/`

    // modal controls
    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="col">
            <article className="card my-card" style={{cursor: "pointer", background: "transparent"}} onClick={showModal}>
                <img
                    src={photo_url + props.showcase_photo}
                    className="card-img-top"
                    id="CardImg"
                    alt="..."
                />
                <div className="card-body text-white p-1">
                    <div className="card-title h1 mb-1" id="CardTitle" style={{lineHeight: "95%"}}>
                        <TextWithDot data={props.title}/>
                    </div>
                    <div className="card-text h4" style={{opacity: "60%"}}>{props.short_desc}</div>
                </div>
            </article>
            <ProjectCardModal data={props} isOpen={isOpen} hideModal={hideModal} photo_url={photo_url}/>
        </div>
    )
}

export default ProjectCard