import data from '../data/gifs';
import { IS_FETCHING, FETCH_SUCCESS } from '../actions/index'

const initialState = {
    gifs: data,
    loading: false,
    error: ''

}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_FETCHING:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                gifs: action.payload,
                error: ""
            }
        default:
            return(state);
    }
}

export default reducer;