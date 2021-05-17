import React from "react";
import Avatar from "../static/ava.png"
import useWindowSize from "./useWindowSize";
import "./MainInfo.css"

const MainInfo: React.FC = () => {
    const size = useWindowSize()

    const mainFontSize = size.width*0.032
    const secFontSize = size.width*0.017

    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row  align-self-center " style={{width: "50%"}}>

                <img style={{width: "30%", height: "30%"}} className="rounded-circle position-relative p-2" src={Avatar}  alt="..."/>

                <div>
                    <pre className="text-white main-text" style={{fontSize: mainFontSize}}>
                        My name is Ivan Krokha <br/>
                        aka Mixelburg
                    </pre>
                    <div className="text-white" style={{fontSize: secFontSize}}>
                        Genius, Billionaire, Playboy, Philanthropist
                    </div>
                </div>


            </div>
        </div>
    )

}

export default MainInfo