import {combineReducers, applyMiddleware, createStore} from 'redux';
import {AsyncStorage} from 'react-native';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import authReducer from './auth';

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['auth']
}

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    app: "app data"
})
const localPersistReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = createStore(localPersistReducer, applyMiddleware(thunk, logger))

export const persistor = persistStore(store)