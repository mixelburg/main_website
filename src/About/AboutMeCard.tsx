import React from "react";
import IAboutMe from "./IAboutMe";

const AboutMeCard: React.FC<IAboutMe> = (props) => {
    return (
        <li className="ms-3" style={{width: "80%"}}>
            <div className="text-white h3 mb-0">{props.header}</div>
            <div className="text-white h5" style={{opacity: "50%"}}>
                {props.sub_header}
            </div>
            <div className="text-white ">{props.text}</div>
        </li>
    )
}

export default AboutMeCard