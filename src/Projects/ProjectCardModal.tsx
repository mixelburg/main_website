import React from "react";
import {Modal} from "react-bootstrap";
import IProject from "./IProject";

interface Props {
    data: IProject;
    isOpen: boolean;
    hideModal: () => void;
}

const ProjectCardModal: React.FC<Props> = (props) => {

    return (
        <Modal show={props.isOpen} onHide={props.hideModal} size="lg" centered>

        </Modal>
    )
}

export default ProjectCardModal