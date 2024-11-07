import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name : "home",
    initialState :{
        selectedMovie:null
    },
    reducers:{
       setmovie(state, action){
         state.selectedMovie = action.payload
       } 
    }
})

export const {setmovie} = homeSlice.actions 
export const homereducer = homeSlice.reducer