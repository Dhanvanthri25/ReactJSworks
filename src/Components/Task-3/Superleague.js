import React from "react";
import csk from './cskimg.jpg'
import rcb from './rcbimg.jpg'
import './Superleague.css'


export function Superleague(){
        return(
            <>
                <div className="Super">
                    <div className="Container-fluid col-lg-12 p-5"></div>
                    <div className="col-lg-12 justify-content-center">
                        <h1 className="text-center txt">Super Over League</h1>
                    </div>
                    <div className="text-center p-4">
                        <img src={rcb} alt="" className="col-lg-2 col-sm-10 col-10"/>
                        <img src={csk} alt="" className="col-lg-2 col-sm-10 col-10"/>
                    </div>
                    <div className="Container-fluid col-lg-12 p-5"></div>
                </div>
            </>
        );
    }