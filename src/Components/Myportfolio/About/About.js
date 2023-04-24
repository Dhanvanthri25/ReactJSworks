import React from "react";
import './About.css';
import mypic from './mypic.img.png';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";



export function About() {
    return (
        <>
        
            <div className="container-fluid m-0 row bgcm " id="about">
                <div className=" col-lg-7 col-12 ">
                    <h1 className="abt">ABOUT ME</h1>
                    <p className="tec">I'm a self-taught Full Stack developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.</p>
                    <h1 className="abt">EDUCATION</h1>
                    <div  className="col-lg-12 row">
                    <div className="col-lg-6">
                        <h3 className="head"> B-Sc ECS</h3>
                        <p className="tec">KG College Of Arts And Science, <br />Coimbatore<br />2019-2022</p>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="head"> Full Stack Development</h3>
                        <p className="tec">KG Microcollege, <br />Coimbatore<br />2023(January-April)</p>
                    </div>
                    </div>
                    <div className="col-lg-12 row">
                    <div className="col-lg-6">
                        <h3 className="head"> HSC</h3>
                        <p className="tec">Kamarajar Matriculation <br />Higher Secondary School<br />2016-2017</p>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="head">SSLC</h3>
                        <p className="tec">Kamarajar Matriculation <br />Higher Secondary School<br />2018-2019</p>
                    </div>
                    </div>
                   
                </div>
                <div className="col-lg-5 col-12"><img src={mypic} alt="" className="col-lg-6 offset-lg-4 col-10 offset-1 imge" />
                    <div className="my-4 cont ms-3">
                      <div className="d-flex">  <p className="mail"> <FontAwesomeIcon icon={faEnvelope} className="email text-"/></p> &nbsp; &nbsp;<p>dhanvanthriranganathan@gmail.com</p></div>
                        <h6 className=""> <FontAwesomeIcon icon={faWhatsapp} className="wapp" />&nbsp; &nbsp; 8111074006</h6>
                    </div>




                </div>


            </div>
            
        </>

    );
}
