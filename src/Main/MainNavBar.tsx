import React from "react";
import {Instagram, Envelope, Whatsapp} from "react-bootstrap-icons";


const openGmail = () => {
    let url = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contact@mixelburg.com&su=question&body=&ui=2&tf=1&pli=1';

    window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
}

const MainNavBar: React.FC = () => {
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
    const svgSize = 70

    return (
        <>
            <div className="d-flex flex-row justify-content-between text-white">

                <pre className="text-white h3">
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

        </>
    )
}
export default MainNavBar
