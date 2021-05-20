import React from "react";
import Avatar from "../static/ava.png"
import useWindowSize from "../util/useWindowSize";
import "./MainInfo.css"

const MainInfo: React.FC = () => {
    const windowSize = useWindowSize()
    const secSize = windowSize.width > 600 ? "300%" : "200%"
    const mainSize = windowSize.width > 600 ? "440%" : "280%"

    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row  align-self-center mx-2">

                <img style={{width: "30%", height: "30%"}} className="rounded-circle position-relative p-2" src={Avatar}  alt="..."/>

                <div className="text-white main-text">
                    <div className="h2 m-0" style={{fontSize: secSize}}>My name is</div>
                    <div className="h1" style={{fontSize: mainSize, lineHeight: "60%"}}>Ivan Krokha</div>
                </div>


            </div>
        </div>
    )

}

export default MainInfo