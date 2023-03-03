export const IS_FETCHING = "IS_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const isFetching = () => {
    return({ type: IS_FETCHING});
}

export const fetchSuccess = (gifs) => {
    return({ type: FETCH_SUCCESS, payload: gifs})
}

export const fetchError = (error) => {
    return({ type: FETCH_ERROR, payload: error})
}