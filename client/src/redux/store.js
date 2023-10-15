import {combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import { applyMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    user:userReducer,
})
const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware:[logger]
})

const persistor = persistStore(store);

export {store ,persistor};