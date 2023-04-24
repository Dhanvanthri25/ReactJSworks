import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Storedetails() {
    const {id}=useParams()
    const [details, setdetails] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/'+id)
            .then(data1 => data1.json())
            .then(data2 => setdetails(data2))
    })

    return (
        <>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={details.image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{details.title}</h5>
                                        <p className="card-text">{details.price}</p>
                                        <p className="card-text">{details.description}</p>
                                        <p className="card-text">{details.category}</p>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
            
        </>
    );


















}