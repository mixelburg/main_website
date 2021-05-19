import React, {useEffect, useState} from "react";
import AboutMeCard from "./AboutMeCard";
import IAboutMe from "./IAboutMe";

interface IAboutMeInfo {
    experience: [IAboutMe],
    education: [IAboutMe]
}

const getAboutMe = async (): Promise<IAboutMeInfo | null> => {
    const res = await fetch("https://mixelburg.com:5000/about")
    if (!res.ok) return null;

    return await res.json()
}


const AboutMe: React.FC = () => {

    const [about, setAbout] = useState<IAboutMeInfo | null>(null)

    useEffect(() => {
        getAboutMe().then(data => setAbout(data))
    }, [])

    return (
        <div className="d-flex flex-column my-5">
            <div className="align-self-center" style={{width: "50%"}}>
                <div className="text-white h2">
                    About me<span className="text-info">.</span><span className="blink_me">|</span>
                </div>

                <hr style={{width: "30%", color: "lightblue", height: "4px"}}/>

                <div className="row row-cols-md-2">
                    <div>
                        <div className="text-white h2 mb-4">Experience</div>
                        {
                            about ? about.experience.map(elem => <AboutMeCard {...elem}/>)
                                : <h3>[!] error loading data from server</h3>
                        }
                    </div>
                    <div>
                        <div className="text-white h2 mb-4">Education</div>
                        {
                            about ? about.education.map(elem => <AboutMeCard {...elem}/>)
                                : <h3>[!] error loading data from server</h3>
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutMe