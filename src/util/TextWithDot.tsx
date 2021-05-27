import React from 'react';

interface Props {
    data: string;
}
const TextWithDot: React.FC<Props> = (props) => {
    return (
        <>
            {props.data}<span className="text-info">.</span>
        </>
    );
};

export default TextWithDot;