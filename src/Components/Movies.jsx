import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovies, getMovies } from "../Actions";
import Card from "./Card";
import './movies.css'

export default function Movies() {
    //const dispatch = useDispatch();
    
    //useEffect(m => dispatch(getMovies(m)), [dispatch])    

    const [state, setState] = useState('')
    const [movies, setMovies] = useState([])    

    const handleonChange = (e)=> {
        setState(e.target.value)       
    }
    const getMyMovie = async (e)=> {
       e.preventDefault()
        setMovies([])
       const res = await fetch(`http://www.omdbapi.com/?apikey=7f860bb7&s=${state}`)
       let data = await res.json()
       data = Object.entries(data)
       data = data[0]
       data = data[1]
       //ELIMINAR VALORES REPETIDOS QUE LLEGAN DESDE LA API    
        let hash = {}
        data = data.filter(x=> hash[x.imdbID] ? false : hash[x.imdbID] = true)
            
       setMovies(data)
    }   


  
    return (
        <div> 
            <div className='search-bar'> 
                <h1>Welcome to the Movie APP with React-Redux</h1>
                <input type="text" className="form-control" name="" id="" placeholder='search your movie' onChange={e=> handleonChange(e)}/>
                <button className='btn btn-primary' onClick={e=> getMyMovie(e)} > Search! </button>
                <Link to='/favorites'> 
                <button> Go to favorites </button>
                </Link>

            </div>

            <div className="movies"> 
                                 
                {   movies.map(x=> {
                    return <Card key={x.imdbID} title = {x.Title}  year = {x.Year} poster = {x.Poster} id={x.imdbID} />        
                    })  }            
                
            </div>
    </div>
    )
}