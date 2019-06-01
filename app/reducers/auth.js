import {INITIAL_STATE, AUTH_ACTIONS} from '../actions';

const authReducer = (state = INITIAL_STATE.auth, action) =>{
    switch (action.type) {
        case AUTH_ACTIONS.LOGIN:
            return {...state, logged: action.payload};
        case AUTH_ACTIONS.LOGOUT:
            return {...state, logged: action.payload};
        default:
            return state
    }
}

export default authReducer;