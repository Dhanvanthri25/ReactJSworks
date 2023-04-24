import React from "react";
import './Contact.css';
import image from './contactpage.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";



export function Contact() {
    return (
        <>
            <div className="background" id="contact">
                <div className="container-fluid">
                    <h3 className="text-center p-5 fir  ">Get In Contact With Me</h3>
                </div>
                <div className="container-fluid m-0 row">
                    <div className="col-lg-2">

                    </div>
                    <div className="col-lg-4">
                        <img src={image} alt="" className="col-12 col-lg-12 p-2" />


                    </div>
                    <div className="col-lg-4">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label form2">Name</label>
                            <input type="text" className="form-control form2" id="" placeholder="Enter Your Name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label form2">Email address</label>
                            <input type="email" className="form-control form2" id="" placeholder="Enter Your Email" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label form2">Location</label>
                            <input type="text" className="form-control form2" id="" placeholder="Enter Your HomeTown" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label form2">Show Your Love</label><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                            <textarea className="form-control form2" id="" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <button className="rounded-3 form2 bg-dark text-white">SUBMIT</button>
                        </div>
                    </div>
                    <div className="col-lg-2 ">



                    </div>






                </div>
            </div>
        </>

    );
}





