import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
    name :"mainData",
    initialState : {
        text : ""
    },
    reducers : {
        setValue : (initialState, action) => {
            initialState.text = action.payload;
        }
    }
})

export const { setValue } = mainSlice.actions;
export default mainSlice.reducer;