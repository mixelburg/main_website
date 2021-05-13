import React from "react";
import Avatar from "../static/ava.jpg"

const MainInfo: React.FC = () => {


    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row  align-self-center" style={{width: "50%"}}>

                <img style={{width: "30%", height: "30%"}} className="rounded-circle position-relative p-2" src={Avatar}  alt="..."/>

                <div>
                    <pre className="text-white h3">
                        My name is Ivan Krokha <br/>
                        aka Mixelburg
                    </pre>
                    <div className="text-white h5">
                        Genius, Billionaire, Playboy, Philanthropist
                    </div>
                </div>


            </div>
        </div>
    )

}

export default MainInfo