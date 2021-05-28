import React from 'react';

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

    const nameClass = `form-control ${props.errors.name === "" ? "is-valid" : "is-invalid"}`
    const emailClass =`form-control ${props.errors.email === "" ? "is-valid" : "is-invalid"}`
    const msgClass = `form-control ${props.errors.message === "" ? "is-valid" : "is-invalid"}`

    return (
        <form>
            <div className="row gx-5 gy-2">
                <div className="col-12 col-md-6" style={{height: "6rem"}}>
                    <label className="form-label text-info">name</label>
                    <input name="name" type="text"
                           className={nameClass}
                           value={props.fields.name}
                           onChange={props.handleChange}
                    />
                    <div className="form-text text-danger">{props.errors.name}</div>
                </div>
                <div className="col-12 col-md-6" style={{height: "6rem"}}>
                    <label className="form-label text-info">email</label>
                    <input name="email" type="email"
                           className={emailClass}
                           value={props.fields.email}
                           onChange={props.handleChange}
                    />
                    <div className="form-text text-danger">{props.errors.email}</div>
                </div>
                <div className="col-12">
                    <label className="form-label text-info">message</label>
                    <textarea name="message"
                              className={msgClass}
                              rows={4} cols={50}
                              value={props.fields.message}
                              onChange={props.handleChange}
                    />
                    <div className="form-text text-danger">{props.errors.message}</div>
                </div>
            </div>
            <div className="form-text h6 text-secondary" style={{fontSize: "70%"}}>
                This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                <a href="https://policies.google.com/terms">Terms of Service</a> apply.
            </div>
        </form>
    );
};

export default ContactMeForm;