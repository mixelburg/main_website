import React from 'react';
import useWindowSize from "../../util/useWindowSize";

interface Props {
    mainText: string;
    secText: string
}
const MainInfoSign: React.FC<Props> = (props) => {
    const windowSize = useWindowSize()
    const secSize = windowSize.width > 600 ? "300%" : "200%"
    const mainSize = windowSize.width > 600 ? "440%" : "280%"
    return (
        <div>
            <div className="h2 m-0 main-zoom-out" style={{fontSize: secSize}}>{props.secText}</div>
            <div className="h1 main-zoom-out" style={{fontSize: mainSize, lineHeight: "60%"}}>{props.mainText}</div>
        </div>
    );
};

export default MainInfoSign;