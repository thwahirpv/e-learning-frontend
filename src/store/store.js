import { configureStore, combineReducers } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import registerReducer from '../feature/auth/registerSlice'
import registerOtpRedicer from '../feature/auth/registerOtpSlice'
import loginReducer from '../feature/auth/loginSlice'
import userDetailsReducer from '../feature/auth/userDetailsSlice'

const rootReducer = combineReducers({
    register: registerReducer,
    registerOtp: registerOtpRedicer,
    login: loginReducer,
    userDetails: userDetailsReducer

})

const persistConfig = {
    key: "root", 
    version: 1, 
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false 
    })
})

export const persistor = persistStore(store)

