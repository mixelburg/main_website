import React from 'react';

interface Props {
    curr: number;
    mainSize: string;
    secSize: string;
}

const InfoText: React.FC<Props> = (props) => {
    return (
        <div className="text-white main-text zoom-text">
            {(() => {
                switch (props.curr) {
                    case 0:
                        return (
                            <div>
                                <div className="h2 m-0" style={{fontSize: props.secSize}}>My name is</div>
                                <div className="h1" style={{fontSize: props.mainSize, lineHeight: "60%"}}>Ivan Krokha</div>
                            </div>
                        )
                    case 1:
                        return (
                            <div>
                                <div className="h2 m-0" style={{fontSize: props.secSize}}>I am a Full-stack</div>
                                <div className="h1" style={{fontSize: props.mainSize, lineHeight: "60%"}}>Web Developer</div>
                            </div>
                        )
                }
            })()}
        </div>
    );
};

export default InfoText;