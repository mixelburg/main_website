import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

// simple styling library
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
    <GoogleReCaptchaProvider
        reCaptchaKey="6LcIBuQaAAAAACKMYsjyLtokAKk_Fao81v5Xi4HY"
    >
        <App/>
    </GoogleReCaptchaProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
