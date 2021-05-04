import React from "react";
import Avatar from "./../static/Avatar.jpg"

const MainInfo: React.FC = () => {


    return (
        <div className="d-flex flex-row justify-content-center">
            <div className="d-flex flex-row bg-info" style={{width: "50%"}}>

                <img style={{width: "30%"}} className="rounded-circle p-2" src={Avatar}  alt="..."/>

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