import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./FormReducer";

export const FormStore = configureStore({
    reducer:{
        form:FormReducer,
    }
})