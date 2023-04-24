import React from "react";
import './Feedbackthanks.css';
import Heart from './heartimg.jpg';





export function FeedbackThanks(){
    return(
        <>
            <div className="Container-fluid feeds p-5">
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="text-center bg-white  col-lg-4 mx-auto">
                    <div className="row justify-content-center">
                        <div className="col-3">
                            <img src={Heart} alt="" className="col-12"/>
                        </div>
                        <div>
                            <h6>Thank You!</h6>
                        </div>
                        <div>
                            <p>We will use your feedback to improve our customer support performance</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
