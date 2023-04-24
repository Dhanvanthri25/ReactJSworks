import React from "react";
import './Work.css';
import signup from './signup.img.png';
import login from './login.img.png';
import feed from './json.img.jpeg';





export function Work() {
    return (
        <>

            <div className="container-fluid text-center end m-0 row my-4" id="work">
                <h1 className="tit p-5">MY PROJECT WORKS</h1>

                <div className="col-lg-4">

                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <img src={feed} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text workcard">Created Mobile details using Fakestore API Using Javascript</p>
                        </div>
                    </div>
                    <div className="card my-4">
                        <img src={login} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text workcard">Created Login Form Using Reactjs</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={signup} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text workcard">Created Signup Form With Usage Of Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">

                </div>
                <div className="p-5"></div>
            </div>

        </>

    );
}