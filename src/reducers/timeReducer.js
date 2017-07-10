import moment from "moment"

export const INCREMENT_REQUESTED = 'timeReducer/INCREMENT_REQUESTED'
export const INCREMENT = 'timeReducer/INCREMENT'
export const DECREMENT_REQUESTED = 'timeReducer/DECREMENT_REQUESTED'
export const DECREMENT = 'timeReducer/DECREMENT'
export const GET_TIME = 'timeReducer/GET_TIME'

const initialState = {
    count: 0,
    now: moment.now(),
    isIncrementing: false,
    isDecrementing: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_REQUESTED:
            return {
                ...state,
                isIncrementing: true
            }

        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
                isIncrementing: !state.isIncrementing
            }

        case DECREMENT_REQUESTED:
            return {
                ...state,
                isDecrementing: true
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
                isDecrementing: !state.isDecrementing
            }
        case GET_TIME:
            return{
                ...state,
                now: moment.now()
            }
        default:
            return state
    }
}

export const increment = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_REQUESTED
        })

        dispatch({
            type: INCREMENT
        })
    }
}

export const incrementAsync = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_REQUESTED
        })

        return setTimeout(() => {
            dispatch({
                type: INCREMENT
            })
        }, 3000)
    }
}

export const decrement = () => {
    return dispatch => {
        dispatch({
            type: DECREMENT_REQUESTED
        })

        dispatch({
            type: DECREMENT
        })
    }
}

export const decrementAsync = () => {
    return dispatch => {
        dispatch({
            type: DECREMENT_REQUESTED
        })

        return setTimeout(() => {
            dispatch({
                type: DECREMENT
            })
        }, 3000)
    }
}

export const getTime = () => {
    return dispatch => {
        dispatch({
            type: GET_TIME
        })
    }
}