
import {createSlice} from "@reduxjs/toolkit"


//we have to follow 3 steps (name,initialstate,reducers)
export const formSlice = createSlice({
    name:"form",

    initialState:{
        value:[],
    },
    reducer:{
        form1:(state,action)=>{
            state.value=[...state.value,action.payload]
        },
    }
})
export const{form1} = formSlice.actions
export default formSlice.reducer