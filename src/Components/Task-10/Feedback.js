import React from "react";
import './Feedback.css';
import sad from './sad.img.png';
import none from './none.img.png';
import happy from './happy.img.png';
import { Link } from "react-router-dom";


export function Feedback(){
    return(
        <>
            <div className="Container-fluid feed p-5">
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="text-center bg-white  col-lg-4 mx-auto">
                    <p>How satisfied are you with our <br /> customer support performance </p>
                    <div className="row col-12 justify-content-center">
                        <div className="col-3">
                            <Link to ='/FeedbackThanks'><img src={sad} alt="" className="col-12" /></Link>
                            <h6>Sad</h6>
                        </div>
                        <div className="col-3">
                        <Link to ='/FeedbackThanks'><img src={none} alt=""  className="col-12" /></Link>
                            <h6>None</h6>
                        </div>
                        <div className="col-3">
                        <Link to ='/FeedbackThanks'><img src={happy} alt=""  className="col-12" /></Link>
                            <h6>Happy</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
