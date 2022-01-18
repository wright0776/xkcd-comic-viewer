const initialState = {
    data: []
}

const validateAdd = (fav, data) => {
    if (!data.length) return true;
    return data.every(item => {
        return item.num !== fav.num;
    })
}

const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            console.log(action)
            if (validateAdd(action.fav, state.data)) {
                return {
                    ...state,
                    data: [...state.data, action.fav]
                }
            } else {
                return state;
            }
        case 'REMOVE_FAV':
            console.log(action.num)
            return {
                data: state.data.filter((fav, i) => i !== action.index)
            }
        default:
            return state;
    }
}

export const addFav = fav => {
    return {
        type: 'ADD_FAV',
        fav
    }
}

export const removeFav = index => {
    return {
        type: 'REMOVE_FAV',
        index
    }
}

export default favReducer;