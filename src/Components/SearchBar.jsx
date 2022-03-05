import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../Actions";


export default function SearchBar(){
    const dispatch = useDispatch();
    //useEffect(m=> dispatch(getMovies(m)))
    //let myMovie = useSelector(x=> x.getMovies)
   

    const [state, setState] = useState('')

    const onChange = (e)=> {
        setState(e.target.value)       
    }
    const getMyMovie = (state)=> {
       dispatch(getMovies(state))
    }

    console.log(state)

    return(
        <div className='container'> 
            <h1>Welcome to the Movie APP with React-Redux</h1>
            <input type="text" className="form-control" name="" id="" placeholder='search your movie' onChange={e=> onChange(e)}/>
            <button className='btn btn-primary' onClick={e=> getMyMovie(e)} > Search! </button>
        </div>
    )

}