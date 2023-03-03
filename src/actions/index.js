export const IS_FETCHING = "IS_FETFHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const isFetching = () => {
    return({ type: IS_FETCHING});
}

export const fetchSuccess = (gifs) => {
    return({ type: FETCH_SUCCESS, payload: gifs})
}