import React from "react";
import {Modal} from "react-bootstrap";
import IProject from "./IProject";

interface Props {
    data: IProject;
    isOpen: boolean;
    hideModal: () => void;
    photo_url: string;
}

const ProjectCardModal: React.FC<Props> = (props) => {

    return (
        <Modal show={props.isOpen} onHide={props.hideModal} size="lg" centered>
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title">
                        {props.data.title}
                    </div>
                    {props.data.short_desc}
                </div>
                <div className="modal-body">

                    <div className="d-flex flex-row justify-content-center">

                    <img
                        src={props.photo_url + props.data.showcase_photo}
                        className="card-img-top"
                        style={{width: "70%", height: "70%"}}
                        alt="..."/>

                    </div>
                    <p className="mt-3">
                        {props.data.full_desc}
                    </p>

                </div>

            </div>
        </Modal>
    )
}

export default ProjectCardModal