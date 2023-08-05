import { configureStore } from '@reduxjs/toolkit'
//reducers
import authReducer from "./features/authSlice"
import servicesReducer from "./features/servicesSlice"
//services
import { servicesApi } from './api'

import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        [servicesApi.reducerPath]: servicesApi.reducer,
        authReducer,
        servicesReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(servicesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 
//create custom selector hook to avoid type errors
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector