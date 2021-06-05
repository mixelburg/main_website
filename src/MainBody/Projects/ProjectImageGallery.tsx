import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import './styles.css'
import 'react-awesome-slider/dist/custom-animations/open-animation.css'

interface IProps {
    photos: string[];
    url: string;
}

const ProjectImageGallery: React.FC<IProps> = (props) => {
    const cards = props.photos.map(photo => (
        <div className="d-flex flex-row justify-content-center w-100 h-100" key={photo}>
            <img
                src={props.url + photo}
                style={{height: "100%"}}
                alt="..."
            />
        </div>
    ))
    return (
        <>
            {
                props.photos.length !== 0 &&
                <AwesomeSlider animation="openAnimation" className="mt-5">
                    {cards}
                </AwesomeSlider>
            }
        </>
    );
};

export default ProjectImageGallery;