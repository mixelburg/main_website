import React, {useEffect, useState} from 'react';
import {ArrowUp} from "react-bootstrap-icons";
import "../static/index.css"

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible(window.pageYOffset > 300)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        document.addEventListener("scroll", toggleVisibility)
    })

    return (
        <div className="position-fixed bottom-0 end-0 m-4">
            {isVisible && (
                <div className="text-white" onClick={() => scrollToTop()}>
                    <ArrowUp size={40}/>
                </div>
            )}
        </div>
    );
};

export default ScrollUp;