import { FETCH_DATA, UPDATE_DATA, SET_ERROR } from '../actions/index'

const initialState = {
    data: [],
    isFetchingData: false,
    error: ''
}


export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true
            }
        case UPDATE_DATA:
            return {
                ...state,
                data: action.payload,
                isFetchingData: false
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state
    }
}