import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
    name: "alert",
    initialState: {
        alert_list: [],
    },
    reducers: {
        setAlertList: (state, action) => {
            state.alert_list = action.payload;
        },
    }
})

export const { setAlertList } = alertSlice.actions;

export default alertSlice.reducer;