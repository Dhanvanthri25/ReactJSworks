import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck,faBell} from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";



export function Notifications(){
    return(
       <>
            <div className="Container-Fluid row">
                <div className="col-lg-4 p-4"></div>
                    <div className="text-start col-lg-4 col-md-6 col-12">
                    <h1 className="text-center">Notifications</h1>
                    <p className="bg-info p-4 text-white p-4 m-4"><FontAwesomeIcon icon={faCircleCheck}/>Information Message</p>
                    <p className="bg-success p-4 text-white p-4 m-4"><FontAwesomeIcon icon={faCircleCheck}/>Success Message</p>
                    <p className="bg-warning p-4 text-white p-4 m-4"><FontAwesomeIcon icon={faBell}/>Warning Message</p>
                    <p className="bg-danger p-4 text-white p-4 m-4"><FontAwesomeIcon icon={faCircleExclamation}/>Error Message</p>
                </div>
            </div>
        </>
    );
}