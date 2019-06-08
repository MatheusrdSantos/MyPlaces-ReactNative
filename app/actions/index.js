import axios from 'axios';
import firebase from 'react-native-firebase';
import { CodeGenerator } from '@babel/generator';
export const AUTH_ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}

export const PLACES_ACTIONS = {
    FETCH_OTHER_PLACES: 'FETCH_OTHER_PLACES',
    SET_IS_FETCHING: 'SET_IS_FETCHING',
    SET_FETCHING_ERROR: 'SET_FETCHING_ERROR'
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

export const setIsFetching = () => {
    return {type: PLACES_ACTIONS.SET_IS_FETCHING, payload:null}
}

export const setFetchingError = () => {
    return {type: PLACES_ACTIONS.SET_FETCHING_ERROR, payload:null}
}

export const requestPlaces = () => {
    return (dispatch) => {
        dispatch(setIsFetching())
        let ref = firebase.firestore().collection('places');
        return ref.where('category', '==', 'others').get()
        .then(snapshot => {
            let places = []
            snapshot.forEach(doc => {
                places.push({id:doc.id, ...doc.data()})
                console.log(doc.data())
            });
            dispatch(fetchOtherPlaces(places))
        })
        .catch(err => {
            console.log(err)
            dispatch(setFetchingError())
        });
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
        places: {
            data:[],
            fetchingState: null
        }
    }
}