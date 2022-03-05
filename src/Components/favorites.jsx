import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './favorites.css'
import { deleteMovies } from '../Actions';

export default function Favorites(){
    const dispatch = useDispatch()
    let myMovie = useSelector(state=> state.moviesFavorites)
   console.log('aca las favoritas '+ myMovie)
   console.log(myMovie)

   const borrando = (id)=> {
       dispatch(deleteMovies(id))

   }

   return (
       <div>
           <Link to='../'>
                <button> Back to Home </button>
            </Link>
           <h1> favoritas</h1>
           <div> 
            <div className='movies'>
               {myMovie.map(x=> {
                   return <div className="card bg-light">
                       <button className='btn btn-danger boton-eliminar'
                       onClick={()=> borrando(x.imdbID)}
                       >X</button>  
                         <img src={x.Poster} alt={x.name} />
                        <h1>{x.Title}</h1>
                        <h3>{x.Year}</h3>
                        <h4> Rating: {x.imdbRating}</h4>
                        <h4>Duration: {x.Runtime}</h4>
                        <h4>Awards: {x.Awards}</h4>
                        <h4>Language: {x.Language}</h4>
                        <h4>Gender: {x.Gender}</h4>
                        <span>Plot: {x.Plot}</span>
                   </div>
               }) }
          
          
        </div>
           </div>
       </div>
   )
}

