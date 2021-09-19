import React, {useState} from 'react';
import TextHR from "../../util/TextHR";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import ContactMeForm from "./ContactMeForm";
import main_config from "../../main_config";
import useInputChecker, {checkDataType} from "../../util/useInputChecker";

interface IState {
    name: string;
    email: string;
    message: string;
    [key: string]: string;
}

const defaultState: IState = {
    name: "",
    email: "",
    message: ""
}

const checkData: checkDataType<IState> = (value) => {
    return {
        name: value.name === "" ? "cannot be empty" : "",
        email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value.email) ? "" : "Invalid Email",
        message: value.message === "" ? "cannot be empty" : ""
    }
}

const sendMail = async (fields: any) => {
    console.log("sending mail")

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

type currType = "idle" | "loading" | "bot_error" | "loaded"

const ContactMe: React.FC = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const [curr, setCurr] = useState<currType>("idle");

    const { handleChange, userData, userDataErrors, touched, clearData, resetTouched }
        = useInputChecker(defaultState, checkData)


    const handleChangeWrapper = (e: any) => {
        setCurr("idle")
        handleChange(e)
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
                console.log(`captcha score: ${res.score}`)
                if (res.score < 0.8){
                    setCurr("bot_error")
                }
                else {
                    sendMail(userData).then(res => {
                        console.log(res)
                        setCurr("loaded")
                    })
                }
                clearData()
                resetTouched()
            });
        })
    }

    return (
        <div className="d-flex flex-column mx-5">
            <div className="align-self-center w-100" style={{maxWidth: main_config.maxWidth}}>
                <TextHR text={"Contact Me"}/>

                <div className="w-75" style={{}}>
                    <ContactMeForm fields={userData} errors={userDataErrors} handleChange={handleChangeWrapper}/>
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
                                            const css = "btn btn-info rounded-pill "
                                                + (JSON.stringify(userDataErrors) !== JSON.stringify(defaultState)
                                                || !touched ? "disabled" : "")

                                            return <input type="button" value="submit"
                                                          className={css}
                                                          style={{width: "120px"}}
                                                          onClick={handleSubmit}/>
                                        case "bot_error":
                                            return <p className="text-danger">[!] message was not sent, captcha not passed</p>
                                        case "loading":
                                            return <button className="btn btn-info rounded-pill" type="button" style={{width: "120px"}} disabled>
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
