import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies, getMovies } from "../Actions";
import Card from "./Card";
import './movies.css'

export default function Movies() {
    const dispatch = useDispatch();
    let movies = useSelector(x => x.moviesLoaded)
    
    useEffect(m => dispatch(getMovies(m)), [dispatch]);    
  
    return (
        <div className="movies">                      
         {  
                 movies.map(x=> {
               return <Card key={x.imdbID} title = {x.Title}  year = {x.Year} poster = {x.Poster} />        
             })             
         } 
        </div>

    )
}