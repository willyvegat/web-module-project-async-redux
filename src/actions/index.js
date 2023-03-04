import axios from 'axios';

export const IS_FETCHING = "IS_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getGifs = (searchTerm) => {
    return(dispatch => {
        // dispatch({type: IS_FETCHING});
        dispatch(isFetching());
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=F9yz06P5ZP1n53kabNVkRfXQb9WusH4a&q=${searchTerm}`)
            .then(res => {
                // dispatch({type: FETCH_SUCCESS, payload: res.data.data});
                dispatch(fetchSuccess(res.data.data));
            })
            .catch(err => {
                // dispatch({type: FETCH_ERROR, payload: err.message});
                dispatch(fetchError(err.message))
            })
    })
}

export const isFetching = () => {
    return({ type: IS_FETCHING});
}

export const fetchSuccess = (gifs) => {
    return({ type: FETCH_SUCCESS, payload: gifs})
}

export const fetchError = (error) => {
    return({ type: FETCH_ERROR, payload: error})
}