import {combineReducers, applyMiddleware, createStore} from 'redux';
import {AsyncStorage} from 'react-native';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import authReducer from './auth';
import placesReducer from './places';

/* const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['auth']
} */

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    app: placesReducer
})
//const localPersistReducer = persistReducer(rootReducer)

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export const persistor = persistStore(store)