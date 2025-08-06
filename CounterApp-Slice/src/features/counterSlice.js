import {createSlice} from '@reduxjs/toolkit' // 1) import a createslice function

const initialState = {value  : 0} // 2) define a initialvalue 

const counterSlice = createSlice({  // 3) make a const and createslice funtion
    name : 'counter', // assign a name of app
    initialState, // initial value 
    reducers : { // reducer create karna hai 
        increment (state){  // and actions ko likhna hai sare
            state.value +=1;
        },
        decrement(state){
            state.value -= 1;
        }
    }
})

export const {increment , decrement} = counterSlice.actions  // export all the actions 
export default counterSlice.reducer; // export reducer 