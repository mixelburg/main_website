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
    return (
        <form>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <label className="form-label text-info">name</label>
                    <input name="name" type="text" className="form-control"
                           value={props.fields.name}
                           onChange={props.handleChange}
                    />
                    <div className="form-text text-danger">{props.errors.name}</div>
                </div>
                <div className="col">
                    <label className="form-label text-info">email</label>
                    <input name="email" type="email" className="form-control"
                           value={props.fields.email}
                           onChange={props.handleChange}
                    />
                    <div className="form-text text-danger">{props.errors.email}</div>
                </div>
                <div className="col w-100">
                    <label className="form-label text-info">message</label>
                    <textarea name="message" className="form-control" rows={4} cols={50}
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