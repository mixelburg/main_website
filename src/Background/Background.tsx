import React from "react";
import "./stars.scss"

const Background: React.FC = () => {
    const numStars = 20;
    const stars = []
    for (let i = 0; i < numStars; i++) {
        stars.push(<div className="star" key={i}/>)
    }

    return (
        <div className="stars" style={{zIndex: -1}}>
            {stars}
        </div>
    )
}

export default Background
