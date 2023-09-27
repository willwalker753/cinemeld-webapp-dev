import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
    name: "alert",
    initialState: {
        alertList: [],
    },
    reducers: {
        setAlertList: (state, action) => {
            state.alertList = action.payload;
        },
    }
})

export const { setAlertList } = alertSlice.actions;

export default alertSlice.reducer;