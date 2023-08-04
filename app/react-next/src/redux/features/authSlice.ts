import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type initialState = {
    value: AuthState;
}

type AuthState = {
    email: string,
    isLoading: boolean,
    message: string
}

const initialState = {
    value : {
        email: '',
        isLoading: false,
        message: ''
    } as AuthState
} as initialState

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: ()=> {
            return initialState
        },
        logIn: (state, action: PayloadAction<string>)=> {
            return {
                value: {
                    email: action.payload,
                    isLoading: true,
                    message: ''
                }
            }
        },
        logInSuccess: (state) => {
            return {
                value: {
                email: state.value.email,
                isLoading: false,
                message: state.value.message
            }}
            
        },
        logInFailure: (state, action: PayloadAction<string>) => {
            return {
                value: {
                email: state.value.email,
                isLoading: false,
                message: action.payload
            }}
        },
    }
})

export const {logIn, logOut, logInSuccess, logInFailure } = auth.actions
export default auth.reducer
