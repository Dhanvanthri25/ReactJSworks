import React from "react";
import cer1 from '../Certificates/INTRO FRONT END CERTIFICATE.jpg';
import cer2 from './HTML & CSS DEPTH CERTIFICATION.jpg';
import cer3 from './HTML CERTIFICATION.jpg';
import cer4 from './CERTIFICATION OF BASIC OF JAVA (KG).jpg';
import cer5 from './JAVA CLASSES AND OBJECT CERTIFICATE.jpg';
import cer6 from './CERTIFICATE OF INTRODUCTION TO Object-Oriented Programing in Java.jpg';
import cer7 from './TECH FOUNDATION.jpg';
import cer8 from './CERTIFICATE OF AWS Cloud Technical Essentials.jpg';
import cer9 from './CSS CERTIFICATION.jpg';
import cer10 from './SCRATCH PROGRAMING IN COURSERA.jpg';
import cer11 from './CERTIFICATE OF CRUD IN MONGOdb.jpg';
import cer12 from './CERTIFICATION OF BASIC OF JAVA (KG).jpg';
import './Certificate.css';


export function Certificates() {
    return (
        <>
            <div className="container-fluid bgcer p-3" id="certificate">
                <div className="text-center">
                    <h1 className="certi p-5">CERTIFICATIONS</h1>
                </div>

                <div class="row row-cols-1 row-cols-md-3 g-4 text-center certex mb-4">
                    <div class="col">
                        <div class="card cerimg">
                            <img src={cer1} class="card-img-top " alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Front-End Develpoment</h5>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cerimg">
                            <img src={cer2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Depth</h5>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cerimg">
                            <img src={cer3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Html</h5>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="row row-cols-1 row-cols-md-3 g-4 text-center certex mb-4">
                    <div class="col">
                        <div class="card cerimg">
                            <img src={cer4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Basics of Java</h5>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cerimg">
                            <img src={cer5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Core-Java</h5>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cerimg">
                            <img src={cer6} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Java OOP</h5>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="row row-cols-1 row-cols-md-3 g-4 text-center certex mb-4">
                    <div class="col">
                        <div class="card cerimg">
                            <img src={cer7} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Tech Foundation</h5>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cerimg">
                            <img src={cer8} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">AWS</h5>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cerimg">
                            <img src={cer9} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">CSS-Basis</h5>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="row row-cols-1 row-cols-md-3 g-4 text-center certex">
                    <div class="col">
                        <div class="card cerimg">
                            <img src={cer10} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Scratch Programing</h5>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cerimg">
                            <img src={cer11} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">MongoDB</h5>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card cerimg">
                            <img src={cer12} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Java Programing</h5>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="p-5"></div>


            </div>
        </>

    );
}