import axios from 'axios';

export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_ERROR_REJECTED";

export function fetchMovies(){
    return dispatch => {
        dispatch({
            type: "FETCH_MOVIES",
            payload: axios.get("http://api.tvmaze.com/search/shows?q=batman")
            .then(result => result.data)
        })
    }
}