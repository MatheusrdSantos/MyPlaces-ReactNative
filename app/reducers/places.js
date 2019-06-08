import {INITIAL_STATE, PLACES_ACTIONS} from '../actions';

const placesReducer = (state = INITIAL_STATE.app.places, action) =>{
    switch (action.type) {
        case PLACES_ACTIONS.FETCH_OTHER_PLACES:
            return {fetchingState: 'success', data: action.payload};
        case PLACES_ACTIONS.SET_IS_FETCHING:
            return {...state, fetchingState: 'fetching'}
        case PLACES_ACTIONS.SET_FETCHING_ERROR:
            return {...state, fetchingState: 'error'}
        default:
            return state;
    }
}

export default placesReducer;