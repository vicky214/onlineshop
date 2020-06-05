import React from 'react'

export default function footer() {
    return (
        <div className="container-fluid mt-1" style={{backgroundColor:"black",color:"white"}}>
            <div className="row">
                <div className="col-md-3 footercss">
                    <h4>Address</h4>
                    <p><span>Faridabad, Haryana</span></p>
                    <p><span>India, 121005</span></p>
                </div>
                <div className="col-md-3 footercss">
                    <h6>Mail Us: vicky214kumar@gmail.com</h6>
                    <h6>Contact Us: +91-8826055628</h6>
                </div>
                <div className="col-md-3 footercss">
                    <h5>Created By: Vicky Kumar</h5>
                    <h6>Github Link : </h6>
                </div>
            </div>
            
        </div>
    )
}
