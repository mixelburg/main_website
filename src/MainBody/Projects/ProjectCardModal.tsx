import React from "react";
import {Modal} from "react-bootstrap";
import IProject from "./IProject";
import ProjectImageGallery from "./ProjectImageGallery";
import {Github} from "react-bootstrap-icons";

interface Props {
    data: IProject;
    isOpen: boolean;
    hideModal: () => void;
    photo_url: string;
}

const linkSettings = {
    target: "_blank",
    rel: "noreferrer",
    className: "link text-dark"
}

const ProjectCardModal: React.FC<Props> = (props) => {

    return (
        <Modal show={props.isOpen} onHide={props.hideModal} size="lg" centered>
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title">
                        <div className="h4">{props.data.title}</div>
                        <div>{props.data.short_desc}</div>
                    </div>
                    <button
                        type="button"
                        className="btn-close position-absolute top-0 end-0 m-1"
                        onClick={props.hideModal}
                    />
                </div>
                <div className="modal-body">
                    <div className="d-flex flex-row justify-content-center">
                    <img
                        src={props.photo_url + props.data.main_photo}
                        className="card-img-top img-shadow"
                        style={{width: "70%", height: "70%"}}
                        alt="..."/>
                    </div>

                    <div className="d-flex flex-row mt-4">
                        <div className="d-flex flex-column justify-content-center me-2">
                            <div className="fs-3">link: </div>
                        </div>
                        <a href={props.data.github_link} {...linkSettings}>
                            <Github size={50}/>
                        </a>
                    </div>

                    <p className="mt-3">
                        {props.data.full_desc}
                    </p>

                    <ProjectImageGallery photos={props.data.desc_photos} url={props.photo_url}/>
                    <div style={{height: "50px"}}/>

                </div>

            </div>
        </Modal>
    )
}

export default ProjectCardModal