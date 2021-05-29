import React from "react";
import TextWithDot from "./TextWithDot";

interface Props {
    text: string;
}

const TextHR: React.FC<Props> = (props) => {
    return (
        <div className="mb-5">
            <div className="text-white display-2" style={{}}>
                <TextWithDot data={props.text}/><span className="blink_me">|</span>
            </div>

            <hr className="mt-3"
                style={{width: "30%", color: "#39C0ED", height: "4px", opacity: "70%"}}
            />
        </div>
    )
}

export default TextHR