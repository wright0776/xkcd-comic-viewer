import axios from 'axios';

const initialState = {
    data: [],
    loading: true,
    errMsg: ''
}

const comicReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RANDOM_COMIC':
            return {
                ...state,
                data: action.comic,
                loading: false
            }
        case 'GET_TODAYS_COMIC':
            return {
                ...state,
                data: action.comic,
                loading: false
            }
        case 'ERR_MSG':
            return {
                ...state,
                data: action.errMsg,
                loading: false
            }
        default: return state;
    }
}
const serverUrl = 'http://cors.vschool.io?url='
const xkcdUrlFirst = 'https://xkcd.com/'
const xkcdUrlLast = '/info.0.json'
const xkcdUrlToday = 'https://xkcd.com/info.0.json';

export const getRandomComic = () => {
    return dispatch => {
        let rando = Math.floor(Math.random() * 1980);
        axios.get(serverUrl + xkcdUrlFirst + rando + xkcdUrlLast)
            .then(response => {
                dispatch({
                    type: 'GET_RANDOM_COMIC',
                    comic: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'ERR_MSG',
                    errMsg: 'sorry, this comic is not available'
                })
            })
    }
}

export const getTodaysComic = () => {
    return dispatch => {
        axios.get(serverUrl + xkcdUrlToday)
            .then(response => {
                dispatch({
                    type: 'GET_TODAYS_COMIC',
                    comic: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'ERR_MSG',
                    errMsg: "sorry, today's comic is not available"
                })
            })
    }
}

export default comicReducer;