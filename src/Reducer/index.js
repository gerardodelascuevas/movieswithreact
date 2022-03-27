const initialState = {
    moviesLoaded: [],
    moviesFavorites: [],
    moviesDetail: [],
    myMoviePlease:[],
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case "ADD_MOVIE_FAVORITE":
            return{
               ...state,
                moviesFavorites: state.moviesFavorites.concat(action.payload)

            }
        case "GET_MOVIES":
            return {
                ...state.moviesLoaded,
                moviesLoaded: action.payload,
            }

        case "DELETE_MOVIE":
            let borrada = action.payload
            let filtradas = state.moviesFavorites.filter(x=> x.imdbID !== borrada)    
        
            return{
                ...state,
                moviesFavorites: filtradas,
            }
        case "GET_DETAILS": 
        return {
            ...state,
            moviesDetail: action.payload,
        }

        default: return state
        }
    }