import {configureStore} from '@reduxjs/toolkit' // configurestore import karna hai
import counterReducer from '../features/counterSlice' // counterslice ko import karna hai 

const store = configureStore({ // const main configurestore funtion create karna hai
    reducer: { // reducers funiion create kare
        counter : counterReducer, // slice ka sara data store karna hai 
    }
})

export default store; 