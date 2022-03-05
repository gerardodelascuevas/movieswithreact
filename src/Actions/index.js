

//AGREGAR PELICULAS 
export function addMovies(id){
    return async dispatch=> {
        const r = await fetch(`http://www.omdbapi.com/?apikey=7f860bb7&i=${id}`)
        const x = await r.json()
        dispatch({
            type: "ADD_MOVIE_FAVORITE",
            payload: x,
        })
    }
}

//const apikey = process.env
const apikey = '7f860bb7'

//OBTENER PELICULAS 
export function getMovies(tittle){
    return dispatch=> {
        
        return fetch(`http://www.omdbapi.com/?apikey=7f860bb7&s=${tittle}`)
        .then(r=> r.json())
        .then(x=> {
            dispatch({type: "GET_MOVIES", payload: x})
        })
    }
}


export function getMyMoviePlease(movie){
    return dispatch=> {
        return fetch(`http://www.omdbapi.com/?apikey=7f860bb7&s=${movie}`)
        .then(r=> r.json())
        .then(x=> {
            dispatch({type: "GET_MOVIES", payload: x})
        })
    }
}


//ELIMINAR PELICULAS 
export function deleteMovies(payload){    
    return {
        type: "DELETE_MOVIE",
        payload, 
    }
}
 //DETALLES DE LA PELICULA 
export function getMovieDetail(id){
    return async dispatch=> {
        const r = await fetch(`http://www.omdbapi.com/?apikey=7f860bb7&i=${id}`)
        const x = await r.json()
        dispatch({
            type: "GET_DETAILS",
            payload: x,
        })
    }
}
