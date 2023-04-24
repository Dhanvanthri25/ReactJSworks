
import React from "react";
import './Socialbuttons.css';



export function Socialbuttons(){
    return(
        <>
            <div className="Container-fluid social p-5">
                <div>
                    <h1 className="text-center p-5 mt-5 but col-lg-12 soc ">Social Buttons</h1>
                </div>
                <div className="text-center">
                    <input type="button" value="Like" Name="Like" className="btn btn-warning me-5 col-6 col-lg-2 rounded-3 "/>
                    <input type="button" value="Comment" Name="Comment" className="btn bg-white me-5 col-6 col-lg-2 rounded-3 "/>
                    <input type="button" value="Share" Name="Share" className="btn btn-primary me-5 text-white col-6 col-lg-2 rounded-3 "/>
                </div>
            </div>
        </>
    );
}