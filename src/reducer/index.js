import data from '../data/gifs';
import { IS_FETCHING } from '../actions/index'

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
        default:
            return(state);
    }
}

export default reducer;