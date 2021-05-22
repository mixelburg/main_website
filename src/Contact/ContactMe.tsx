import React from 'react';
import TextHR from "../util/TextHR";
import useWindowSize from "../util/useWindowSize";

const ContactMe = () => {
    const windowSize = useWindowSize()
    const size = windowSize.width > 600 ? "50%" : "90%"


    return (
        <div className="d-flex flex-column">
            <div className="align-self-center" style={{width: size}}>

                <TextHR text={"Contact Me"}/>
            </div>
        </div>
    );
};

export default ContactMe;