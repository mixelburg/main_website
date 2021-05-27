import React from "react";
import TextWithDot from "./TextWithDot";
import useWindowSize from "./useWindowSize";

interface Props {
    text: string;
}

const TextHR: React.FC<Props> = (props) => {
    const windowSize = useWindowSize()
    const fontSize = windowSize.width > 600 ? "350%" : "250%"
    return (
        <div className="mb-5">
            <div className="text-white h1 mb-4" style={{fontSize: fontSize}}>
                <TextWithDot data={props.text}/><span className="blink_me">|</span>
            </div>

            <hr style={{width: "30%", color: "#39C0ED", height: "4px", opacity: "70%"}}/>
        </div>
    )
}

export default TextHR