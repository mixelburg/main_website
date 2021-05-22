import React, {useEffect, useState} from "react";
import Avatar from "../static/ava.png"
import useWindowSize from "../util/useWindowSize";
import ProgressBarSlider from "./ProgressBarSlider";
import "./MainInfo.css"
import "../static/index.css"

const MainInfo: React.FC = () => {
    const windowSize = useWindowSize()
    const secSize = windowSize.width > 600 ? "300%" : "200%"
    const mainSize = windowSize.width > 600 ? "440%" : "280%"
    const size = windowSize.width > 600 ? "70%" : "90%"

    const [curr, setCurr] = useState(0)
    const [slider, setSlider] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            setCurr(prevState => ((curr + 1) % 10))
        }, 1000)
        if (curr % 5 === 0) {
            setSlider(prevState => prevState * -1)
        }
    }, [curr])


    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row  align-self-center mx-2" style={{width: size}}>
                <img style={{width: "30%", height: "30%"}} className="rounded-circle position-relative p-2" src={Avatar}  alt="..."/>

                <div className="d-flex flex-column">
                    <div className="text-white main-text">
                        {
                            (curr >=0 && curr<=4) &&
                            <div className="my-text-main">
                                <div className="h2 m-0" style={{fontSize: secSize}}>My name is</div>
                                <div className="h1" style={{fontSize: mainSize, lineHeight: "60%"}}>Ivan Krokha</div>
                            </div>
                        }
                        {
                            (curr >=5 && curr<=9) &&
                            <div className="my-text-main">
                                <div className="h2 m-0" style={{fontSize: secSize}}>I am a Full-stack</div>
                                <div className="h1" style={{fontSize: mainSize, lineHeight: "60%"}}>Web Developer</div>
                            </div>
                        }

                    </div>
                    <ProgressBarSlider key={slider}/>
                </div>

            </div>

        </div>
    )

}

export default MainInfo