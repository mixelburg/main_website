import React from "react";

interface Props {
    text: string;
}

const TextHR: React.FC<Props> = (props) => {
    return (
        <div className="mb-5">
            <div className="text-white h1 mb-4">
                {props.text}<span className="text-info">.</span><span className="blink_me">|</span>
            </div>

            <hr style={{width: "30%", color: "#39C0ED", height: "4px", opacity: "70%"}}/>
        </div>
    )
}

export default TextHR