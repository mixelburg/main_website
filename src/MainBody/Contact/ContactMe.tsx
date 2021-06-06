import React, {useEffect, useState} from 'react';
import TextHR from "../../util/TextHR";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import ContactMeForm from "./ContactMeForm";
import main_config from "../../main_config";

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

const sendMail = async (fields: any) => {
    const params: any = {
        from_name: fields.name,
        email: fields.email,
        message: fields.message,
        key: process.env.REACT_APP_MAIL_KEY
    }

    const res = await fetch(`${main_config.serverAddr}mail`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })
    return await res.json()
}


const ContactMe: React.FC = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const [fields, setFields] = useState<IFields>(defaultState);
    const [errors, setErrors] = useState<IFields>(defaultState);
    const [isValid, setIsValid] = useState(false);
    const [curr, setCurr] = useState<string>("idle");

    useEffect(() => {
        setErrors(defaultState)

        for (const property in fields) {
            if (fields.hasOwnProperty(property)) {
                if (fields[property] === "") {
                    setErrors(prevState => ({
                        ...prevState,
                        [property]: `cannot be empty`
                    }))
                }
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
            fetch(`${main_config.serverAddr}verify`, {
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
                    sendMail(fields).then(res => {
                        console.log(res)
                        setCurr("loaded")
                    })
                }
                setFields(defaultState)
            });
        })
    }

    return (
        <div className="d-flex flex-column mx-5">
            <div className="align-self-center w-100" style={{maxWidth: main_config.maxWidth}}>
                <TextHR text={"Contact Me"}/>

                <div className="w-75" style={{}}>
                    <ContactMeForm fields={fields} errors={errors} handleChange={handleChange}/>
                    {
                        curr === "loaded"
                            ? <div className="d-flex flex-column text-white mt-3">
                                <div className="align-self-center h2" >The message has been sent<span className="text-info">!</span></div>
                                <div className="align-self-center h1" style={{lineHeight: "90%"}}>Thank you<span className="text-info">!</span></div>
                            </div>
                            : (
                                () => {
                                    switch (curr) {
                                        case "idle":
                                            const css = "btn btn-info rounded-pill m-3 " + (!isValid ? "disabled" : "")
                                            return <input type="button" value="submit"
                                                          className={css}
                                                          style={{width: "120px"}}
                                                          onClick={handleSubmit}/>
                                        case "bot_error":
                                            return <p className="text-danger">[!] message was not sent, captcha not passed</p>
                                        case "loading":
                                            return <button className="btn btn-info rounded-pill m-3" type="button" style={{width: "120px"}} disabled>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"/>
                                                Loading...
                                            </button>
                                    }
                                }
                            )()
                    }
                </div>
            </div>
        </div>
    );
};

export default ContactMe;