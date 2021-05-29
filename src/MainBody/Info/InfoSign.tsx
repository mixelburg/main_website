import React from 'react';
import useWindowSize from "../../util/useWindowSize";
import main_config from "../../main_config";

interface Props {
    mainText: string;
    secText: string
}
const InfoSign: React.FC<Props> = (props) => {
    const windowSize = useWindowSize()
    const secSize = windowSize.width > main_config.breakPoint ? "300%" : "200%"
    const mainSize = windowSize.width > main_config.breakPoint ? "440%" : "280%"
    return (
        <div>
            <div className="h2 m-0 main-zoom-out" style={{fontSize: secSize}}>{props.secText}</div>
            <div className="h1 main-zoom-out" style={{fontSize: mainSize, lineHeight: "70%"}}>{props.mainText}</div>
        </div>
    );
};

export default InfoSign;