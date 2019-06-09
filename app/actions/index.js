import axios from 'axios';
import firebase from 'react-native-firebase';
import { CodeGenerator } from '@babel/generator';
export const AUTH_ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}

export const PLACES_ACTIONS = {
    FETCH_OTHER_PLACES: 'FETCH_OTHER_PLACES',
    FETCH_MARKETS_PLACES: 'FETCH_MARKETS_PLACES',
    FETCH_RESTAURANTS_PLACES: 'FETCH_RESTAURANTS_PLACES',
    SET_IS_FETCHING_OTHERS: 'SET_IS_FETCHING_OTHERS',
    SET_FETCHING_ERROR_OTHERS: 'SET_FETCHING_ERROR_OTHERS',
    SET_IS_FETCHING_MARKETS: 'SET_IS_FETCHING_MARKETS',
    SET_FETCHING_ERROR_MARKETS: 'SET_FETCHING_ERROR_MARKETS',
    SET_IS_FETCHING_RESTAURANTS: 'SET_IS_FETCHING_RESTAURANTS',
    SET_FETCHING_ERROR_RESTAURANTS: 'SET_FETCHING_ERROR_RESTAURANTS'
}
const PLACES_CATEGORIES = {
    others: 'others',
    markets: 'markets',
    restaurants: 'restaurants',

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

export const setIsFetchingOthers = () => {
    return {type: PLACES_ACTIONS.SET_IS_FETCHING_OTHERS, payload:null}
}

export const setFetchingOthersError = () => {
    return {type: PLACES_ACTIONS.SET_FETCHING_ERROR_OTHERS, payload:null}
}

export const fetchRestaurantPlaces = (data) =>{
    return {type: PLACES_ACTIONS.FETCH_RESTAURANTS_PLACES, payload:data}
}

export const setIsFetchingRestaurants = () => {
    return {type: PLACES_ACTIONS.SET_IS_FETCHING_RESTAURANTS, payload:null}
}

export const setFetchingRestaurantsError = () => {
    return {type: PLACES_ACTIONS.SET_FETCHING_ERROR_RESTAURANTS, payload:null}
}

export const requestPlaces = (category = null) => {
    return (dispatch) => {
        if(category == PLACES_CATEGORIES.others){
            dispatch(setIsFetchingOthers())
        }else if(category == PLACES_CATEGORIES.restaurants){
            dispatch(setIsFetchingRestaurants())
        }
        let ref = firebase.firestore().collection('places');
        return ref.where('category', '==', category).get()
        .then(snapshot => {
            let places = []
            snapshot.forEach(doc => {
                places.push({id:doc.id, ...doc.data()})
                console.log(doc.data())
            });
            if(category == PLACES_CATEGORIES.others){
                dispatch(fetchOtherPlaces(places))
            }else if(category == PLACES_CATEGORIES.restaurants){
                dispatch(fetchRestaurantPlaces(places))
            }
        })
        .catch(err => {
            console.log(err)
            if(category == PLACES_CATEGORIES.others){
                dispatch(setFetchingOthersError())
            }else if(category == PLACES_CATEGORIES.restaurants){
                dispatch(setFetchingRestaurantsError())
            }
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
            others:{
                data:[],
                fetchingState: null
            },
            restaurants:{
                data:[],
                fetchingState: null
            },
            markets:{
                data:[],
                fetchingState: null
            }
        }
    }
}