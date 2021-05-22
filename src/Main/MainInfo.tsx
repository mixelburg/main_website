import React, {useEffect, useState} from "react";
import Avatar from "../static/ava.png"
import useWindowSize from "../util/useWindowSize";
import ProgressBarSlider from "./ProgressBarSlider";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./MainInfo.css"
import "../static/index.css"

const MainInfo: React.FC = () => {
    const windowSize = useWindowSize()
    const secSize = windowSize.width > 600 ? "300%" : "200%"
    const mainSize = windowSize.width > 600 ? "440%" : "280%"
    const size = windowSize.width > 600 ? "70%" : "90%"

    const [curr, setCurr] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCurr(prevState => ((curr + 1) % 2))
        }, 5000)
    }, [curr])


    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row  align-self-center mx-2" style={{width: size}}>
                <img style={{width: "30%", height: "30%"}} className="rounded-circle position-relative p-2" src={Avatar}  alt="..."/>

                <div className="d-flex flex-column">
                    <div className="text-white main-text">

                        {(() => {
                            switch (curr) {
                                case 0:
                                    return (
                                        <div>
                                            <div className="h2 m-0" style={{fontSize: secSize}}>My name is</div>
                                            <div className="h1" style={{fontSize: mainSize, lineHeight: "60%"}}>Ivan Krokha</div>
                                        </div>
                                    )
                                case 1:
                                    return (
                                        <div>
                                            <div className="h2 m-0" style={{fontSize: secSize}}>I am a Full-stack</div>
                                            <div className="h1" style={{fontSize: mainSize, lineHeight: "60%"}}>Web Developer</div>
                                        </div>
                                    )
                            }
                        })()}
                    </div>
                    <ProgressBarSlider key={curr}/>
                </div>

            </div>

        </div>
    )

}

export default MainInfo