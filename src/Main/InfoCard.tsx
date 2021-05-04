import React from "react";
import Avatar from "./../static/Avatar.jpg"

const InfoCard: React.FC = () => {


    return (
        <div className="card" style={{width: ""}}>

            <div className="d-flex flex-row">
                <img style={{width: "30%"}} className="rounded-circle" src={Avatar}  alt="..."/>
                <div>some text</div>
            </div>

            <div className="card-body">
                Genius, Billionaire, Playboy, Philanthropist
            </div>
        </div>
    )

}

export default InfoCard