import React from "react";

const addr = "https://st2.depositphotos.com/7600296/10994/v/950/depositphotos_109949504-stock-illustration-avatar-girl-icon-business-lady.jpg"

const InfoCard: React.FC = () => {


    return (
        <>
            <div className="card m-6" style={{width: "28rem"}}>

                <img src={addr} className="card-img-top rounded-circle" alt="..."/>

                <div className="card-body">
                    some body
                </div>
            </div>
        </>
    )

}

export default InfoCard