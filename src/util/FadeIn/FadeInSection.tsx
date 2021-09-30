import React, {useState, useRef, useEffect} from 'react';
import './FadeInSection.css';


const FadeInSection: React.FC = (props) => {
    const domRef: any = useRef();

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observerTarget = domRef.current;

        const observer = new IntersectionObserver(entries => {
            // In your case there's only one element to observe:
            if (entries[0].isIntersecting) {

                // Not possible to set it back to false like this:
                setVisible(true);

                // No need to keep observing:
                observer.unobserve(observerTarget);
            }
        });

        observer.observe(observerTarget);

        return () => observer.unobserve(observerTarget);
    }, []);

    return (
        <section ref={ domRef }
                 className={ `fade-in-section ${ isVisible ? 'is-visible' : '' }` }>

            { props.children }

        </section>
    );
};

export default FadeInSection
