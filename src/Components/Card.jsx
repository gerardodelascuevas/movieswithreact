import React from "react";
import './Card.css'
import { Link } from "react-router-dom";

export default function Card({title, year, poster,id}){
    return (
        <div className="card" > 
            <img src={poster} alt='img not found' />    
            <h2> {title} </h2>
            <span>{year}</span>
                  
            <Link to={`/${id}`}>
                <button className="btn btn-primary"> Go to the Details </button>
            </Link>
        </div>
    )
}