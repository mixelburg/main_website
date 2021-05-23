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
    const imgSize = windowSize.width > 600 ? "100%" : "100%"
    const size = windowSize.width > 600 ? "70%" : "90%"

    const [curr, setCurr] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCurr(prevState => ((prevState + 1) % 2))
        }, 5000)

    }, [curr])


    return (
        <div className="d-flex flex-column">
            <div className="row  align-self-center mx-2" style={{width: size}}>
                <div className="col-12 col-sm-4">
                    <img style={{width: imgSize, height: imgSize}} className="rounded-circle position-relative main-non-select p-2" src={Avatar}  alt="..."/>
                </div>
                <div className="col-12 col-sm-8 p-3">
                    <div className="d-flex flex-row">
                        <div className="d-flex flex-column">
                            <div className="text-white main-text main-non-select">
                                {
                                    (curr === 0) &&
                                    <div className="">
                                        <div className="h2 m-0 my-text-main" style={{fontSize: secSize}}>My name is</div>
                                        <div className="h1 my-text-secondary" style={{fontSize: mainSize, lineHeight: "60%"}}>Ivan Krokha</div>
                                    </div>
                                }
                                {
                                    (curr === 1) &&
                                    <div className="">
                                        <div className="h2 m-0 my-text-main" style={{fontSize: secSize}}>I am a Full-stack</div>
                                        <div className="h1 my-text-secondary" style={{fontSize: mainSize, lineHeight: "60%"}}>Web Developer</div>
                                    </div>
                                }

                            </div>
                            <ProgressBarSlider key={curr}/>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )

}

export default MainInfo