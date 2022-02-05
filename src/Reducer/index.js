const initialState = {
    moviesLoaded: [],
    moviesFavorites: [],
    moviesDetail: [],
    myMoviePlease:[],
}

export default function rootReducer(state = initialState, action){

    if(action.type === "ADD_MOVIE_FAVORITE"){
        return{
            ...state,
            moviesFavorites: state.moviesFavorites.concat(action.payload)
        }
    }

    if(action.type === "GET_MOVIES"){
        return {
            ...state,
            moviesLoaded:action.payload.Search
        }
    }

    if(action.type === "DELETE_MOVIE"){
        return {
            ...state,
            moviesFavorites: state.moviesFavorites.filter(m=> m.id !== action.payload)
        }
    }

    if(action.type === "GET_DETAILS"){
        return {
            ...state,
            moviesDetail: action.payload, 
        }
        

    }
    return state
}