import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Fakestore() {
    const [details, setdetails] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(data1 => data1.json())
            .then(data2 => setdetails(data2))
    })

    return (
        <>
            {
                details.map((value, index) => (
                    <>
                        <div className="card col-3 d-inline-flex p-2">
                            <img src={value.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <p className="card-text">{value.category}</p>
                                <Link to ={`/Storedetails/${value.id}`}><input type = "button" value = "View Details" className="btn btn-secondary"/></Link>
                            </div>
                        </div>

                    </>))
            }
        </>
    );


















}