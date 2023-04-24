import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Home.css';
import Prog from './pngegg.png';
import Cooler from './cooler.img.png';
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
// import AnimatedCursor from "react-animated-cursor";
// import { AnimCursor } from "../../AnimCursor";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


export function Home() {
    return (
        <>   
                
   
            <div className="container-fluid row m-0 bgc" id="home">
                <div className="col-lg-6 text-content ps-5">
                    <h4 className="my">Hello Buddy <span className='wave'>👋 </span> </h4>
                    {/* <img src={Cooler} alt="" className="col-1 img1 wave" /> */}
                    <div className=" type fs-2 "> <Typewriter options={{
                        strings: [
                            "I'm Dhanvanthri Ranganathan"
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                    }} />

                    </div>
                    {/* <h3 className="dhan ">Myself <span id="span1">Dhanvanthri Ranganathan</span></h3> */}
                    <h3 className="para">Certified <span className="span"> MERN </span>  Stack Developer</h3>
                    <h3 className="text">"Think Twice Code Once"</h3>

                    <Link to="https://www.linkedin.com/in/dhanvanthri-ranganathan-56a073235/"><FontAwesomeIcon icon={faLinkedinIn} className="link   p-1 m-2" /></Link>
                    <Link to="https://accounts.google.com/v3/signin/identifier?dsh=S822965044%3A1679908683655331&authuser=0&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession"><FontAwesomeIcon icon={faEnvelope} className="link p-1 m-2" /></Link>
                    <Link to="https://github.com/Dhanvanthri25"><FontAwesomeIcon icon={faGithub} className="link m-2 p-1" /></Link>
                    {/* <Link to="https://www.instagram.com/__.dharnesh.__/"><FontAwesomeIcon icon={faInstagram} className="link p-1 m-2" /></Link> */}
                    <FontAwesomeIcon icon={faPhone} className="link m-2 p-1" onClick={()=>{alert("My Mobile No:9360581936");}}/>
                </div>
                
                <div className="col-lg-6">
                    <img src={Prog} alt="" className="img-fluid py-5" />
                </div>
                

            </div>
            
        </>
    );
}



