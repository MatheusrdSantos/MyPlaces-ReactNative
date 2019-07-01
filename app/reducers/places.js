import {INITIAL_STATE, PLACES_ACTIONS} from '../actions';

const placesReducer = (state = INITIAL_STATE.app.places, action) =>{
    switch (action.type) {
        case PLACES_ACTIONS.FETCH_OTHER_PLACES:
            return {...state, others:{...state.others, fetchingState: 'success', data: action.payload}};
        case PLACES_ACTIONS.SET_IS_FETCHING_OTHERS:
            return {...state, others:{...state.others, fetchingState: 'fetching'}};
        case PLACES_ACTIONS.SET_FETCHING_ERROR_OTHERS:
            return {...state, others:{...state.others, fetchingState: 'error'}};
        case PLACES_ACTIONS.FETCH_RESTAURANTS_PLACES:
            return {...state, restaurants:{...state.restaurants, fetchingState: 'success', data: action.payload}};
        case PLACES_ACTIONS.SET_IS_FETCHING_RESTAURANTS:
            return {...state, restaurants:{...state.restaurants, fetchingState: 'fetching'}};
        case PLACES_ACTIONS.SET_FETCHING_ERROR_RESTAURANTS:
            return {...state, restaurants:{...state.restaurants, fetchingState: 'error'}};
        case PLACES_ACTIONS.FETCH_MARKETS_PLACES:
            return {...state, markets:{...state.markets, fetchingState: 'success', data: action.payload}};
        case PLACES_ACTIONS.SET_IS_FETCHING_MARKETS:
            return {...state, markets:{...state.markets, fetchingState: 'fetching'}};
        case PLACES_ACTIONS.SET_FETCHING_ERROR_MARKETS:
            return {...state, markets:{...state.markets, fetchingState: 'error'}};
        case PLACES_ACTIONS.TOGGLE_SCHEDULE_MODAL:
            return {...state, others:{...state.others, modals: {...state.others.modals, scheduleModal: !state.others.modals.scheduleModal}}};
            //return {...state, others:{...state.others, modals: {...state.others.modals, scheduleModal: true}}};
        default:
            return state;
    }
}

export default placesReducer;