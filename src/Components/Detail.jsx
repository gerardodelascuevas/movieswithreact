import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addMovies, getMovieDetail } from "../Actions";
import './Detail.css';

export default function Detail(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    dispatch(getMovieDetail(id))
    let myMovie = useSelector(state=> state.moviesDetail)

    console.log('esto es myMovie: ' + myMovie)

    const myFavorite = ()=> {   
        dispatch(addMovies(id))
        alert('Your movie was added successfully')
        // navigate('../')
    }
    
    return (
        <div>
            <button className="btn btn-primary" onClick={myFavorite}> Add to favorites! </button>
            <Link to='../'>
                <button>Back to Home</button>    
            </Link>
        <div className="card bg-light"> 
            <img src={myMovie.Poster} alt={myMovie.name} />
            <h1>{myMovie.Title}</h1>
            <h3>{myMovie.Year}</h3>
            <h4> Rating: {myMovie.imdbRating}</h4>
            <h4>Duration: {myMovie.Runtime}</h4>
            <h4>Awards: {myMovie.Awards}</h4>
            <h4>Language: {myMovie.Language}</h4>
            <h4>Gender: {myMovie.Gender}</h4>
            <span>Plot: {myMovie.Plot}</span>

        </div>
        </div>
    )
}