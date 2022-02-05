

//AGREGAR PELICULAS 
export function addMovies(payload){
    return {type: "ADD_MOVIE_FAVORITE", payload}
}

//const apikey = process.env
const apikey = '7f860bb7'

//OBTENER PELICULAS 
export function getMovies(tittle){
    return dispatch=> {
        return fetch(`http://www.omdbapi.com/?apikey=7f860bb7&s='harry'`)
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
// export function getMovies(tittle){
//     return async (dispatch)=> {
//         const r = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&s='harry`)
//         const x = await r.json()
//         await dispatch({ type: "GET_MOVIES", payload: x })        
//     }   
// }   

//ELIMINAR PELICULAS 
export function deleteMovies(payload){    
    return {
        type: "DELETE_MOVIE",
        payload, 
    }
}
 //DETALLES DE LA PELICULA 
export function getMovieDetail(id){
    return dispatch=> {
        return fetch(`http://www.omdbapi.com/?apikey=7f860bb7&s=${id}`)
        .then(r=> r.json())
        .then(x=> {
            dispatch({
                type: "GET_DETAILS",
                payload: x, 
            })
        })
    }
}
