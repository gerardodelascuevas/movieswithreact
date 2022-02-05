import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getMyMoviePlease } from "../Actions";


export default function SearchBar(){
    const dispatch = useDispatch();

    let myMovie = useSelector(x=> x.myMoviePlease)
    useEffect(m=> dispatch(getMyMoviePlease(m)))

    const [state, setState] = useState('')

    const onChange = (e)=> {
        setState(e.target.value)       
    }
    const getMyMovie = ()=> {
        return myMovie
    }


    return(
        <div className='container'> 
            <h1>Welcome to the Movie APP with React-Redux</h1>
            <input type="text" className="form-control" name="" id="" placeholder='search your movie' onChange={e=> onChange(e)}/>
            <button className='btn btn-primary' onClick={e=> getMyMovie(e)} > Search! </button>
        </div>
    )

}