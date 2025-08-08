import {configureStore} from '@reduxjs/toolkit'  // 6) import configurestore , todoslice , and reducer
import todoSlice from '../Feature/todoSlice'
import reducer from '../Feature/todoSlice'

const store = configureStore({ 
        reducer : {
            todo : todoSlice
        }
})

export default store;