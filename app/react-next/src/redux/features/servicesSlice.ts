import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type initialState = {
    value: SlicesState[];
}

export type SlicesState = {
    id: string,
    title: string,
    user_email: string,
    pet_sitter_id: string,
    pet_name: string,
    pet_img: string,
    pet_sitter_img: string,
    price:string,
    status: string
}

const initialState: initialState = {
    value: []
};

export const services = createSlice({
    name: "services",
    initialState,
    reducers: {
        Load: (state, action: PayloadAction<SlicesState[]>) => {
            return {
                ...state,
                value: action.payload
            };
        }
    }
});

export const {Load } = services.actions
export default services.reducer
