import React from "react";
import {Instagram, Envelope, Whatsapp} from "react-bootstrap-icons";
import useWindowSize from "../util/useWindowSize";

const openGmail = () => {
    let url = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contact@mixelburg.com&su=question&body=&ui=2&tf=1&pli=1';

    window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
}
const logo =
    `             _          _ _                     
            (_)        | | |                    
   _ __ ___  ___  _____| | |__  _   _ _ __ __ _ 
  | '_ \` _ \\| \\ \\/ / _ \\ | '_ \\| | | | '__/ _\` |
  | | | | | | |>  <  __/ | |_) | |_| | | | (_| |
  |_| |_| |_|_/_/\\_\\___|_|_.__/ \\__,_|_|  \\__, |
                                           __/ |
                                          |___/`


const linkSettings = {
    target: "_blank",
    rel: "noreferrer",
    className: "link text-white align-self-center me-3"
}

const MainNavBar: React.FC = () => {
    const windowSize = useWindowSize()
    const svgSize = windowSize.width > 600 ? windowSize.width * 0.03 : windowSize.width * 0.08
    const logoSize = windowSize.width > 600 ? windowSize.width * 0.01 : windowSize.width * 0.02

    return (
        <>
            <div className="d-flex flex-row flex-wrap justify-content-between text-white">

                <pre className="main-non-select" style={{fontSize: logoSize}}>
                    {logo}
                </pre>
                <div className="d-flex flex-row">
                    <Envelope size={svgSize} className="align-self-center me-3" onClick={openGmail}/>
                    <a href="https://www.instagram.com/an0nym0us_rac00n/"  {...linkSettings}>
                        <Instagram size={svgSize} />
                    </a>
                    <a href="https://wa.me/972559365878?text=Hi" {...linkSettings}>
                        <Whatsapp size={svgSize} />
                    </a>
                </div>
            </div>

            <hr className="text-white my-0" style={{height: "5px"}}/>
        </>
    )
}
export default MainNavBar
