import React from 'react';
import "./ContactMe.css"

interface Props {
    fields: {
        name: string;
        email: string;
        message: string;
    }
    errors: {
        name: string;
        email: string;
        message: string;
    }
    handleChange: (e: any) => void
}

const ContactMeForm: React.FC<Props> = (props) => {

    return (
        <div>
            <form>
                <div className="row gx-5 gy-2">
                    <div className="col-12 col-md-6" style={{height: "6rem"}}>
                        <div className="field text-info">
                            <input className="bg-transparent text-white" type="text"
                                   name="name" id="fullname"
                                   placeholder="Iron Man"
                                   value={props.fields.name}
                                   onChange={props.handleChange}
                            />
                            <label className="mb-1" htmlFor="fullname">Name</label>
                        </div>
                        <div className="form-text text-danger">{props.errors.name}</div>
                    </div>
                    <div className="col-12 col-md-6" style={{height: "6rem"}}>
                        <div className="field text-info">
                            <input className="bg-transparent text-white" type="email"
                                   name="email" id="email"
                                   placeholder="irom.man@example.com"
                                   value={props.fields.email}
                                   onChange={props.handleChange}
                            />
                            <label className="mb-1" htmlFor="email">Email</label>
                        </div>
                        <div className="form-text text-danger">{props.errors.email}</div>
                    </div>
                    <div className="col-12" style={{height: "8rem"}}>
                        <div className="field text-info">
                            <textarea name="message" id="message"
                                      style={{resize: "none"}}
                                      className="bg-transparent text-white"
                                      rows={3}
                                      value={props.fields.message}
                                      onChange={props.handleChange}
                            />
                            <label className="mb-1" htmlFor="message">Message</label>
                        </div>
                        <div className="form-text text-danger">{props.errors.message}</div>
                    </div>
                </div>
                <div className="form-text h6 text-secondary" style={{fontSize: "70%"}}>
                    This site is protected by reCAPTCHA and the Google
                    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                    <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                </div>
            </form>

        </div>

    );
};

export default ContactMeForm;