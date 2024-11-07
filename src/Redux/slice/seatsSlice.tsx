import { createSlice } from "@reduxjs/toolkit";

interface SeatType{
    time2 : string,
    seats: string[],
    totalprice: string
}

const initialState : SeatType = {
    time2:'',
    seats : [],
    totalprice:''
}


const seatsSlice = createSlice({
    name: 'seats',
    initialState,
    reducers:{
        settime2(state,action){
          state.time2 = action.payload
        },
        setseats(state, action){
          state.seats = action.payload
        },
        settotalprice(state,action){
          state.totalprice = action.payload
        }
    }
})

export const {settime2, setseats, settotalprice} = seatsSlice.actions
export const seatsreducer = seatsSlice.reducer