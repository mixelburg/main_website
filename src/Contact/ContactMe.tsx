import React, {useEffect, useState} from 'react';
import TextHR from "../util/TextHR";
import useWindowSize from "../util/useWindowSize";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import ContactMeForm from "./ContactMeForm";

const defaultState = {
    name: "",
    email: "",
    message: ""
}

interface IFields {
    name: string;
    email: string;
    message: string;
    [key: string]: string;
}

const ContactMe: React.FC = () => {
    const windowSize = useWindowSize()
    const size = windowSize.width > 600 ? "50%" : "90%"
    const mainSize = windowSize.width > 600 ? "400%" : "200%"
    const secSize = windowSize.width > 600 ? "230%" : "110%"

    const { executeRecaptcha } = useGoogleReCaptcha();

    const [fields, setFields] = useState<IFields>(defaultState);
    const [errors, setErrors] = useState<IFields>(defaultState);
    const [isValid, setIsValid] = useState(false);
    const [curr, setCurr] = useState<string>("idle");

    useEffect(() => {
        setErrors(defaultState)

        for (const property in fields) {
            if (fields[property] === "") {
                setErrors(prevState => ({
                    ...prevState,
                    [property]: `cannot be empty`
                }))
            }
        }
    }, [fields])

    useEffect(() => {
        setIsValid(JSON.stringify(errors) === JSON.stringify(defaultState))
    }, [errors])

    const handleChange = (e: any) => {
        setCurr("idle")
        const { name, value } = e.target;
        setFields(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        setCurr("loading")

        executeRecaptcha?.("contact_me").then(token => {
            fetch('https://mixelburg.com:5000/verify', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "g-recaptcha-response": token
                })
            }).then(res => res.json()).then(res => {
                if (res.score < 0.8)
                    setCurr("bot_error")
                else {

                    setCurr("loaded")
                }
                setFields(defaultState)
            });
        })
    }

    return (
        <div className="d-flex flex-column">
            <div className="align-self-center" style={{width: size}}>
                <TextHR text={"Contact Me"}/>

                <div className="w-75">
                    <ContactMeForm fields={fields} errors={errors} handleChange={handleChange}/>

                    {
                        curr === "loaded"
                            ? <div className="d-flex flex-column text-white mt-3">
                                <div className="align-self-center" style={{fontSize: secSize}}>The message has been sent<span className="text-info">!</span></div>
                                <div className="align-self-center" style={{fontSize: mainSize, lineHeight: "90%"}}>Thank you<span className="text-info">!</span></div>
                            </div>
                            : (
                                isValid &&
                                (() => {
                                    switch (curr) {
                                        case "idle":
                                            return <input type="button" value="submit          " className="btn btn-primary m-3" onClick={handleSubmit}/>
                                        case "bot_error":
                                            return <p className="text-danger">[!] message was not sent, captcha not passed</p>
                                        case "loading":
                                            return <button className="btn btn-primary m-3" type="button" disabled>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"/>
                                                Loading...
                                            </button>
                                    }
                                })()
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default ContactMe;