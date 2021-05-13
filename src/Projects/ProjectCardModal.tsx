import React from "react";
import {Modal} from "react-bootstrap";

interface Props {
    data: any;
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