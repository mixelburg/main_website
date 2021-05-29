import React, {useEffect, useState} from 'react';
import {ArrowUp} from "react-bootstrap-icons";
import "../static/index.css"
import {CSSTransition, TransitionGroup} from "react-transition-group";

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
        <div className="position-fixed bottom-0 end-0 m-4 grow">
            <TransitionGroup>
                {
                    isVisible &&
                    <CSSTransition timeout={100000} classNames="main-item">
                        <div className="text-white" onClick={() => scrollToTop()}>
                            <ArrowUp size={40}/>
                        </div>
                    </CSSTransition>
                }
            </TransitionGroup>
        </div>
    );
};

export default ScrollUp;