import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA'
export const UPDATE_DATA = 'UPDATE_DATA'
export const SET_ERROR = 'SET_ERROR'

export const getData = () => dispatch => {
    const API_KEY = 'f516bdb97ed378dea4c9519d856d6742'
    const COM_TICKER = 'AAPL'
    dispatch({
        type: FETCH_DATA
    })
    axios 
    .get(`https://fmpcloud.io/api/v3/historical-price-full/${COM_TICKER}?apikey=${API_KEY}`)
    .then(res => {
        console.log('RESPONSE: ', res.data)
    })
}