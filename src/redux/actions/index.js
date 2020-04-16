import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA'
export const UPDATE_DATA = 'UPDATE_DATA'
export const SET_ERROR = 'SET_ERROR'

export const getData = () => dispatch => {
    // const API_KEY = 'f516bdb97ed378dea4c9519d856d6742'
    // const COM_TICKER = 'AAPL'
    dispatch({
        type: FETCH_DATA
    })
    axios 
    .get(`https://fmpcloud.io/api/v3/historical-price-full/AAPL?apikey=f516bdb97ed378dea4c9519d856d6742`)

    .then(res => {
        console.log('RESPONSE: ', res.data.historical)
        // const smallerCopy = res.data.historical.slice(0,4)
        // console.log(smallerCopy)
        dispatch({
            type: UPDATE_DATA,
            payload: res.data.historical
        })
    })
    .catch(err => {
        console.log('ERROR FETCHING DATA FROM API: ', err)
        dispatch({
            type: SET_ERROR,
            payload: 'Error fetching data from the API'
        })
    })
}