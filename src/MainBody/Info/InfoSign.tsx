import React from 'react';

interface Props {
    mainText: string;
    secText: string
}
const InfoSign: React.FC<Props> = (props) => {
    return (
        <div>
            <div className="display-4 m-0 main-zoom-out">{props.secText}</div>
            <div className="display-1 main-zoom-out" style={{lineHeight: "70%"}}>{props.mainText}</div>
        </div>
    );
};

export default InfoSign;