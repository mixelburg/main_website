import React from "react";
import Avatar from "./../static/Avatar.jpg"

const InfoCard: React.FC = () => {


    return (
        <>
            <div className="card" style={{width: "28rem"}}>

                <img src={Avatar}  className="card-img-top rounded-circle" alt="..."/>


                <div className="card-body">
                    Genius, Billionaire, Playboy, Philanthropist
                </div>
            </div>
        </>
    )

}

export default InfoCard