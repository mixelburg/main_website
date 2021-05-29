import React from 'react';

const MainFooter = () => {
    return (
        <div>
            <div className="d-flex flex-row text-white" style={{height: "200px"}}>
                <div className="d-flex flex-column align-self-end w-100 m-4">
                    <div style={{fontSize: "90%"}}>Website design, animation and code by</div>
                    <div style={{lineHeight: "50%", fontSize: "130%"}}>Mixelburg</div>
                </div>
            </div>
        </div>

    );
};

export default MainFooter;