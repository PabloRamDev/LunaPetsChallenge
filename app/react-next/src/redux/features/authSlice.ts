import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type initialState = {
    value: AuthState;
}

type AuthState = {
    email: string
}

const initialState = {
    value : {
        email: ''
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
                    email: action.payload
                }
            }
        }
    }
})

export const {logIn, logOut } = auth.actions
export default auth.reducer
