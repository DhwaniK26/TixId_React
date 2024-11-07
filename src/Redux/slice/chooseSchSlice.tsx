import { createSlice } from "@reduxjs/toolkit";


const chooseSchSlice = createSlice({
    name : "chooseSch",
    initialState : {
        date : '',
        weekday: '',
        theatreName: '',
        screenName: '',
        time:'',
        money : 0,
        year: new Date().getFullYear()
    },
    reducers:{
        setdate(state,action){
            state.date = action.payload
        },
        setweekday(state, action){
            state.weekday = action.payload
        },
        settheatrename(state, action){
            state.theatreName = action.payload
        },
        setsrcreenname(state, action){
            state.screenName = action.payload
        },
        settime(state ,action){
            state.time = action.payload
        },
        setmoney(state,action){
            state.money = action.payload
        }
    }
})


export const {setdate,setweekday,settheatrename,setsrcreenname,settime,setmoney} = chooseSchSlice.actions
export const chooseSchreducer = chooseSchSlice.reducer