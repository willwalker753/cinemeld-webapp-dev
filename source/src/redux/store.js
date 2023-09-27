import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./slice/AlertSlice";

export default configureStore({
    reducer: {
        alert: alertReducer,
    },
})