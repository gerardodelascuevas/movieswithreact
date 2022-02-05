import React from "react";
import './Card.css'

export default function Card({title, year, poster}){
    return (
        <div className="card" > 
            <img src={poster} alt='img not found' />    
            <h2> {title} </h2>
            <span>{year}</span>
                  

            <button className="btn btn-primary"> Go to the Details </button>
        
        </div>
    )
}