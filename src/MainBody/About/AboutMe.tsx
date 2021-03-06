import React, {useEffect, useState} from "react";
import AboutMeCard from "./AboutMeCard";
import IAboutMe from "./IAboutMe";
import TextHR from "../../util/TextHR";
import main_config from "../../main_config";
import "./AboutMe.css"
import FadeInSection from "../../util/FadeIn/FadeInSection";

interface IAboutMeInfo {
    experience: [IAboutMe],
    education: [IAboutMe]
}

const getAboutMe = async (): Promise<IAboutMeInfo | null> => {
    const res = await fetch(`${main_config.serverAddr}about`)
    if (!res.ok) return null;

    return await res.json()
}

const AboutMe: React.FC = () => {
    const [about, setAbout] = useState<IAboutMeInfo | null>(null)

    useEffect(() => {
        getAboutMe().then(data => setAbout(data))
    }, [])

    return (
        <div className="d-flex flex-column my-5 mx-5">
            <div className="align-self-center" style={{maxWidth: main_config.maxWidth}}>

                <TextHR text={"About me"}/>

                <div className="row row-cols-1 row-cols-md-2">
                    <FadeInSection>
                        <div className="col">
                            <div className="text-info h1 mb-4">Experience</div>
                            <ul className="list-with-line">
                                {
                                    about ? about.experience.map(elem => <AboutMeCard {...elem} key={elem._id}/>)
                                        : <h3>[!] error loading data from server</h3>
                                }
                            </ul>
                        </div>
                    </FadeInSection>
                    <div className="col">
                        <FadeInSection>
                            <div className="text-info h1 mb-4">Education</div>
                            <ul className="list-with-line">
                                {
                                    about ? about.education.map(elem => <AboutMeCard {...elem} key={elem._id}/>)
                                        : <h3>[!] error loading data from server</h3>
                                }
                            </ul>
                        </FadeInSection>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutMe
