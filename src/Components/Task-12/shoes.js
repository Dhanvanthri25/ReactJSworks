import React, { useEffect, useState } from "react";
import "./shoes.css";
import { useParams } from "react-router-dom";

export function Shoesjson() {
    const [details, setdetails] = useState([])
   
    useEffect(() => {
        fetch("http://localhost:3000/data.json")
            .then(data1 => data1.json())
            .then(data2 => setdetails(data2))
    })

    return (
        <>
            <h1>SHOES</h1>
            {
                details.map((value, index) => (
                    <>
                    
                        <div className="card col-lg-2 text-center d-inline-flex m-3" >
                            <img src={value.imageURL} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{value.name}</h5>
                                    <p className="card-text">{value.brand}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{value.gender}</li>
                                    <li className="list-group-item">{value.category}</li>
                                    <li className="list-group-item">{value.price}</li>
                                    <li className="list-group-item">{value.item_left}</li>

                                </ul>
                               <button>View More</button>
                        </div>
                    
                    </>))
            }
        </>
    );


















}