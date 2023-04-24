import React from "react";
import prf from './congratsprofile.jpg'
import wat from './congratswatch.jpg'
import './congrats.css'
import 'bootstrap/dist/css/bootstrap.css';

export function Congrats(){
    return(
            <>
            <div className="Container-fluid cong p-4">
                <div className="col-lg-12 d-flex justify-content-center">
                    <h1>Congratulations</h1>
                </div>
                <div className="col-lg-12 text-center row">
                    <div className="col-lg-4"></div>
                         <div className="col-lg-4 bgm"><img src = {prf} alt="" className="rounded-3 mt-3 col"/>
                         <h4>Kiran V</h4>
                         <p>Vishnu Institute Of Computer Science And Technology,Bhimavaram</p>
                         <img src = {wat} alt="" className="rounded-3 mt-3"/></div>
                         <div className="col-lg-4 "></div>
                     </div>
                <div >
            </div>
        </div>
    </>
)
}



