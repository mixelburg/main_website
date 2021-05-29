import React from 'react';

interface Props {
    text: string
}
const InfoText: React.FC<Props> = (props) => {

    return (
        <div className="h3 main-fade-in" style={{lineHeight: "90%"}}>{props.text}</div>
    );
};

export default InfoText;