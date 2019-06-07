import axios from 'axios';
import firebase from 'react-native-firebase';
export const AUTH_ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}

export const PLACES_ACTIONS = {
    FETCH_OTHER_PLACES: 'FETCH_OTHER_PLACES'
}

export const login = () =>{
    return {type: AUTH_ACTIONS.LOGIN, payload: true}
}
export const logout = () =>{
    return {type: AUTH_ACTIONS.LOGOUT, payload: false}
}

export const fetchOtherPlaces = (data) =>{
    return {type: PLACES_ACTIONS.FETCH_OTHER_PLACES, payload:data}
}

export const requestPlaces = () => {
    return (dispatch) => {
        let ref = firebase.firestore().collection('places');
        return ref.where('category', '==', 'others').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.data())
                dispatch(fetchOtherPlaces({id:doc.id, data:doc.data()}))
            });
        })
        .catch(err => console.log(err));
    }
}

export const INITIAL_STATE = {
    auth: {
        logged: false,
        user:{
            /* name: "Matheus",
            last_name: "Santos",
            id: 10 */
        }
    },
    app: {
        places: []
    }
}