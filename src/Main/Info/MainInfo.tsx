import React, {useEffect, useState} from "react";
import Avatar from "../../static/ava.png"
import useWindowSize from "../../util/useWindowSize";
import ProgressBarSlider from "./ProgressBarSlider";
import MainInfoSign from "./MainInfoSign";
import "./MainInfo.css"
import "../../static/index.css"
import MainInfoText from "./MainInfoText";


const info = [
    {
        mainText:"Ivan Krokha",
        secText: "My name is",
        subText: `I am a full-stack web developer and system administrator who loves coffee.`
    },
    {
        mainText: "Web Developer",
        secText: "I am a Full-stack",
        subText: `My main areas of expertise include Typescript, Node.js, React, HTML, CSS and Python.`
    },
    {
        mainText: "System Administrator",
        secText: "I am also a",
        subText: `My main areas of expertise include Linux, FreeBSD, Windows, Networking`
    }
]


const MainInfo: React.FC = () => {
    const windowSize = useWindowSize()
    const size = windowSize.width > 900 ? "70%" : "90%"

    const [curr, setCurr] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCurr(prevState => ((prevState + 1) % 3))
        }, 7000)

    }, [curr])

    const {mainText, secText, subText} = info[curr]

    return (
        <div className="d-flex flex-column">
            <div className="row align-self-center mx-2" style={{width: size}}>
                <div className="col-12 col-sm-4">
                    <img className="rounded-circle position-relative main-non-select w-100 p-2" src={Avatar}  alt="..."/>
                </div>
                <div className="col-12 col-sm-8 p-3 ">
                    <div className="d-flex flex-column">
                        <div className="text-white main-text main-non-select">
                            <MainInfoSign
                                mainText={mainText} secText={secText} key={curr}
                            />
                        </div>
                        <ProgressBarSlider key={curr}/>
                        <div className="text-white main-text mt-3">
                            <MainInfoText text={subText} key={curr}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MainInfo