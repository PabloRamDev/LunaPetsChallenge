import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/authSlice"
import servicesReducer from "./features/servicesSlice"

import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        authReducer,
        servicesReducer

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 
//create custom selector hook to avoid type errors
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector