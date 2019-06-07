import {INITIAL_STATE, PLACES_ACTIONS} from '../actions';

const placesReducer = (state = INITIAL_STATE.app.places, action) =>{
    switch (action.type) {
        case PLACES_ACTIONS.FETCH_OTHER_PLACES:
            return [...state, {id: action.payload.id, name:action.payload.data.name}];
        default:
            return state;
    }
}

export default placesReducer;