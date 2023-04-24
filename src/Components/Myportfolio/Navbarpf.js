import React from "react";
import { Link } from 'react-router-dom';
import './Navbarpf.css';
import dimage from './dimg.png';
import { Link as LinkScroll } from 'react-scroll';


export function Navbarpf() {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <img src={dimage} alt="" className="logo-img" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <LinkScroll to='home' className="nav-link clr ">Home</LinkScroll>
                        <LinkScroll to='about' className="nav-link clr">About</LinkScroll>
                        <LinkScroll to='skills' className="nav-link clr">Skills</LinkScroll>
                        <LinkScroll to='work' className="nav-link clr">Project</LinkScroll>
                        <LinkScroll to='certificate' className="nav-link clr">Certificates</LinkScroll>
                        <LinkScroll to='contact' className="nav-link clr">Contact</LinkScroll>

                        <Link to='/Helloworld' className="nav-link clr">Work</Link>
                    </div>
                </div><button className="resume "><Link to="https://drive.google.com/file/d/1LUsuycWjCVt8J4MWlC9ZYTdsJbUqUtkL/view?usp=sharing">Resume</Link></button>
            </nav>
        </>
    );
}