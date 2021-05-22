import React, {useEffect, useState} from 'react';
import TextHR from "../util/TextHR";
import useWindowSize from "../util/useWindowSize";

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

const ContactMe = () => {
    const windowSize = useWindowSize()
    const size = windowSize.width > 600 ? "50%" : "90%"

    const [fields, setFields] = useState<IFields>(defaultState);
    const [errors, setErrors] = useState<IFields>(defaultState);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFields(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

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

    const handleSubmit = () => {

    }

    return (
        <div className="d-flex flex-column">
            <div className="align-self-center" style={{width: size}}>
                <TextHR text={"Contact Me"}/>
                <form style={{width: "75%"}}>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <label className="form-label text-info">name</label>
                            <input name="name" type="text" className="form-control"
                                   value={fields.name}
                                   onChange={handleChange}
                            />
                            <div className="form-text text-danger">{errors.name}</div>
                        </div>
                        <div className="col">
                            <label className="form-label text-info">email</label>
                            <input name="email" type="email" className="form-control"
                                   value={fields.email}
                                   onChange={handleChange}
                            />
                            <div className="form-text text-danger">{errors.email}</div>
                        </div>
                        <div className="col w-100">
                            <label className="form-label text-info">message</label>
                            <textarea name="message" className="form-control" rows={4} cols={50}
                                   value={fields.message}
                                   onChange={handleChange}
                            />
                            <div className="form-text text-danger">{errors.message}</div>
                        </div>
                    </div>
                    <input type="button" value="Submit" className="btn btn-primary m-3" onClick={handleSubmit}/>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;