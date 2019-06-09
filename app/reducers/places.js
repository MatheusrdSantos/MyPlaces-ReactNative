import {INITIAL_STATE, PLACES_ACTIONS} from '../actions';

const placesReducer = (state = INITIAL_STATE.app.places, action) =>{
    switch (action.type) {
        case PLACES_ACTIONS.FETCH_OTHER_PLACES:
            return {...state, others:{fetchingState: 'success', data: action.payload}};
        case PLACES_ACTIONS.SET_IS_FETCHING_OTHERS:
            return {...state, others:{...state.others, fetchingState: 'fetching'}};
        case PLACES_ACTIONS.SET_FETCHING_ERROR_OTHERS:
            return {...state, others:{...state.others, fetchingState: 'error'}};
        case PLACES_ACTIONS.FETCH_RESTAURANTS_PLACES:
            return {...state, restaurants:{fetchingState: 'success', data: action.payload}};
        case PLACES_ACTIONS.SET_IS_FETCHING_RESTAURANTS:
            return {...state, restaurants:{...state.others, fetchingState: 'fetching'}};
        case PLACES_ACTIONS.SET_FETCHING_ERROR_RESTAURANTS:
            return {...state, restaurants:{...state.others, fetchingState: 'error'}};
        case PLACES_ACTIONS.FETCH_MARKETS_PLACES:
            return {...state, markets:{fetchingState: 'success', data: action.payload}};
        case PLACES_ACTIONS.SET_IS_FETCHING_MARKETS:
            return {...state, markets:{...state.others, fetchingState: 'fetching'}};
        case PLACES_ACTIONS.SET_FETCHING_ERROR_MARKETS:
            return {...state, markets:{...state.others, fetchingState: 'error'}};
        default:
            return state;
    }
}

export default placesReducer;